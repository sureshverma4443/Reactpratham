

 import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dasboard'
import Home from '../pages/Home'
import Post from '../pages/Post'
import Protected from './Protected'
 
 const AppRoutes=()=>{
   return (
     <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/secure' element={<Protected/>}>
         <Route path='dashboard' element={<Dashboard/>}></Route>
        <Route path='posts' element={<Post/>}></Route>
    </Route>

    
    
  </Routes>
  </BrowserRouter>

     </>
   )
 }
 
 export default AppRoutes
 