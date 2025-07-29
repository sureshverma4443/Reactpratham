
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'


 
  const AppRoutes = () => {
   return (
     <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>}></Route>

     </Routes>
     </BrowserRouter>
     </>
   )
 }
 

 export default AppRoutes