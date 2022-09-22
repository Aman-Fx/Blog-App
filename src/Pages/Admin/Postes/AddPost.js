import React from 'react'
import { AddBlog } from '../../../Components/AddBlog/AddBlog'
import { SideBar } from '../SideBar/SideBar'
import './AllPost.css';

export const AddPost = () => {
  return (
    <div className='outer-container'>
    <div className='side-container' ><SideBar/> </div>
    <div className='content'> <AddBlog/> </div>
</div>
  )
}
