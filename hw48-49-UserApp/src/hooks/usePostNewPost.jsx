import { useState, useEffect } from "react";

const usePostData = (url, data) => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(setResponse)
            .catch(console.log);
    }, []);

    return response
}

export default usePostData;