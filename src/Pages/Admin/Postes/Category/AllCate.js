import React from 'react';
import { SideBar } from '../../SideBar/SideBar';
import '../AllPost.css';
import { Category } from './Category';

export const AllCate = () => {
  return (
    <div className='outer-container'>
    <div className='side-container' ><SideBar/> </div>
    <div className='content'> <Category/> </div>
</div>
  )
}
