import React from "react";

const Cart = ({ movie }) => {
  console.log(movie);
  return (
    <div className=" w-52 p-2">
      <img className="w-52 h-72"  src={movie.primaryImage.url}></img>
    </div>
  );
};

export default Cart;
