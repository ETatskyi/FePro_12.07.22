import './styles.scss';
import { useParams } from 'react-router';
import { connect } from 'react-redux';

import useGetSearchResults from 'hooks/useSearchMovies';

import { setSearchResults } from 'store/actions';

import LoadingSpinner from 'components/LoadingSpinner';
import SearchResultList from 'components/SearchResultList';

const SearchResultPage = ({ results, setSearchResults }) => {
    let { query } = useParams();
    useGetSearchResults(query, setSearchResults);

    return !results ? <LoadingSpinner /> : <SearchResultList list={results} />
}

const mapStateToProps = (state) => ({
    results: state.searchResult,
})

const mapDispatchToProps = {
    setSearchResults
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultPage);