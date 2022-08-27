import './App.css';
import React from 'react'
import { Home } from './Pages/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Blog } from './Pages/Blog/Blog';
import { Login } from './Pages/Signup/Login';
import { Signin } from './Pages/Signup/Signin';
import { AddBlog } from './Components/AddBlog/AddBlog';

const App = () => {
  return (
    <div className='App'>
      <Router basename='/Blog-App'>
        <div className='container'>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/Blog/:id' element={<Blog />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signin' element={<Signin />} />
            <Route path='/AddBlog' element={<AddBlog />} />

          </Routes>
        </div>

      </Router>
    </div>
  )
}

export default App