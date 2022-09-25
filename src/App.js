import './App.css';
import React from 'react'
import { Home } from './Pages/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Blog } from './Pages/Blog/Blog';
import { AddBlog } from './Components/AddBlog/AddBlog';
import { AdminLog } from './Pages/Admin/AdminLog';
// import { AdminPannel } from './Pages/Admin/Pannel/AdminPannel';
import { SideBar } from './Pages/Admin/SideBar/SideBar';
import { AllPost } from './Pages/Admin/Postes/AllPost';
import { AddPost } from './Pages/Admin/Postes/AddPost';
import { AllCate } from './Pages/Admin/Postes/Category/AllCate';
import { EmptyList } from './Components/Comman/EmptyList/EmptyList';
import { AddCate } from './Pages/Admin/Postes/Category/AddCate';

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
            {/* <Route path='/AdminPannel' element={<AdminPannel />} /> */}
            <Route path='/SideBar' element={<SideBar />} />
            <Route path='/AllPost' element={<AllPost />} />
            <Route path='/AddPost' element={<AddPost />} />
            <Route path='/AllCate' element={<AllCate />} />
            <Route path='*' element={<EmptyList />} />
            <Route path='/AddCate' element={<AddCate />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}
export default App;