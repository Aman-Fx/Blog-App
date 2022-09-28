import axios from "../../Components/Comman/FetchData/Api";
import React, { useState, useEffect } from 'react'
import './AddBlog.css'

export const AddBlog = () => {

  //Defining values of form to set it to the Database
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [cover, setCover] = useState('');
  const [authorAvatar, setAuthorAvatar] = useState('')
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [allCate, setAllCate] = useState([]);


  //Calling Api for Blog select tool

  const api = async () => {
    await axios.get('/Categories').then((Response) => {
      setAllCate(Response.data)
    })
  };

  useEffect(() => {
    api();
  }, []);


  //Hnadling the form submit and posting it to the jason(database)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Blog Added!');


    const addedBlog = { title, authorName, createdAt, cover, authorAvatar, category, description };

    axios.post("/BlogDb", addedBlog)
      .then((Response) => {
        console.log(Response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
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
            <label htmlFor="Category">Category:</label>
            {/* <input type="text"
              placeholder='Blog category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required /> */}

            {/* <select className="custom-select">
              {allCate.map((item)=>
                <option value='cate' key ={item.id} onChange={(e) => setCategory(e.target.value)}> {item.category}</option>
              )}
            </select> */}
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
  )
}
