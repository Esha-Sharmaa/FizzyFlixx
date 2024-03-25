import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute top-[10%] px-12 py-20 h-screen flex flex-col justify-center z-10">
      
      <h1 className="text-5xl font-bold font-sora text-white">{title}</h1>
      <h3 className="text-sm font-medium  w-2/5 text-justify font-sora py-8 text-white">
        {overview}
      </h3>
      <div className="flex gap-7">
        <button className="bg-white text-black px-4 py-2 rounded">
          <FontAwesomeIcon icon={faPlay} /> Play Now
        </button>
        <button className="bg-black opacity-50 text-white px-4 py-2 rounded">
          <FontAwesomeIcon icon={faInfoCircle} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
