import { useState, useRef } from "react";
import { validateEmail, validatePassword } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import image from "../images/backgroundnetflix.jpg";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(true);
  const [errors, setErrors] = useState({
    email: true,
    passsword: true,
  });
  const [authError, setAuthError] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleEmailValidation = () => {
    const err = validateEmail(email.current.value);
    setErrors({ ...errors, email: err });
  };
  const handlePasswordValidation = () => {
    const err = validatePassword(password.current.value);
    setErrors({ ...errors, password: err });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // If no errors, proceed with form submission
    if (!errors.email && !errors.password && !signIn) {
      // Handle form submission for user signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName, email } = auth.currentUser;
              dispatch(addUser({ uid, displayName, email }));
            })
            .catch((error) => {
              // An error occurred
              console.log(error);
            });
         
        })
        .catch((error) => {
          setAuthError(`${error.code}: ${error.message}`);
        });
    }
    // signup form
    if (!errors.email && !errors.password && signIn) {
      // Handle form submission for user signIn'
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          setAuthError(`${error.code}: ${error.message}`);
        });
    }
  };
  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover bg-center h-screen"
    >
      <div className="bg-gradient-to-br from-black h-full flex justify-center items-center">
        <Header />
        <div className="w-9/12 md:w-3/12 bg-black mx-auto p-10 bg-opacity-70 rounded">
          <h2 className="text-white font-medium text-3xl mb-7">
            {signIn ? "Sign In" : "Sign Up"}
          </h2>
          <form onSubmit={handleSubmit}>
            {authError && (
              <span className=" mt-4 mb-4 font-normal text-sm text-[#eb3942] ">
                {authError}
              </span>
            )}
            {!signIn && (
              <input
                ref={name}
                type="text"
                placeholder="Enter Your Name"
                className="p-2 mb-4 block bg-[#333] rounded pt-4 px-5 w-full text-white"
              />
            )}
            <input
              ref={email}
              type="email"
              placeholder="Email or Phone Number"
              className="p-2 mb-4 block bg-[#333] rounded pt-4 px-5 w-full text-white"
              onChange={handleEmailValidation}
            />
            {errors.email && (
              <span className=" mt-4 mb-4 font-normal text-sm text-[#eb3942] ">
                {errors.email}
              </span>
            )}
            <input
              ref={password}
              type="password"
              placeholder="Password"
              autoComplete="on"
              className="p-2 mb-4 block bg-[#333] rounded pt-4 px-5 w-full text-white"
              onChange={handlePasswordValidation}
            />
            {errors.password && (
              <span className="font-normal text-sm text-[#eb3942]">
                {errors.password}
              </span>
            )}
            <button className="p-2 mt-8 w-full text-white bg-[#e50914] rounded">
              {signIn ? "Sign in" : "Sign up"}
            </button>

            <p className="text-white mt-6">
              {signIn ? "New To FizzyFlix? " : "Already have an account "}
              <span
                onClick={toggleSignIn}
                className="text-blue-500 cursor-pointer"
              >
                {!signIn ? "Sign In Now" : "Sign Up Now"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
