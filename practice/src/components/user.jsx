import { useEffect, useState } from "react";


function User(){
    const [users,setUsers]=useState([])

const fetctUser= async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log("response",response);
        const parseData =await response.json()
        console.log("parseData",parseData);
        setUsers(parseData)
        
        
    }catch(error){
        console.log("error",error);
        
    }
}




useEffect(()=>{
    fetctUser()
},[])
return(
    <div>
        <ul>
            {users.map((user)=>{
                return(
                    <li>{user.username}</li>
                )
            })}
        </ul>
    </div>
)


}

export default User;