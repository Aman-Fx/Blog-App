import axios from '../../../../Components/Comman/FetchData/Api';
import React, { useEffect, useState } from 'react';
// import './Posts.css';

export const Posts = () => {
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
            <h2>All Posts</h2>
            {data.length > 0 && <div >
                <table>
                    <tr>
                        <th>Index</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>description</th>
                        <th>authorName</th>
                        <th>authorAvatar</th>
                        <th>createdAt</th>
                        <th>cover</th>
                        <th>Actions</th>
                    </tr>

                    {data.map((item) =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td> <div className='item-desc'>{item.title}
                            </div>
                            </td>
                            <td><div>{item.category}</div> </td>
                            <td> <div className='item-desc'>{item.description}
                            </div>
                            </td>
                            <td><div>{item.authorName}</div></td>
                            <td><div className='item-desc'> <img src={item.authorAvatar} alt="AuthorAvtar" />
                            </div>
                            </td>
                            <td><div>{item.createdAt}</div></td>
                            <td><div className='item-desc'>{item.cover}
                            </div>
                            </td>
                        </tr>
                    )}


                </table>

            </div>}
        </div>


    )
}