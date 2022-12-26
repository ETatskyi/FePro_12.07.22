import './styles.scss';
import { useParams } from 'react-router';
import { connect } from 'react-redux';

import MovieDetailsPage from 'components/MovieDetailsPage';
import LoadingSpinner from 'components/LoadingSpinner';

import useGetMovieDetails from 'hooks/useGetDetails';
import { setCurrentMovie } from 'store/actions';
import Error from 'routes/Error';


const DetailsPage = ({ movie, setCurrentMovie }) => {
    const { movieId } = useParams();

    useGetMovieDetails(movieId, setCurrentMovie)

    if (movie?.status_code === 34) return <Error />

    if (Object.keys(movie).length) return <MovieDetailsPage {...movie} />

    return <LoadingSpinner />
}

const mapStateToProps = (state) => ({
    movie: state.currentMovie,
})

const mapDispatchToProps = {
    setCurrentMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);