
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const UseContext = createContext();

const UserProvider = ({children})=>{
    // const [user,setUser] = useState({
    //     name:"",
    //     email:""
    // });

    const [user,setUser] = useState(()=>{
        const saveUser = localStorage.getItem("UserData");
        return saveUser?JSON.parse(saveUser):{name:"",email:""}
    })
    
    useEffect (()=>{
        if(user?.name?.length)localStorage.setItem("UserData",JSON.stringify(user))
    },[user])

    
    console.log("user from context",user);
    return(
        <UseContext.Provider value={{user,setUser}}>
            {children}
        </UseContext.Provider>
    )
}

export default UserProvider;

export const useUser = ()=>useContext(UseContext)