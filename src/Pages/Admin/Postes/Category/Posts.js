import axios from '../../../../Components/Comman/FetchData/Api';
import React, { useEffect, useState } from 'react';
// import './Posts.css';
import { MdArrowForward } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

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
                        <th>createdAt</th>
                        <th>Edit</th>
                        <th>Preview</th>
                    </tr>   

                    {data.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td> <div className='item-desc'>{item.title}
                            </div>
                            </td>
                            <td><div className='item-desc' >{item.category}</div> </td>
                            <td> <div className='item-desc'>{item.description}
                            </div>
                            </td>
                            <td><div className='item-desc' >{item.authorName}</div></td>
                            <td><div className='item-desc' >{item.createdAt}</div></td>
                            <td><div className='item-desc-icon'> <Link to={`/EditPost/${item.id}`}> <MdModeEdit/> </Link>  </div></td>
                            <td><div className='item-desc-icon'> <Link to={`/Preview/${item.id}`} state > <MdArrowForward/> </Link>  </div></td>
                        
                        </tr>
                    )}


                </table>

            </div>}
        </div>


    )
}