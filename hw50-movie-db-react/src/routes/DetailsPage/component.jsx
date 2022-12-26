import './styles.scss';
import MovieDetailsPage from 'components/MovieDetailsPage';
import { useParams } from 'react-router';

import useGetMovieDetails from 'hooks/useGetDetails';


const DetailsPage = () => {

    const { movieId } = useParams();

    const movie = useGetMovieDetails(movieId);

    if (movie) return (
        <>
            <MovieDetailsPage
                movie={movie}
            />
        </>
    )
}


export default DetailsPage;