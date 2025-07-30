import React, { useContext } from 'react'
import { createContext, useEffect, useState } from "react";


export const UseContext = createContext();


 const UserProvider=({children})=> {
  const [user ,setUser]= useState(()=>{
    const saveUser = localStorage.getItem("UserData");
    return saveUser?JSON.parse(saveUser):[]})

useEffect(() => {
  if (user?.length) {
    localStorage.setItem("UserData", JSON.stringify(user));
  }
}, [user]);


  console.log("user form context",user)
  return (
   <UseContext.Provider value={{user,setUser}}>
    {children}
   </UseContext.Provider>)
}

export default UserProvider;

export const useUser = ()=>useContext(UseContext)