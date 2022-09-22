import React from 'react'
import { Link } from 'react-router-dom'
import { Chip } from '../../../Comman/Chip/Chip'
import './BlogItems.css'

export const BlogItems = ({ blog: { id, description, title, createdAt, authorName, authorAvatar, category, cover } }) => {
    return (
        <div className='blogItem-wrap'>
            <img src={cover} alt="Cover" className='blogItem-cover' />
            <Chip label={category} />
           <Link to={`blog/${id}`}> <h3>{title}</h3></Link>
           <Link to={`blog/${id}`}> <p className='blogItem-desc'>{description}</p> </Link>

            <footer>
                <div className="blogItem-author">
                    <img src={authorAvatar} alt="AA" />
                    <div>
                        <h6>{authorName}</h6>
                        <p>{createdAt}</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}
