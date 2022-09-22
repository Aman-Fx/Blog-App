import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SideBar.css";

export const SideBar = () => {
    const [showPost, setShowPost] = useState(true);
    const [showCate, setShowCate] = useState(true);

    return (
        <div className='all'>
            <nav className='sidebar' >
                <div className="text">
                    <h2>The Coffee Times
                    </h2>
                </div>
                <ul>
                    <li
                        onClick={() => setShowPost(!showPost)}
                    > Posts   </li>
                    {showPost && <ul>
                        <li > <Link to={"/AllPost"} > All Posts</Link> </li>
                        <li > <Link to={"/AddPost"} >Add New</Link> </li>
                    </ul>}
                    <li onClick={() => setShowCate(!showCate)}> Category  </li>
                    {showCate && <ul>
                        <li  > <Link to={"/AllCate"} >All Category</Link> </li>
                        <li ><Link to={""}  >Add New</Link></li>
                    </ul>}
                </ul>
            </nav>
        </div>
    )
}
