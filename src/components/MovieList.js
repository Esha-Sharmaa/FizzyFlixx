import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  return (
    <div className="px-12 py-6 ">
      <h1 className="text-2xl font-bold font-sora text-white pb-8"> {title}</h1>
      {movies && (
        <div className="flex gap-10 overflow-x-scroll scroll-smooth whitespace-nowrap no-scrollbar">
          {movies.map((movie) => (
            <MovieCard key={movie.id} imgID={movie.backdrop_path} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
