import { API_OPTIONS } from "../utils/keys";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addupCommingMovies } from "../utils/movieSlice";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();
  const upCommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addupCommingMovies(json.results));
  };
  useEffect(() => {
    upCommingMovies();
  }, []);
};

export default useUpcommingMovies;
