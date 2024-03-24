import { signOut } from "firebase/auth";
import logo from "../images/FIZZYFLIXLOGO.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        onAuthStateChanged(auth, (user) => {
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
      }, []);
  return (
    <div className="flex justify-between items-center px-14">
      <img src={logo} alt="logo" className="w-52 block pt-2" />
      <button
        onClick={handleSignOut}
        id="signOutButton"
        className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
      >
        Sign Out
      </button>
    </div>
  );
};
export default Header;
