import { useEffect } from "react";
import { MOVIE_URL, API_KEY } from "utils/constants";

const useGetMovieDetails = (id, storeSetter) => {

    useEffect(() => {
        fetch(`${MOVIE_URL}/${id}?api_key=${API_KEY}`)
            .then(resp => resp.json())
            .then(data => storeSetter(data))
            .catch(console.log);
    }, [id, storeSetter]);
}

export default useGetMovieDetails;