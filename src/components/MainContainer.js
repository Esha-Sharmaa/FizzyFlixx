import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const { id, title, overview } = movies[0];
  
  return (
    <div>
      <VideoBackground movieID={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
