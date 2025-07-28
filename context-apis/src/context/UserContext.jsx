
import { children, createContext,useContext,useState } from "react";
export const UserContext= createContext();

export const UserProvider=({children})=>{
    const [user,setUser]=useState({
        name:"Rahul",
        email:"dfdfsd@gmail.com",
        age: 20,
        gender:"male"
    })
    return(
        <UserContext.Provider value = {{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser =()=> useContext(userContext);

export default UserProvider;