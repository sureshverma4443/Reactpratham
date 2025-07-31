
import React, { createContext, useContext, useEffect, useState } from 'react'


export const PostContext=createContext();

const PostProvider = ({children})=> {
  const [post,setPost] = useState(()=>{
   const savePost = localStorage.getItem("PostData");

   return savePost?JSON.parse(savePost):[] })

    useEffect (()=>{
     localStorage.setItem("PostData",JSON.stringify(post))
    },[post])
 
  return (
    <PostContext.Provider value={{post,setPost}}>
      {children}
    </PostContext.Provider>
  )
}

export default PostProvider;

export const usePost = ()=> useContext(PostContext)