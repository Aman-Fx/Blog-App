import './App.css';
import React from 'react'
import { Home } from './Pages/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Blog } from './Pages/Blog/Blog';

const App = () => {
  return (
    <div className='App'>
      <Router basename='/Blog-App' >
        <div className='container'>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/Blog/:id' element={<Blog />} />
          </Routes>
        </div>
      </Router>

    </div>
  )
}

export default App