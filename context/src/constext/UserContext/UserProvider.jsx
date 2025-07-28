
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


export const UseContext = createContext();

const UserProvider = ({children})=>{
    const [user,setUser] = useState({
        name:"",
        email:""
    });
    console.log("user from context",user);
    return(
        <UseContext.Provider value={{user,setUser}}>
            {children}
        </UseContext.Provider>
    )
}

export default UserProvider;

export const useUser = ()=>useContext(UseContext)