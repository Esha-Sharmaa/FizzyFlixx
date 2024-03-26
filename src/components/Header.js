import { signOut } from "firebase/auth";
import logo from "../images/FIZZYFLIXLOGO.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleShowGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGptSearchToggle = () => {
    dispatch(toggleShowGptSearch());
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        // redirect to the Browser route
        navigate("/browse");
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
            <div className="relative inline-block text-left mr-8 ">
              <select className="appearance-none bg-white border border-gray-400 text-gray-700 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500">
                {SUPPORTED_LANG.map((lang) => <option value={lang.identifier}> {lang.name }</option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12L4 6h12z" />
                </svg>
              </div>
            </div>
            <button
              onClick={handleGptSearchToggle}
              className="text-white px-4 py-2 rounded font-sora border border-white mr-8 transition duration-300 ease-in-out hover:bg-white hover:text-black"
            >
              {showGptSearch ? "Browse" : "GPT Search"}
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
