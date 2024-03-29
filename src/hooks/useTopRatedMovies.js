import { API_OPTIONS } from "../utils/keys";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addtopRatedMovies(json.results));
  };
  useEffect(() => {
    topRatedMovies();
  }, []);
};

export default useTopRatedMovies;
