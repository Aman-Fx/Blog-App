import axios from "../../Components/Comman/FetchData/Api";
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Chip } from '../../Components/Comman/Chip/Chip';
import { EmptyList } from '../../Components/Comman/EmptyList/EmptyList';
import './Blog.css'

export const Blog = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const api = "/BlogDb";

  const api2 = async () => {
    await axios.get(api + '/' + id).then((response) =>
      setBlog(response.data)
    )
  };

  useEffect(() => {
    api2();
    console.log(blog);
  }, []);



  return (
    <div>
      <span className="go-back" onClick={() => { navigate(-1) }}> &#x2190; Go Back</span>
      {blog ?
        <div className='blog-wrap'>

          <header>
            <p className='blog-date'> Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
          </header>

          <img src={blog.cover} alt="cover" />
          <div className='blog-subcategory'>
            <div>
              <Chip label={blog.category} />
            </div>
          </div>

          <p className='blog-desc'> {blog.description}</p>

          <hr />

          <div className="aurthor-detail">
            <img src= {blog.authorAvatar} alt="Author Avatar" />
            <address> -Written by {blog.authorName}</address>

          </div>
        </div>
        : (<EmptyList />)
      }


    </div>
  )
}
