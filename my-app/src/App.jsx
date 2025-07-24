import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import User from './pages/user'
import Contact from './pages/contact'
import { useState } from 'react'


function App() {
const [count,setCount]=useState(0)


  return (
    <>

    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}> 
      Counter
      </button>
    </div>
  
      
    






    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/user/:id" element={<User/>} />

    </Routes>


    </BrowserRouter>
    </>
    
  )
}

export default App
