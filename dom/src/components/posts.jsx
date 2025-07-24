import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Posts() {
  const [posts, setPosts]= useState([])

  const  navigate = useNavigate()


    const fetchposts  = async ()=>{
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            console.log("response",response);
           const parseData = await response.json();

           console.log(parseData);
           setPosts(parseData)
           



        }catch {
            console.log("error");
            
        }
    }
    useEffect(()=>{
    fetchposts()
},[])
  return (
    <>
    <h1>List of posts{}</h1>
    <ul>
     {posts.map((post)=>
        
       (
        <div key={post.id} > <li onClick={() => navigate(`/posts/${post.id}?poId=${post.id}`)} 
             style={{ cursor: "pointer", marginBottom: "10px", color: "blue" }}>{post.title}</li></div>
        
      )  
    )}
    </ul>
   

    </>
    
  )
}

export default Posts
