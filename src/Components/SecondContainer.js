import React from "react";
import { useSelector } from "react-redux";
import CartContainer from "./CartContainer";

const SecondContainer = () => {
  const movies = useSelector(
    (store) => store.movies?.populerMovies?.movies?.edges
  );
  const series = useSelector((store) => store.movies?.populerMovies?.tv?.edges);

  if (!movies) return;

  return (
    <div className="bg-black text-white">
      <div className="-mt-32">
        <CartContainer title={"Populer"} movies={movies} />
        <CartContainer title={"Series"} movies={series} />
      </div>
    </div>
  );
};

export default SecondContainer;
