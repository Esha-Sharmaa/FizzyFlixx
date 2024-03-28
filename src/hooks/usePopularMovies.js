import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );

      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    popularMovies();
  }, []);
};

export default usePopularMovies;
