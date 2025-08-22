import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products1 from './components/Products1'
import Products from './components/product'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/products1" element={<Products1 />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    </BrowserRouter>

   </>
  )
}

export default App
