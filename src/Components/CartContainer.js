import React from "react";
import Cart from "./Cart";

const CartContainer = ({ title, movies }) => {
  if (!movies) return;

  return (
    <>
      <h1 className="font-raleway text-3xl font-semibold p-5">{title}</h1>
      <div className="flex overflow-x-scroll pl-5" style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
        <div className="flex">
          {movies.map((movie) => (
            <Cart key={movie.node.id} movie={movie.node} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CartContainer;
