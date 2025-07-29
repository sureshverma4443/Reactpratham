import { createContext, useContext, useState } from "react";



export const PostContext = createContext();

const PostProvider = ({children})=>{
    const [posts,setPosts] = useState([])
    console.log("posts",posts)
    return(
        <PostContext.Provider value={{posts,setPosts}}>
            {children}
        </PostContext.Provider>
    )
    
    
}
export default PostProvider;
export const usePosts = ()=>useContext