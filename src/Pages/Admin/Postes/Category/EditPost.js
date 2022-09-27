import axios from "../../../../Components/Comman/FetchData/Api";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export const EditPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const api = "/BlogDb";

  const apicall = async () => {
    await axios.get(api + '/' + id).then((response) =>
      setBlog(response.data)
    )
  };

  useEffect(() => {
    apicall();
    console.log(blog);
  }, []);

  //Defining values of form to set it to the Database
  const [title, setTitle] = useState(() => {
    if (blog.length) {
     return blog.title
    }
  });
  const [authorName, setAuthorName] = useState(() => blog.authorName);
  const [createdAt, setCreatedAt] = useState(blog.createdAt);
  const [cover, setCover] = useState(blog.cover);
  const [authorAvatar, setAuthorAvatar] = useState(blog.authorAvatar)
  const [description, setDescription] = useState(blog.description);
  const [category, setCategory] = useState(() => blog.category);



  //Hnadling the form submit and posting it to the jason(database)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Blog Edited!');
  }
    // const addedBlog = { title, authorName, createdAt, cover, authorAvatar, category, description };

    return (<div>
       <div>
        <div className="add-blog">
          <h1>Add Blogs</h1>
        </div>

        <div>
          <form className='blog-input' onSubmit={handleSubmit}>

            <div>
              <label>Title:</label><br />
              <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required />
            </div>

            <div>
              <label htmlFor="">Aurthor's name:</label><br />
              <input type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                required />
            </div>

            <div>
              <label htmlFor="">Add Cover:<span className='opt-text'>(Optional)</span></label><br />
              <input type="file"
                value={cover}
                onChange={(e) => setCover(e.target.files)} />
            </div>

            <div>
              <label htmlFor="">Add Author's image:<span className='opt-text' >(Optional)</span></label><br />
              <input type="file"
                value={authorAvatar}
                onChange={(e) => setAuthorAvatar(e.target.value)} />
            </div>

            <div>
              <label>Date:</label><br />
              <input type="date"
                value={createdAt}
                onChange={(e) => setCreatedAt(e.target.value)}
                required />
            </div>

            <div>
              <label htmlFor="">Category:</label><br />
              <input type="text"
                placeholder='Blog category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required />
            </div>

            <div>
              <label>Description:</label><br />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required />
            </div>
          </form>
          <div className="formSubmit" >
            <button>Submit</button>
          </div>
        </div>

      </div>
      </div>
    )
  }