import React from "react";
import Header from "./Header";
import usePopulerMovies from "../hooks/usePopulerMovies";
import MainContainer from "./MainContainer";

function Browse() {
  usePopulerMovies();
  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
}

export default Browse;
