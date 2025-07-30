
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Post from '../pages/Post'
import PostCreate from '../pages/PostCreate'


 
  const AppRoutes = () => {
   return (
     <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/post' element={<Post/>}></Route>
        <Route path='/createpost' element={<PostCreate/>}></Route>

     </Routes>
     </BrowserRouter>
     </>
   )
 }
 

 export default AppRoutes