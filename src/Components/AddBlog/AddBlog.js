import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { EmptyList } from '../Comman/EmptyList/EmptyList';
import './AddBlog.css'

export const AddBlog = () => {

  const history = useNavigate();
  const [isValid, setIsValid] = useState(false)

  const ShowError = () => {
    const getuser = localStorage.getItem('UserLogin');
    if (getuser && getuser.length) {
      setIsValid(true);
    }
  }

  const userLogout = () => {
    //UserLogin is a unique key which is declared in login page while uploading the data to the localstorage
    localStorage.removeItem('UserLogin');
    history("/")
  }

  useEffect(() => {
    ShowError();
  }, [])

  return (
    <div>
      <Link to={'/'} className="go-back"> <span> &#x2190; </span>Go Back</Link>

      {!isValid && <EmptyList />}

      {isValid && <div>

        <div className="add-blog">

          <h1>Add Blogs</h1>
          <form className='blog-input'>
            <div>
              <label>Title:</label><br />
              <input type="text" required />
            </div>

            <div>
              <label htmlFor="">Aurthor's name</label><br />
              <input type="text" required />
            </div>

            <div>
              <label htmlFor="">Add image <span>(Optional)</span></label><br />
              <input type="file" />
            </div>

            <div>
              <label>Date:</label><br />
              <input type="date" />
            </div>

            <div>
              <label>Description:</label><br />
              <textarea />
            </div>

            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>




        <button onClick={userLogout}>Log Out</button>
      </div>}
    </div>
  )
}
