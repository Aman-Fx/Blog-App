import './App.css';
import React from 'react'
import { Home } from './Pages/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Blog } from './Pages/Blog/Blog';
import { AddBlog } from './Components/AddBlog/AddBlog';
import { AdminLog } from './Pages/Admin/AdminLog';
import { AdminPannel } from './Pages/Admin/AdminPannel';

const App = () => {
  return (
    <div className='App'>
      <Router basename='/Blog-App'>
        <div className='container'>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/Blog/:id' element={<Blog />} />
            <Route path='/AddBlog' element={<AddBlog />} />
            <Route path='/admin' element={<AdminLog />} />
            <Route path='/AdminPannel' element={<AdminPannel />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}
export default App;