// import Axios from 'axios';
import axios from '../../Components/Comman/FetchData/Api';
import React, { useEffect, useState } from 'react';
import { EmptyList } from '../../Components/Comman/EmptyList/EmptyList';
// import { FetchData } from '../../Components/Comman/FetchData/FetchData';
import { BlogList } from '../../Components/Home/BlogList/BlogList';
import { Header } from '../../Components/Home/Header/Header';
import { SearchBar } from '../../Components/Home/SearchBar/SearchBar';
import { Datareciver } from '../../Components/practice/Datareciver';


export const Home = () => {

  // const api = async () => {
  //   const response = await axios.create().get("http://localhost:3333/BlogDb");
  //   if (response.status === 200 || response.status === 201) {
  //     setBlogs(response.data);
  //     return response.data;
  //   } else return [];
  // }
  // useEffect(() => {
  //   api();
  // }, []);


  const [blogs, setBlogs] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [searchKey, setSearchKey] = useState("");


  const api = async () => {
    try {
      const result = await axios.get("/BlogDb")
      setBlogs(result.data);
      setBlogData(result.data)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    api();
  }, []);


  //Search Submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  }

  //Dropdown
  const handleSuggest = (value) => {
    setSearchKey(value);
  }
  //Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogData);
    setSearchKey('');
  }

  //search for blog by category
  const handleSearchResults = (value) => {
    setSearchKey(value);
    const filterBlogs = blogs.filter((item) =>
      item.category?.toLowerCase().includes(searchKey?.toLowerCase().trim())
    )
    setBlogs(filterBlogs)
    console.log(blogs);
  }


  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search bar*/}
      <SearchBar
        value={searchKey}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
        handleSuggest={handleSearchResults}
        blogs={blogs}
        clearSearch={handleClearSearch}
      />


      {/* BlogList & Empty list */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

      <Datareciver />


    </div>
  )
}