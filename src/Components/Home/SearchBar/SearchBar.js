import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './SearchBar.css'
import {FiSearch} from "react-icons/fi"

export const SearchBar = ({ handleSearchKey, formSubmit, blogs, value, handleSuggest, clearSearch }) => {

  const [blogdata, setblogData] = useState([]);

  useEffect(() => {
    setblogData(blogs);
    console.log(blogdata);
  }, [blogs])


  return (
    <div className='searchBar-wrap'>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          onChange={handleSearchKey}
          placeholder= 'Search by category or any keyword'
          value={value}
        />

        {value && <span className='clearsearch' onClick={clearSearch}>X</span>}
        {!value && <span  className='search-icon' ><FiSearch/></span> }
      </form>

      <div className="suggestions">

        {value && blogdata.filter((dropdown) =>
          dropdown.category?.toLowerCase().startsWith(value.toLowerCase()) && dropdown.category !== value
        ).map((suggestion) =>

          <div className='suggestions-list' onClick={() => { handleSuggest(suggestion.category) }}
            key={suggestion.id} >
            <span>Category : </span>
            <span className='category-list'> {suggestion.category}</span>
          </div>
        )
        }

       
      </div>
    </div>

  )
}

// suggestion.category

// { searchKey, handleSearchResults, handleClearSearch }