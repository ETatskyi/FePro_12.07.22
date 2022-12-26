import { useState, useEffect } from "react";
import { MOVIE_URL, API_KEY } from "utils/constants";

const useGetMovieDetails = id => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${MOVIE_URL}/${id}?api_key=${API_KEY}`)
            .then(resp => resp.json())
            .then(setData)
            .catch(console.log);
    },[]);

    if(!data.title){
        return data.status_message
    }

    return data
}

export default useGetMovieDetails;