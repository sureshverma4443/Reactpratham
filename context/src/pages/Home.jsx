import React from 'react'
import UserRegistration from '../components/UserRegistration'
import { useNavigate } from 'react-router-dom';


const  Home =() => {


     const fetchPost= async ()=>{
      const {setPosts} = usePosts();
      const navigate = useNavigate();
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log("response",response?.data);
       
       
        setPosts(response?.data)
        
        
    }catch(error){
        console.log("error",error);
        
    }
}
  return (
    <>
    <div>
        <h1>Home</h1>
        <UserRegistration/>
        <button onClick={()=>fetchPost()}>Get Post</button>
        <button onClick={()=>navigate("/secure/posts")}>Go to Posts</button>
    </div>
    </>
  )
}

export default Home