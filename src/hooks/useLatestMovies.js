import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtrendingMovies } from "../utils/movieSlice";

const useLatestMovies = () => {
  const dispatch = useDispatch();
    const latestMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/latest?language=en-US&page=1",
      API_OPTIONS
        );
        const json = await data.json();
    dispatch(addtrendingMovies(json.results));
  };
  useEffect(() => {
    latestMovies();
  }, []);
};

export default useLatestMovies;
