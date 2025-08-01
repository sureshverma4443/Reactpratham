import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Complexform from './Reducer'
import FocusInput from './refExample1'
import Timer from './refExample2'
import SmartForm from './combineExaple'
import CustomHook from './CustomHooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Complexform/>
      <FocusInput/>
      <Timer/>
      <SmartForm/>
      <CustomHook />
    </>
  )
}

export default App
