import axios from '../../../../Components/Comman/FetchData/Api';
import React, { useEffect, useState } from 'react';
import "./Category.css"
import { AiFillDelete } from 'react-icons/ai';

export const Category = () => {
    const [data, setData] = useState([]);

    const api = async () => {
        await axios.get("/Categories").then((response) =>
            setData(response.data)
        )
    };

    const DeleteCate = async (id) => {
     axios.delete(`/Categories/${id}`);
     api();
    }

    useEffect(() => {
        api();
        console.log(data);
    }, []);


    return (
        <div className='allCate'>
            <h2>All Categories</h2>
            {data.length > 0 && <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Index</th>
                            <th>Category</th>
                            <th>Delete</th>
                        </tr>

                        {data.map((item, index) =>
                            <tr key={item.id}>
                                <td >{index + 1}</td>
                                <td >{item.category}</td>
                                <td className='del-cate'><div onClick={() => DeleteCate(item.id)}><AiFillDelete /></div></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>}
        </div>


    )
}
