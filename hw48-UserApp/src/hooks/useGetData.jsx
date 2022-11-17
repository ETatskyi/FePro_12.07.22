import { useState, useEffect } from "react";

const useGetData = url => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(setData)
            .catch(console.log);
    },[]);

    return data
}

export default useGetData;