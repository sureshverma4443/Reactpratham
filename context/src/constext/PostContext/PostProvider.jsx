import { createContext, useState } from "react";



export const PostContext = createContext();

const PostProvider = ({children})=>{
    const [post,setPost] = useState({})
    
}