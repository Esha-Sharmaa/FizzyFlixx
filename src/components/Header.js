import { signOut } from "firebase/auth";
import logo from "../images/FIZZYFLIXLOGO.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // user is signed in
            const { uid, displayName, email } = user;
            dispatch(addUser({ uid, displayName, email }));
            // redirect to the Browser route
            navigate("/browse")
          } else {
            // user is signed out
            dispatch(removeUser());
            navigate("/");
          }
        });
        return () => unsubscribe();
        
      }, []);
  return (
    <header className=" absolute top-0 z-50 w-full">
      <nav className="flex justify-between items-center px-14">
        <img src={logo} alt="logo" className="w-52 block " />
        {user && (
          <div>
            <button className="text-white px-4 py-2 rounded font-sora border border-white mr-8 transition duration-300 ease-in-out hover:bg-white hover:text-black">
              GPT Search
            </button>
            <button
              onClick={handleSignOut}
              id="signOutButton"
              className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-sora transition duration-300 ease-in-out"
            >
              Sign Out
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;
