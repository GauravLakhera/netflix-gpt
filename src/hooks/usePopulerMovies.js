import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopulerMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const usePopulerMovies = () => {
  const dispatch = useDispatch();

  const getPopular = async () => {
    const data = await fetch(
      "https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20",
      api_options
    );
    const json = await data.json();
    //store the Api data into appStore
    dispatch(addPopulerMovies(json.data));
  };
  useEffect(() => {
    //fetch data from API
    getPopular();
  }, []);
};

export default usePopulerMovies;