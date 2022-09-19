import React from 'react';
import "./AdminPannel.css"

export const AdminPannel = () => {
    return (
        <div>
            <nav className='AdminPanel'>
                <div className="sidebar">
                    <h2>The Coffee Times
                    </h2>
                    <div className='side-list'>
                        <ul>
                            <li>Posts</li>
                            <ul>
                                <li>All Posts</li>
                                <li>Add New</li>
                            </ul>
                            <li>Category</li>
                            <ul>
                                <li>All Category</li>
                                <li>Add New</li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
