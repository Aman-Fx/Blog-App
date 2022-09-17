import axios from '../Comman/FetchData/Api';
import { useEffect } from "react";
import { useState } from "react"

export const Source = () => {
    const [data, setData] = useState([]);
    // const [ispending, setIsPending] = useState(true);

    useEffect(() => {
        axios.get("/BlogDb").then((Response) => {
            setData(Response.data);
            console.log(data);
            // setIsPending(false);
        })
    }, []);

    return ({ data, 
        // ispending
     });
}
