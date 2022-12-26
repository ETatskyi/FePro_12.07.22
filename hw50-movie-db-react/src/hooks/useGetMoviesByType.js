import { useState, useEffect } from "react";
import { MOVIE_URL, API_KEY } from "utils/constants";

const useGetMoviesByType = type => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${MOVIE_URL}/${type}?api_key=${API_KEY}`)
            .then(resp => resp.json())
            .then(setData)
            .catch(console.log);
    },[]);

    if(!data.results){
        return data.status_message
    }

    return data.results
}

export default useGetMoviesByType;