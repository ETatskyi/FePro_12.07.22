import { useEffect } from "react";
import { SEARCH_URL, API_KEY } from "utils/constants";

const useGetSearchResults = (query, storeSetter) => {
    useEffect(() => {
        fetch(`${SEARCH_URL}/?query=${query}&api_key=${API_KEY}`)
            .then(resp => resp.json())
            .then(data => storeSetter(data.results))
            .catch(console.log);
    }, [query, storeSetter]);
}

export default useGetSearchResults;