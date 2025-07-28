
import React from 'react'
import { useUser } from '../constext/UserContext/UserProvider';
import { Link } from 'react-router-dom';

const Dashboard = () =>{
    const {user} = useUser();

  return (
    <div>
        <Link  to="/">Home</Link>
        <h1>Dasboard</h1>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
    </div>
    
  )
}

export default Dashboard