import React from 'react'

export const Filter = ( {handleSortBlogs}) => {
    return (
        <div>
            <button onClick={handleSortBlogs}> click me</button>
        </div>
    )
}
