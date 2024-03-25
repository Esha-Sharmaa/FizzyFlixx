import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
    const topRated = useSelector((store) => store.movies.topRatedMovies);
    const popular = useSelector((store) => store.movies.popularMovies);
    const upComming = useSelector(
      (store) => store.movies.upCommingMovies
    );
    return (
      <div className="-mt-32 relative z-10">
        <MovieList title={"Up Comming"} movies={upComming} />
        <MovieList title={"Now Playing"} movies={nowPlaying} />
        <MovieList title={"Top Rated"} movies={topRated} />
        <MovieList title={"Popular"} movies={popular} />
      </div>
    );
}

export default SecondaryContainer;
