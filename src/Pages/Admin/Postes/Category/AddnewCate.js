import axios from '../../../../Components/Comman/FetchData/Api';
import React, { useState } from 'react';
import "./AddnewCate.css";

export const AddnewCate = () => {
    const [category, setCategory] = useState('')


    const HandleChange = (e) => {
        setCategory(e.target.value);
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        // alert("Category added!"); 
        const NewCategory = { category }
        axios.post("Categories", NewCategory)
            .then
            ((Response) => { console.log(Response) })
            .catch((error) => {
                console.log(error);
            })
            setCategory('');
            
    }

    return (
        <div className='addnewcate'>
            <h2>Add New Category</h2>
            <form onSubmit={HandleSubmit}>
                <div>
                    <input type="text" placeholder='New Category' value={category} onChange={HandleChange} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
