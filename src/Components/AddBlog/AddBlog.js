import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


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

      {!isValid && <div>Error</div> }

      {isValid && <div>
        <h1>AddBlog</h1>
        <button onClick={userLogout}>Log Out</button> 
        </div>}
    </div>
  )
}
