import { useState, useEffect } from "react";
import { SEARCH_URL, API_KEY } from "utils/constants";

const useGetSearchResults = query => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${SEARCH_URL}/?query=${query}&api_key=${API_KEY}`)
            .then(resp => resp.json())
            .then(setData)
            .catch(console.log);
    },);

    if(!data.results){
        return data.status_message
    }

    return data.results
}

export default useGetSearchResults;