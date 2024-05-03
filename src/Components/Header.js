import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is sign in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        //user is sign out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="w-screen flex justify-between  absolute bg-gradient-to-b from-black z-10">
      <img
        className="h-16"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      ></img>
      {user && (
        <div className="flex flex-col p-5 items-center">
          <img
            className="w-10 h-10 rounded-md"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp"
          ></img>
          <button
            onClick={handelSignOut}
            className="text-center font-semibold p-1 m-1 text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
