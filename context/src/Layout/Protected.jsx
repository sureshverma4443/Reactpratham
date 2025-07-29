

import React from 'react'
import { useUser } from '../constext/UserContext/UserProvider'
import { Navigate, Outlet } from 'react-router-dom';

const Protected =() =>{
    const {user} = useUser();
  return (
    <div>
        <div>
            {user?.name?.length? <Outlet/>:<Navigate to = "/" replace/>}
        </div>
      
    </div>
  )
}

export default Protected
