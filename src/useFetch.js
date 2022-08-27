import { useEffect, useState } from "react";

const useFetch = (link) => {
    const [Ispending, setIspending] = useState(true);
    const [IsError, setIsError] = useState(null);
    const [Data, setData] = useState(null);
    useEffect(() => {
        const abortCont= new AbortController();
        setTimeout(() => {
            
            fetch(link,{signal:abortCont.signal})
                .then((res) => {
                    if (!res.ok) {
                        throw Error("Couldn't connect to the server");
                    }
                    return res.json();
                })
                .then((data) => {
                    // console.log(data);
                    setData(data);
                    setIspending(false);
                    setIsError(null);
                })
                .catch((err) => {
                    // console.log(err.message);
                    if (err.name === 'AbortError') {
                        console.log("error")
                    }else{
                    setIsError(err.message);
                    setIspending(false);
                    }
                });
            }, 3000);
            return ()=>abortCont.abort();
        }, [link])
    return { Data, Ispending, IsError };
}

export default useFetch;