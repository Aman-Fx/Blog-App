import axios from '../../../../Components/Comman/FetchData/Api';
import React, { useEffect, useState } from 'react';
import "./Category.css"

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
        <div className='allCate'>
            <h2>All Categories</h2>
            {data.length > 0 && <div>
                <table>
                    <tr>
                        <th>Index</th>
                        <th>Category</th>
                    </tr>

                    {data.map((item, index) =>
                        <tr key={item.id}>
                            <td>{item.category && index + 1}</td>
                            <td>{item.category}</td>
                        </tr>
                    )}


                </table>

            </div>}
        </div>


    )
}
