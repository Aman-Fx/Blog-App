import React, { useState, useEffect } from 'react'
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AddBlog } from '../../../Components/AddBlog/AddBlog'
import { EmptyList } from '../../../Components/Comman/EmptyList/EmptyList';
import { SideBar } from '../SideBar/SideBar'
import './AllPost.css';

export const AddPost = () => {

  const [isValid, setIsValid] = useState(false);

  //Only accessible if user is looged in.
  const ShowError = () => {
    const getuser = localStorage.getItem('Logged-in');
    if (getuser && getuser.length) {
      setIsValid(true);
    }
  }
  useEffect(() => {
    ShowError();
  }, [])


  return (<div> {isValid ?
    <div className='outer-container'>
      <div className='side-container' ><SideBar /> </div>
      <div className='content'> <AddBlog /> </div>
    </div> :
    <div> <Link to={'/'} className="go-home"><FiHome/></Link>
    <EmptyList />
    </div>}
  </div>
  )
}
