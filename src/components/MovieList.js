import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight} from "react-icons/md";
const MovieList = ({rowID, title, movies }) => {
  const slideLeft = () => {
    let slider = document.getElementById(`slider${rowID}`);
    slider.scrollLeft -= 500;
  }
    const slideRight = () => {
      let slider = document.getElementById(`slider${rowID}`);
      slider.scrollLeft += 500;
    };
  return (
    <div className="md:px-12 py-6 relative group">
      <h1 className="text-2xl font-bold font-sora text-white pb-8 pl-2">
        {title}
      </h1>
      {movies && (
        <>
          <MdChevronLeft
            className="bg-white rounded-full absolute  left-[5%] top-[50%] cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block"
            size={40}
            onClick={slideLeft}
          />
          <div className="flex gap-10 overflow-x-scroll scroll-smooth whitespace-nowrap no-scrollbar" id={`slider${rowID}`}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} title={ movie.title} imgID={movie.backdrop_path} />
            ))}
          </div>
          <MdChevronRight
            className="bg-white rounded-full absolute right-[5%] bottom-[30%] cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block"
            size={40}
            onClick={slideRight}
          />
        </>
      )}
    </div>
  );
};

export default MovieList;
