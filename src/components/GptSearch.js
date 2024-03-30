import GptSearchSuggestions from "./GptSearchSuggestions";
import GptSearchBar from "./GptSearchBar";
import image from "../images/backgroundnetflix.jpg"
const GptSearch = () => {
    return (
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" bg-cover bg-center h-screen relative flex flex-col items-center pt-36 md:pt-24 w-ful"
        >
        <div className="absolute inset-0 bg-gradient-to-b from-black"> </div>
        <GptSearchBar />
        <GptSearchSuggestions />
      </div>
    );
}
export default GptSearch;
