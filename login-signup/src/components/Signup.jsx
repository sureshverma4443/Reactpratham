

import React, { useState } from 'react'
const INITIAL_FORM_DATA = {
   fname:"",
    lname:"",
    email:"",
    gender:"",
    age:"",
    role:"",
    password:"",
    confirmpassword:"",
    interests:[]

  }

const  Signup = () =>{
  const [form,setForm]=useState(INITIAL_FORM_DATA)
                                                                         
  const handleChange= (e)=>{
  const {name,value,type,checked}=e.target;
  setForm((preForm)=>({
    ...preForm,
    [name]:value
  }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Submitted form data",form);
    
  }
  return (
    <>
    <form onSubmit={handleSubmit} >
    <div>
      <label>first Name</label>
      <input type='text' name='fname' value={form.fname} onChange={handleChange} />
      <br></br>
      <label>last Name</label>
      <input type='text' name='lname' value={form.lname} onChange={handleChange} />
    </div>
     <div>
      <label>Email</label>
      <input type='email' name='email'value={form.email} onChange={handleChange} />
     
    </div>
     <div>
      <label>Gender</label>
      <select value={form.gender} name='gender'onChange={handleChange} >
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
     
    </div>
    <div>
      <label>Age</label>
      <input type='number' name='age' value={form.age} onChange={handleChange} />
     
    </div>
    <div>
      <label>Role:</label>
      <label>Admin <input type='radio' name='role' value={admin} onChange={handleChange}></input></label> 
      <label>Manager <input type='radio' name='role' value={manager} onChange={handleChange}></input></label> 
      <label>Viewer <input type='radio' name='role' value={viewer} onChange={handleChange}></input></label> 
      
      

    </div>
     <div>
      <label>Password</label>
      <input type='password' name='password'value={form.password} onChange={handleChange} /><br></br>
      <label>Confirm Password</label>
      <input type='text' name='password' value={form.confirmpassword} onChange={handleChange} />``
    </div>
    <div>
      <label>Interest:</label>
      <label>Music<input type='checkbox' name='interests' value='music'onChange={handleChange}></input></label>
      <label>Gym<input type='checkbox' name='interests' value='gym'onChange={handleChange}></input></label>
      <label>Read<input type='checkbox' name='interests' value='read'onChange={handleChange}></input></label>
    </div>
    <button type='submit'>Signup</button>
    </form>
  </>
  )
}


export default Signup