import { IMG_URL } from "../utils/constants";
const MovieCard = ({ imgID }) => {
  if (!imgID) return;
  return (
    <>
        <img
          src={`${IMG_URL}${imgID}`}
          alt="Movie"
          className="w-52 h-40 object-cover rounded cursor-pointer"
        />
    </>
  );
};

export default MovieCard;
