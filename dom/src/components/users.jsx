import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Users(){
    const [users,setUsers]=useState([])

    const navigate = useNavigate();

const fetchUsers = async ()=>{
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
    fetchUsers()
},[])

{/* <ul>
            {users.map((user)=>{
                return(
                    <li>{user.username}</li>
                )
            })}
        </ul> */}




return(
     <div style={{ margin: "30px" }}>
      <h2>All Users</h2>
      {users.length ? (
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => navigate(`/users/${user.id}?userId=${user.id}`)} 
              style={{ cursor: "pointer", marginBottom: "10px", color: "blue" }}
            >
              {user.username}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>)



}

export default Users;