import { useState } from "react";
import { IMG_URL } from "../utils/constants";
import Popup from "./Popup";
const MovieCard = ({ title,id, imgID, overview, release_date, poster_path }) => {
  const [showPopup, setShowPopup] = useState(false);
  if (!imgID) return;
  const handleClick = () => {
    setShowPopup(!showPopup);
  }
  return (
    <>
      <img
        src={`${IMG_URL}${imgID}`}
        alt="Movie"
        className="w-52 h-40 object-cover rounded cursor-pointer"
        onClick={handleClick}
      />
      {showPopup && (
        <Popup
          key={id}
          title={title}
          overview={overview}
          release_date={release_date}
          poster_path={poster_path}
          handleClose={setShowPopup}
        />
      )}
    </>
  );
};

export default MovieCard;
