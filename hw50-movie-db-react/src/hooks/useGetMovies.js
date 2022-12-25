import { useState, useEffect } from "react";

const useGetMoviesType = url => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(setData)
            .catch(console.log);
    },[]);

    return data
}

export default useGetMoviesType;