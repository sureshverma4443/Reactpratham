

import React, { useState } from 'react'
import { useUser } from '../constext/UserProvider'

const INITIAL_VALUE = {
    tittle:"",
    body:""

}

const PostCreate=()=> {
    const {setUser}=useUser()

    const [createpost,setCreatePost]= useState(INITIAL_VALUE)


    const handlechange = ()=>{

    }
    console.log(setUser)
  return (
    <>
    <h1>Create Post</h1>
    <form>
        <div>
           <label>Tittle</label>
             <input type='text' name='tittle'  onChange={handlechange}></input>
        </div>
        <div>
           <label>Body</label>
             <input type='text' name='body' onChange={handlechange} ></input>
        </div>
        <div>
           <label>author</label>
             <input type='text' name='auther' value={setUser.name} onChange={handlechange} ></input>
        </div>
        

    </form>
    </>
  )
}

export default PostCreate