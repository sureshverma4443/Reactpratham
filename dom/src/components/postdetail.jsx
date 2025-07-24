


import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'

function Postdetails() {
   const {postid} = useParams();
   const [searchParams] =  useSearchParams([])
   const postId =searchParams.get("poId")

   const [postdetail, setPostdetail] = useState()

   const fetchpostdetails = async ()=>{

    try{
        const response = await fetch (`https://jsonplaceholder.typicode.com/users/${postid}`)
        const parseData = await response.json()
        console.log(parseData);
        console.log(parseData);
        console.log(parseData);
        
        setPostdetail(parseData)

        
    }catch(error){
        console.log(error);
        

    }

   }

   useEffect (()=>{
    if(postid){

        fetchpostdetails()
    }
   },[postid])

   console.log("check",postdetail)

  return (
    <div>
        <h1>post of Id {postid}</h1>
        {postId && <h2>post id searchParams: {postId}</h2>}
      {postdetail ? (
        <div>
          <h2>{postdetail.name}</h2>
          <p>Email: {postdetail.email}</p>
          <p>Username: {postdetail.username}</p>
          <p>Phone: {postdetail.phone}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  )
}

export default Postdetails
