import { IMG_URL } from "../utils/constants";

const Popup = ({ title, overview, release_date, poster_path, handleClose }) => {
  return (
    <div className="fixed top-0 left-0 bottom-0 z-40 bg-black opacity-90 flex justify-center items-center w-full  ">
      <div className="text-white flex flex-col md:flex-row md:justify-center md:items-center md:gap-6 w-10/12 md:w-6/12 border-red-950 border-4 p-8 md:p-12 mt-10">
        <img
          src={`${IMG_URL}${poster_path}`}
          alt="poster"
          className="w-20 md:w-44"
        />
        <div className="mt-4 md:mt-0 w-full md:w-auto">
          <h3 className="font-sora text-lg m-2">{title}</h3>
          <p className="font-sora text-sm m-2 pb-2 border-b-2 border-gray-400">
            {release_date}
          </p>
          <p className="font-sora text-md m-2 pb-2 text-justify text-wrap">{overview}</p>
          <button
            className="text-white bg-red-600 hover:bg-red-700 px-2 py-1 rounded font-sora transition duration-300 ease-in-out"
            onClick={() => handleClose(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
