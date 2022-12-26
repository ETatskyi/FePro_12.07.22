import { useEffect } from "react";
import { MOVIE_URL, API_KEY } from "utils/constants";

const useGetSection = (type, storeSetter) => {
    useEffect(() => {
        fetch(`${MOVIE_URL}/${type}?api_key=${API_KEY}`)
            .then(resp => resp.json())
            .then(data => storeSetter({ section: type, result: data.results || data }))
            .catch(console.log);
    }, [type, storeSetter]);
}

export default useGetSection;