
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'

const  UserDetails = () => {

    const {id}=useParams();

    const [searchParams]= useSearchParams();
   
    const userId = searchParams.get("userId")


    const [userDetails,setUserDetails]=useState()

    const fetchUserDetails = async ()=>{
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const parseResponse = await response.json();
            console.log(parseResponse);
            
            setUserDetails(parseResponse)
        }catch{
            console.log("error");
            
        }
    }

    useEffect(()=>{
        if(id){
            fetchUserDetails();

        }
    },[id])
    

  return (
    <div>
            <h1>User of ID {id}</h1>
            {userId && <h2>User ID from search params: {userId}</h2>}
            {userDetails ? (
                <>
                    <div>Username: {userDetails?.username}</div>
                    <div>Email: {userDetails?.email}</div>
                </>
            ) : (
                <>Loading...</>
            )}
        </div>
  )
}

export default UserDetails
