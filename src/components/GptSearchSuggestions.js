import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestions = ({ results }) => {
  const { moviesNames, movieResults } = useSelector((store) => store.gpt);
  return (
    <div className="bg-black text-white">
      {
        moviesNames&&
        moviesNames.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)
      }
    </div>
  );
};

export default GptSearchSuggestions;
