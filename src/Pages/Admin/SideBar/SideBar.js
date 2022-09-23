import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
                    {showPost && <ul >
                        <NavLink to={"/AllPost"} > <li>All Posts</li> </NavLink>
                        <NavLink to={"/AddPost"} > <li>Add New</li> </NavLink>
                    </ul>}
                    <li onClick={() => setShowCate(!showCate)}> Category  </li>
                    {showCate && <ul>
                        <NavLink to={"/AllCate"} > <li>All Category</li> </NavLink>
                        <NavLink to={"/AddNew"}  > <li>Add New</li> </NavLink>
                    </ul>}
                </ul>

                <h5 className='log-out'>Log out</h5>
            </nav>
        </div>
    )
}
