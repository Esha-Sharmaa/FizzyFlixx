import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addupCommingMovies } from "../utils/movieSlice";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();
  const upCommingMoviesStore = useSelector(
    (store) => store.movies.upCommingMovies
  );
  const upCommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addupCommingMovies(json.results));
  };
  useEffect(() => {
    !upCommingMoviesStore && upCommingMovies();
  }, []);
};

export default useUpcommingMovies;
