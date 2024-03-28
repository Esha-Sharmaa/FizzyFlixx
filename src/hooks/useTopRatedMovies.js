import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const addtopRatedMoviesStore = useSelector(
    (store) => store.movies.addtopRatedMovies
  );
  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addtopRatedMovies(json.results));
  };
  useEffect(() => {
    !addtopRatedMoviesStore && topRatedMovies();
  }, []);
};

export default useTopRatedMovies;
