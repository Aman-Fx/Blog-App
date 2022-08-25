import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='FooterWrap'>
            <Link to={'/Login'}>
                <h3>Add Blogs</h3>
            </Link>
        </div>
    )
}
