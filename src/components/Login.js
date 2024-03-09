import { useState } from "react";
import Header from "./Header";
// import image from "../images/backgroundnetflix.jpg"
const Login = () => {
    const [signIn, setSignIn] = useState(true);
    const toggleSignIn = () => {
        setSignIn(!signIn);
    }
    return (
        <div className="bg-gradient-to-br from-black h-full">
            <Header />
            <div className="w-3/12 bg-black mx-auto p-10 bg-opacity-70 rounded">
                <h2 className="text-white font-medium text-3xl mb-7">
                    {
                        signIn?"Sign In" : "Sign Up"
                    }
                </h2>
                <from>
                    {
                        !signIn && <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="p-2 mb-4 block bg-[#333] rounded pt-4 px-5 w-full"
                        />
                    }
                    <input
                        type="email"
                        placeholder="Email or Phone Number"
                        className="p-2 mb-4 block bg-[#333] rounded pt-4 px-5 w-full"
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className="p-2 mb-4 block bg-[#333] rounded pt-4 px-5 w-full"
                    />
                    <button
                        className="p-2 mt-8 w-full text-white bg-[#e50914] rounded"
                    >
                        {signIn?"Sign in":"Sign up"}
                    </button>

                    <p
                        className="text-white mt-6"
                    >
                        {
                            signIn ? "New To Netfilx? " : "Already have an account "
                        }
                        <button
                            onClick={ toggleSignIn}
                            className="underline">
                            {
                                !signIn ? "Sign In Now" : "Sign Up Now"
                            }
                        </button>
                    </p>
                </from>
            </div>
        </div>
    );
};
export default Login;
