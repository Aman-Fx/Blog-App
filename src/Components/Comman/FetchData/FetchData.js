import Axios from 'axios';
import { useEffect, useState } from 'react'

export const FetchData = (url) => {

    const [data, setData] = useState('');
    const [error, setError] = useState('')

    useEffect(() => {
        Axios.get(url).then((Response) => {
            setData(Response.data);
            // console.log(Response.data);
        })
        .catch(err =>{
            console.log(err);
            setError(err);
        })

    }, [url])

    console.log(data);
    return ({ data, error })
}
