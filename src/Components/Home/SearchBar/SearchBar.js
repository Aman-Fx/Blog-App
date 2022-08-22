import React from 'react'
import { BlogData } from '../../../Config/BlogData'
import './SearchBar.css'

export const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmitt, handleSuggest }) => {
  return (
    <div className='searchBar-wrap'>
      <form onSubmit={formSubmitt}>
        <input
          type="text"
          onChange={handleSearchKey}
          placeholder='Search by category'
          value={value}
        />

        {value && <span onClick={clearSearch}>X</span>}

        <button>Go</button>
      </form>
      <div className="suggestions">
        {/* {value && BlogData.map((suggestion) =>
          <p onClick={() => {handleSuggest(suggestion.category)}} key={suggestion.id}  >
            {suggestion.category}
          </p>

        ) } */}

        { value && BlogData.filter((dropdown) =>
          dropdown.category.toLowerCase().startsWith(value.toLowerCase()) && dropdown.category!==value
        ).map((suggestion) =>
          <p className='suggestions-list' onClick={() => {
            handleSuggest(suggestion.category)}}
            key={suggestion.id} >
            {suggestion.category}
          </p>
        )
        }
      </div>
    </div>
  )
}
