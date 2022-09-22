import axios from '../../../../Components/Comman/FetchData/Api';
import React, { useEffect, useState } from 'react';

export const Category = () => {
    const [data, setData] = useState([]);

    const api = async () => {
        await axios.get("/BlogDb").then((response) =>
            setData(response.data)
        )
    };

    useEffect(() => {
        api();
        console.log(data);
    }, []);

    return (
        <div>
            {data.length > 0 && <div>
                {data.map((item, index) =>
                    <div key={item.id}>{ item.category && index}{item.category}</div>
                )}
            </div> }
        </div>
            
       
    )
}
