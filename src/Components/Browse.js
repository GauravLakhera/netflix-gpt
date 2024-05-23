import React from "react";
import Header from "./Header";
import usePopulerMovies from "../hooks/usePopulerMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

function Browse() {
  usePopulerMovies();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondContainer />
    </>
  );
}

export default Browse;
