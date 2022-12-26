import './styles.scss';
import { useParams } from 'react-router';
import useGetSearchResults from 'hooks/useSearchMovies';

import LoadingSpinner from 'components/LoadingSpinner';
import SearchResultList from 'components/SearchResultList';

const SearchResultPage = () => {
    const { query } = useParams();
    const results = useGetSearchResults(query);
    console.log(query)

    return (<>
        {!results ? <LoadingSpinner /> : <SearchResultList list={results} />}
    </>
    )
}


export default SearchResultPage;