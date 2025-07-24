import { Component, use, useEffect, useState } from 'react'
import './App.css'
import Colourchange from './components/colourchange'
import UserCard from './components/usercard'
import Mount from './components/mount'
import ComponentA from './components/componentA'
import ComponentB from './components/componentB'
import Promise from './components/user'
import Userdetail from './components/userdetail'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import User from './components/user'



  const User1 = {
    name: "rohon",
    age: "25",
    gender: "male"
  }


function App() {
  const [text, setText] = useState("lorem")
  const[user,setUser] = useState("")
  const[count,setCount] = useState(0)

  

 
  


  
  
  
  return (
    
    <div>
        {/* <Colourchange text={text} setText={setText}/>
        <UserCard user={user}  />
        <button onClick={()=>setUser(User1)}>User1</button>
        <button onClick={()=>setUser({name:"Suresh",age:65,gender:"male"})}>User2</button>
        <button onClick={()=>setUser({name:"Ramesh",age:34,gender:"male"})}>User3</button> */}
        {/* <Mount/> */}
        
{/*         
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase count</button>
        <button onClick={()=>setCount(count-1)}>Decrease count</button>

        {count>5?<ComponentA/>:<ComponentB/>}
        */}

        <BrowserRouter>
         
      <Routes>       
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<Userdetail />} />
      </Routes>
    </BrowserRouter>

   

       

       
      </div>
      
    
  )
}

export default App
