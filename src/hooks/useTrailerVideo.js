import { useEffect } from "react";
import { API_OPTIONS } from "../utils/keys";
import { useDispatch, } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const useTrailerVideo = (movieID) => {
  const dispatch = useDispatch();
  const backVideoFetch = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const results = json.results;
    const trailer = results.filter((ele) => ele.name === "Official Trailer");
    dispatch(addTrailerVideo(trailer[0]));
  };
  useEffect(() => {
    backVideoFetch();
  }, []);
};
export default useTrailerVideo;