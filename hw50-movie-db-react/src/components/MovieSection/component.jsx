import './styles.scss';
import useGetMoviesByType from 'hooks/useGetMoviesByType';
import LoadingSpinner from 'components/LoadingSpinner';

import MovieCard from 'components/MovieCard';

const MoviesSection = ({ type }) => {
    const movies = useGetMoviesByType(type);
    console.log(movies)

    if (!Array.isArray(movies)) {
        return <LoadingSpinner/>
    }

    return (
        <div className='movies-section'>
            {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        </div>
    )
}


export default MoviesSection;