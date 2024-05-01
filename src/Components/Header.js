import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)
  const handelSignOut=()=>{
signOut(auth).then(()=>{
navigate("/");
}).catch((error)=>{
console.log(error);
})
  }
  return (
    <div className="w-screen flex justify-between  absolute bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      ></img>
      {user&&(<div className="flex flex-col items-center p-3">
        <img
          className="w-10 h-10"
          src="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp"
        ></img>
        <button onClick={handelSignOut} className="text-center font-semibold p-1 m-1 text-white rounded-xl bg-gray-800">Sign Out</button>
      </div>)}

    </div>
  );
}

export default Header;
