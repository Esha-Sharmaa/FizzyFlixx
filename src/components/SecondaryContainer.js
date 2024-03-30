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
      <div className="md:-mt-32 relative z-10">
        <MovieList rowID={1} title={"Up Comming"} movies={upComming} />
        <MovieList rowID={2} title={"Now Playing"} movies={nowPlaying} />
        <MovieList rowID={3} title={"Top Rated"} movies={topRated} />
        <MovieList rowID={4} title={"Popular"} movies={popular} />
      </div>
    );
}

export default SecondaryContainer;
