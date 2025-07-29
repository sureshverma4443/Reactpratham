import React, { useContext } from 'react'
import { createContext, useEffect, useState } from "react";


export const UseContext = createContext();


 const UserlistProvider=({children})=> {
  const [userlist ,setUserlist]= useState(()=>{
    const saveUserlist = localStorage.getItem("UserlistData");
    return saveUserlist?JSON.parse(saveUserlist):{fname:"",lname:"",email:""}
  })

  useEffect (()=>{
    if (userlist?.fname?.length)localStorage.setItem("UserlistData",JSON.stringify(userlist))
  })

  console.log("userlist form context",userlist)
  return (
   <UseContext.Provider value={{userlist,setUserlist}}>
    {children}
   </UseContext.Provider>)
}

export default UserlistProvider;

export const useUserlist = ()=>useContext(UseContext)