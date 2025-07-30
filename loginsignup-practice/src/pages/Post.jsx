
import React from 'react'
import { useNavigate } from 'react-router-dom'

const  Post = () => {
    const navigate = useNavigate()

    const handlechange = ()=>{
        navigate("/createpost")
    }
  return (
    <>
    <h1>Post</h1>
    <button onClick={handlechange}> Create Post</button>
    </>
  )
}

export default Post