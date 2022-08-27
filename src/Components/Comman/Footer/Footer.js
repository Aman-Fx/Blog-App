import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.css';

export const Footer = () => {

    const history = useNavigate();

    const handleLogins =() =>{
        const getuser = localStorage.getItem('UserLogin');
        if (getuser && getuser.length) {
            history('/AddBlog')
        } else {
            history('/Login')
        }
    }

    return (
        <div className='FooterWrap'>
            <h3 onClick={handleLogins}>Add Blogs</h3>
        </div>
    )
}
