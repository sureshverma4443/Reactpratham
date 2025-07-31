
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { usePost } from '../constext/PostProvider'

const  Post = () => {
    const navigate = useNavigate()
    const {post}= usePost()

    const handlechange = ()=>{
        navigate("/createpost")
    }
  return (
    <>
    <h1  >Post</h1>
    {post.map((e)=>{
     return (
      <div key={post}>
       <h3>{e.tittle}</h3> 
       <h3>{e.body}</h3> 
      </div>
     )
    })}
    <button onClick={handlechange} disabled={post.length > 0}> Create Post</button>
    </>
  )
}

export default Post