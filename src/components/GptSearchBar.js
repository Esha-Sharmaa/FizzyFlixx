import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstants";
import { useRef } from "react";
import model from "../utils/googleAi";
import { API_OPTIONS } from "../utils/constants";
import { addMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const preferredLang = useSelector((store) => store.config.lang);
  const searchText = useRef();
  const dispatch = useDispatch();

  async function searchMovieTMDB(movie) {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  }
  async function aiRun(search) {
    try {
      const result = await model.generateContent(search);
      const response = await result.response;
      const text = response.text();
      const moviesNames = text.split(",");

      const promiseArray = moviesNames.map((movie) => searchMovieTMDB(movie));
      const TMDBResults = await Promise.all(promiseArray);

      dispatch(
        addMovieResults({ moviesNames: moviesNames, movieResults: TMDBResults })
      );
    } catch (error) {
      console.log(error);
    }
  }
  const handleSearch = (e) => {

    const query = `Act as a movie recommendation system and suggest movie for the query: ${searchText.current.value}. Give only 5 movies name in the comma separated format like: Don,Breaking Bad,Godfather,Poor Things`;
    aiRun(query);
  };

  return (
    <div className="flex gap-8 text-white px-8 py-6 rounded-md shadow-lg relative z-10 w-[60%]">
      <input
        ref={searchText}
        type="text"
        className="font-sora w-full bg-transparent text-white placeholder-gray-400 border-b-2 border-transparent focus:outline-none focus:border-red-500"
        placeholder={lang[preferredLang].gptSearchPlaceholder}
      />
      <button
        onClick={handleSearch}
        className="font-sora mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
      >
        {lang[preferredLang].search}
      </button>
    </div>
  );
};
export default GptSearchBar;
