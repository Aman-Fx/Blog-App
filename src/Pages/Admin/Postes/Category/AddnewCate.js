import React from 'react';
import "./AddnewCate.css";

export const AddnewCate = () => {
    return (
        <div className='addnewcate'>
            <h2>Add New Category</h2>
            <form >
                <input type="text" placeholder='New Category'/>
                <button>Add</button>
            </form>
        </div>
    )
}
