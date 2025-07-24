import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Userdetail = () =>{
const {id} = useParams();
const [userdetails,setUserDetails]=useState();


const fetchUserDetails = async()=>{
    try{ const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const parseResponse = await response.json();
    setUserDetails(parseResponse)   

    }catch(error){
        console.log("error",error);
        
    }
}
useEffect(()=>{
  if(id)
  {fetchUserDetails();}
},[id])
    
console.log("userDetails",userdetails);

  return (
    <div className='App' style={{margin:"40px 40px"}}>
      <h1>User of Id :{id}</h1>
      {userdetails?(<><div>{userdetails?.username}</div>
      <div>{userdetails?.email}</div></>):(<>Loding...</>)
      
    }

      
    </div>
  )
}

export default Userdetail;
