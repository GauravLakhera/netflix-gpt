import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle"
import VideoContainer from "./VideoContainer"

function MainContainer() {
  const movies = useSelector((store) => store.movies?.populerMovies?.movies);

  if (!movies) return;
  const mainMovieTitle=movies.edges[0].node.titleText.text;
  const mainMovieDescription=movies.edges[0].node.plot.plotText.plainText;
  return (
    <>
    <VideoTitle title={mainMovieTitle} description={mainMovieDescription}/>
    <VideoContainer/>
    </>
  )
}

export default MainContainer;
// The behavior you're describing is related to how React and Redux work asynchronously. Let's break down what's happening:

// 1. Initially, when the `MainContainer` component mounts, it executes the `useSelector` hook to retrieve the `populerMovies` data from the Redux store. Since Redux store initialization is asynchronous and the data might not be available immediately, `movies` might be `null` initially.

// 2. Since the `movies` variable might be `null` initially, the `if (!movies) return;` statement prevents the component from rendering anything if `movies` is `null`.

// 3. However, even though the component doesn't render anything initially, the component still exists in the React tree and continues to be mounted. Therefore, it continues to exist in the background, waiting for changes in the Redux store.

// 4. Meanwhile, in the background, Redux makes an asynchronous API call to fetch the movie data. Once the API call is complete and the movie data is available, Redux updates the `populerMovies` state in the store.

// 5. When the Redux store state is updated with the movie data, React re-renders the `MainContainer` component.

// 6. This time, when the component re-renders, the `useSelector` hook fetches the updated `populerMovies` data from the Redux store, and since it's no longer `null`, the component proceeds to log the movie data to the console.

// So, even though the component initially doesn't render anything due to the `if (!movies) return;` statement, it remains mounted and continues to listen for changes in the Redux store. Once the movie data becomes available and the Redux store is updated, the component re-renders, and the movie data is logged to the console.
