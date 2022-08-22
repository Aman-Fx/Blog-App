import React from 'react'
import { Link } from 'react-router-dom'
import { Chip } from '../../../Comman/Chip/Chip'
import './BlogItems.css'

export const BlogItems = ({ blog: { id, description, title, createdAt, authorName, authorAvatar, category, cover } }) => {
    return (
        <div className='blogItem-wrap'>
            <img src={cover} alt="Cover" className='blogItem-cover' />
            <Chip label={category} />
            <h3>{title}</h3>
            <p className='blogItem-desc'>{description}</p>

            <footer>
                <div className="blogItem-author">
                    <img src={authorAvatar} alt="AA" />
                    <div>
                        <h6>{authorName}</h6>
                        <p>{createdAt}</p>
                    </div>
                </div>
                <Link className='blogItem-link' to={`blog/${id}`}><span> &#x2192; </span></Link>
            </footer>

        </div>
    )
}
