
import React from 'react'

const ChildB  = ({ setUserDetails, userDetails })=> {
  
  return (
    <div>
      <h1>this is child B</h1>
      <h6>{userDetails.age}</h6>
      <button onClick={()=>setUserDetails({name:"suresh",age:25})}>Click</button>
    </div>
  )
}

export default ChildB