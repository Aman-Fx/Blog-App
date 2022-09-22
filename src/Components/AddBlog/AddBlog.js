import axios from "../../Components/Comman/FetchData/Api";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { EmptyList } from '../Comman/EmptyList/EmptyList';
import './AddBlog.css'

export const AddBlog = () => {

  const history = useNavigate();
  const [isValid, setIsValid] = useState(false);
  //For sub category inputs
  const [val, setVal] = useState([]);

  //Adding inputs
  const handleAdd = () => {
    const abc = [...val, []]
    setVal(abc)
  }

  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val]
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata)
    setSubCategory(inputdata);
  }
  const handleDelete = (i) => {
    const deletVal = [...val]
    deletVal.splice(i, 1)
    setVal(deletVal)
  }


  //Defining values of form to set it to the Database
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [cover, setCover] = useState('');
  const [authorAvatar, setAuthorAvatar] = useState('')
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  //Hnadling the form submit and posting it to the jason(database)
  const handleSubmit = (e) => {
    // e.preventDefault();
    alert('Blog Added!');

    const addedBlog = { title, authorName, createdAt, cover, authorAvatar, category, description, subCategory };

    axios.post("/BlogDb", addedBlog)
      .then((Response) => {
        console.log(Response);
      })
      .catch(error => {
        console.log(error);
      })
  }




  //If user is not logged in
  const ShowError = () => {
    const getuser = localStorage.getItem('UserLogin');
    if (getuser && getuser.length) {
      setIsValid(true);
    }
  }

  useEffect(() => {
    ShowError();
  }, [])

  return (
    <div>

      {!isValid && <EmptyList />}

      {isValid && <div>


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
              <label htmlFor="">Aurthor's name</label><br />
              <input type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                required />
            </div>

            <div>
              <label htmlFor="">Add Cover <span className='opt-text'>(Optional)</span></label><br />
              <input type="file"
                value={cover}
                onChange={(e) => setCover(e.target.files)} />
            </div>

            <div>
              <label htmlFor="">Add Author's image <span className='opt-text' >(Optional)</span></label><br />
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
              <label htmlFor="">Category</label><br />
              <input type="text"
                placeholder='Blog category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required />
            </div>

            <div >
              <label htmlFor="Sub Category">Sub Category <span className='opt-text' >(Optional) we suggest to add 3-4 sub categories</span></label>

              {val.map((data, i) => (
                <div key={i} className='sub-category'>
                  <input type="text" value={data} onChange={e => handleChange(e, i)} />
                  <span onClick={() => handleDelete(i)}> X </span>
                </div>
              ))
              }
              <p onClick={() => handleAdd()}>Add</p>
            </div>

            <div>
              <label>Description:</label><br />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required />
            </div>

            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>}
    </div>
  )
}
