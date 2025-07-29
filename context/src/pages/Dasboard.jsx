
import React from 'react'
import { useUser } from '../constext/UserContext/UserProvider';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () =>{
    const {user} = useUser();
    const navigate = useNavigate();
    
    const handlePostClick = ()=>{
      navigate(`secure/Post`)
    }

  return (
    <div>
        <Link  to="/">Home</Link>
        <h1>Dasboard</h1>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <button  onClick={handlePostClick} >Get Post</button>
    </div>
    
  )
}

export default Dashboard