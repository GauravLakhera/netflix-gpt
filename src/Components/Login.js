import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { validation } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [validationInfo, setvalidationInfo] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const passwowrd = useRef(null);

  const ToggleSign = () => {
    setIsSignIn(!isSignIn);
  };

  const checkValidation = () => {
    const message = validation(
      email.current.value, //this is trigger or contain the value inside the input box of email
      passwowrd.current.value //this is trigger or contain the value inside the input box of password
    );
    setvalidationInfo(message);
    if (message) return; //email and pass is not correct
    //signin signup logic
    if (!isSignIn) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        passwowrd.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setvalidationInfo(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        passwowrd.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setvalidationInfo(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            className=""
            src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          ></img>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-black rounded-md bg-opacity-75 my-16 flex flex-col left-0 right-0 p-10 w-11/12 md:w-3/12 md:p-16 mx-auto flex-wrap text-white "
        >
          <h1 className="font-bold text-3xl my-5">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {/* if its not sign in then show extra input feild Name for sign up */}
          {!isSignIn && (
            <input
              type="text"
              placeholder="Name"
              className="p-4 m-2 w-full  bg-gray-700 bg-opacity-40 rounded-sm border"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 m-2 w-full bg-gray-700 bg-opacity-40 rounded-sm border"
          />
          <input
            ref={passwowrd}
            type="password"
            placeholder="Password"
            className="p-4 m-2 w-full  bg-gray-700 bg-opacity-40 rounded-sm border"
          />
          <p className="text-red-800">{validationInfo}</p>
          <button
            onClick={checkValidation}
            className=" p-2 m-2 w-full bg-red-700 rounded-sm hover:bg-red-600"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <h1 className="text-gray-400 hover:text-gray-300 cursor-pointer m-2">
            Forgot pssword ?
          </h1>
          <h1 className="cursor-pointer underline  m-2" onClick={ToggleSign}>
            {isSignIn ? "New here Sign up Now" : "Alredy a use Sign in"}
          </h1>
        </form>
      </div>
    </>
  );
};

export default Login;
