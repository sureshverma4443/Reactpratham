

import React, { useState } from 'react'
import ChildA from './components/PropDrilling/ChildA'
import ChildB from './components/PropDrilling/ChildB'
import DynamicSelect from './components/Dynamic/DynamicSelect'


const Home = () =>{
  const[user,setUser]=useState({name:"",
     gender:"",
     hobby:""})
  // const [formData,setFormData]=useState({
  //   name:"",
  //   gender:"",
  //   hobby:""
  // })
  // console.log("formData", formData);
  console.log(user?.ChildAname);
  
  
  return (
    <div>
        <ChildA headding={"this is my prop from HOme"} userProps={user}/>
        <ChildB userDetails={user} setUserDetails={setUser} username={user.name}/>
    </div>
    // <form onSubmit={handleFormSubmit}>
    //   <input/>
    //   <input type='radio'/>
    //   <DynamicSelect setHobby={(updatedHobby)=>setFormData({
    //     ...formData,
    //     hobby:updatedHobby
    //   })}/>
    // </form>
  )
}

export default Home