import React, { useState} from 'react'
import { EmptyList } from '../../Components/Comman/EmptyList/EmptyList'
import { Footer } from '../../Components/Comman/Footer/Footer'
// import { Filter } from '../../Components/Filter/Filter'
import { BlogList } from '../../Components/Home/BlogList/BlogList'
import { Header } from '../../Components/Home/Header/Header'
import { SearchBar } from '../../Components/Home/SearchBar/SearchBar'
import { BlogData } from '../../Config/BlogData'

export const Home = () => {
  const [blogs, setBlogs] = useState(BlogData);
  const [searchKey, setSearchKey] = useState("")

  //Search Submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults()
  }

  //Dropdown
  const handleSuggest = (value) => {

    setSearchKey(value);
  }

  //search for blog by category
  const handleSearchResults = () => {
    const allBlogs = BlogData;
    const filterBlogs = allBlogs.filter((blogs) =>
      blogs.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    )
    setBlogs(filterBlogs);
  }

  //Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(BlogData)
    setSearchKey('')

  }

  // // Blogs sorting by date

  // const sortBlogs = () => {
  //   const sortedBlogs = BlogData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  //   setBlogs(sortedBlogs);
  // };




  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* sorting by upload time */}
      {/* <Filter handleSortBlogs={sortBlogs} /> */}


      
      {/* Search bar and Add blog */}
      <SearchBar value={searchKey}
        clearSearch={handleClearSearch}
        formSubmitt={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
        handleSuggest={handleSuggest}
      />


      {/* BlogList & Empty list */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

    <Footer/>
    
    </div>
  )
}
