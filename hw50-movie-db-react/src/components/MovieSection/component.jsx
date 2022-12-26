import './styles.scss';
import { connect } from 'react-redux';

import { setSectionMovies } from 'store/actions';

import useGetSection from 'hooks/useGetSection';

import LoadingSpinner from 'components/LoadingSpinner';
import MovieCard from 'components/MovieCard';


const MoviesSection = ({ type, sections, setSectionMovies }) => {
    useGetSection(type, setSectionMovies);

    if (!sections[type].length) {
        return <LoadingSpinner />
    }

    return (
        <div className='movies-section'>
            {sections[type].map((movie) => <MovieCard {...movie} key={movie.id} />)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    sections: state,
})

const mapDispatchToProps = {
    setSectionMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSection);