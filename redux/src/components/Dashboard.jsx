

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/actions/authAction';

const  Dashboard =()=> {
  const user = useSelector((state)=>state.auth.user)
  console.log("user",user);
   const navigate = useNavigate();
   const dispatch = useDispatch ();

   const handleLogout = ()=>{
    dispatch(logoutUser());
    navigate("/");
   }
  
  return (
    <div>
      <h1>Welcome,{user?.name || "Guest"}</h1>
     <button onClick={handleLogout}>Logout</button>
      <h1>this is dashboard page</h1>
    </div>
  )
}

export default Dashboard
