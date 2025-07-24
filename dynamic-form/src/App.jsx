import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Select from './components/Select'
import Radio from './components/Radio'
import Wrapper from './components/ChildrenProp'

const INITIAL_SUBJECT_LIST=["MATHS","HINDI","ENGLISH","SOCIAL"]
const INITIAL_HOBBIES_LIST=["GYM","FOOT","ENGLISH","SOCIAL"]
const INITIAL_RADIO_LIST=["ADMIN","MANAGER","VIEWER","SUPERWIZER"]

function App() {
  const[subject,setSubject]=useState(INITIAL_SUBJECT_LIST);
  const[hobbies,setHobbies]=useState(INITIAL_HOBBIES_LIST);
  const[radio,setradio]=useState(INITIAL_RADIO_LIST);

  const [formData,setFormData]=useState({
    subject:"",
    hobby:"",
    roll:""
  })
  
  
console.log("formData",formData);

  return (
    <>
    <Select currentValue={formData.subject} optionsList={subject} selectLable={"Subject"} setData={(updatedSubject=>setFormData({...formData,subject:updatedSubject}))} />
    <Select currentValue={formData.subject} optionsList={hobbies} selectLable={"hobbies"} setData={(updatedHobbies=>setFormData({...formData,hobby:updatedHobbies}))} />
    <Radio currentValue={formData.subject} optionsList={radio} name={"Roll"} lableText={"Roll"}  setData ={(updatedRoll)=>setFormData({...formData,roll:updatedRoll})}/>
   </>
  )
}

export default App
