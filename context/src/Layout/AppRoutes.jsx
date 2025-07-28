

 import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dasboard'
import Home from '../pages/Home'
import Post from '../pages/Post'
 
 const AppRoutes=()=>{
   return (
     <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/post' element={<Post/>}></Route>
    
  </Routes>
  </BrowserRouter>

     </>
   )
 }
 
 export default AppRoutes
 