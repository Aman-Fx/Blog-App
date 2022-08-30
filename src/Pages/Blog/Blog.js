import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Chip } from '../../Components/Comman/Chip/Chip';
import { EmptyList } from '../../Components/Comman/EmptyList/EmptyList';
import { FetchData } from '../../Components/Comman/FetchData/FetchData';
// import { BlogData } from '../../Config/BlogData';
import './Blog.css'


export const Blog = () => {

  const { data: blogData } = FetchData("http://localhost:3333/BlogDb");
  const { id } = useParams();
  const [blog, setBlog] = useState(null)


  useEffect(() => {
    let blog = blogData.find((blog) => blog.id === parseInt(id));
    
    if (blog) {
      setBlog(blog)
    }
  }, [blogData, id])

  console.log(blog);

  return (
    <div>
      <Link to={'/'} className="go-back"> <span> &#x2190; </span>Go Back</Link>

      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'> Published {blog.createdAt}</p>

            <h1>{blog.title}</h1>

            <div className='blog-subcategory'>
              {blog.subCategory.map((category, index) => (
                <div key={index}>
                  <Chip key={index} label={category} />
                </div>

              ))}
            </div>

          </header>
          <img src="{cover}" alt="cover" />

          <p className='blog-desc'> {blog.description}</p>
        </div>
      ) : (<EmptyList />)
      }


    </div>
  )
}
