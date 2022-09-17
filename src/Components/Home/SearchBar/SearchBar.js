import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './SearchBar.css'

export const SearchBar = ({ handleSearchKey, formSubmit, blogs, value, handleSuggest, clearSearch}) => {

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
          placeholder='Start typing to search by category'
          value={value}
        />

        {value && <span className='clearsearch' onClick={clearSearch}>X</span>}
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