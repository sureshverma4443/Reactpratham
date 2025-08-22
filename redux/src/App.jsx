import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { decrement, increment } from './redux/actions/countAction'
import { useDispatch, useSelector } from 'react-redux'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'

function App() {
  const count = useSelector (state => state.count);
  const dispatch= useDispatch()
 

  return (
    <>
    {/* <h1>Redux (Without Toolkit)</h1>
    <h2>Counter:{count}</h2>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button> */}


    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/dasboard' element={<Dashboard/>}></Route>
    </Routes>

   
      
    </>
  )
}

export default App
