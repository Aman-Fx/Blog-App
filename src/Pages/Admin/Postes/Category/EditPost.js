import axios from "../../../../Components/Comman/FetchData/Api";
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

export const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const api = "/BlogDb";

  //Defining values of form to set it to the Database
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [cover, setCover] = useState('');
  const [authorAvatar, setAuthorAvatar] = useState('')
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [allCate, setAllCate] = useState([]);

  const apicall = async () => {
    await axios.get(api + '/' + id).then((response) =>
    (setTitle(response.data.title),
      setAuthorName(response.data.authorName),
      setCreatedAt(response.data.createdAt),
      // setCover(response.data.cover),
      // setAuthorAvatar(response.data.authorAvatar),
      setDescription(response.data.description),
      setCategory(response.data.category))

    )
    await axios.get('/Categories').then((Response) => {
      setAllCate(Response.data)
    })
  };

  useEffect(() => {
    apicall();
  }, []);

  //Hnadling the form submit and posting it to the jason(database)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Blog Edited!');
    const addedBlog = { title, authorName, createdAt, cover, authorAvatar, category, description };

    axios.put(api + '/' + id, addedBlog)
    .then((Response) => {
      console.log(Response.data);
    })
    .catch(error => {
      console.log(error);
    })

  }

  return (<div>
    <div>
      <span className="go-back" onClick={() => { navigate(-1) }}> &#x2190; Go Back</span>
      <div className="add-blog">
        <h1>Edit Blog</h1>
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

          <div >
            <label htmlFor="Category">Category :</label>
            <div>
              <select className="custom-select" onChange={(e) => setCategory(e.target.value)}>
                <option value="Select category">{category}</option>
                {allCate.map((item) =>
                  <option value={category} key={item.id} > {item.category}</option>
                )}
              </select>
            </div>

          </div>

          <div>
            <label>Description:</label><br />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required />
          </div>

          <div className="formSubmit" >
            <button>Submit</button>
          </div>
        </form>


      </div>
    </div>
  </div>
  )
}