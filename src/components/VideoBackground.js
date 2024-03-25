import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieID }) => {
  useTrailerVideo(movieID);
  const trailerObj = useSelector((store) => store.movies.trailerVideo);
  return (
    <div>
      <div className="absolute inset-0 bg-gradient-to-r from-black"></div>
      <iframe
        className="h-screen w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerObj.key}?autoplay=1&mute=1&fs=1&controls=0&modestbranding=0&controls=0&amp`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
