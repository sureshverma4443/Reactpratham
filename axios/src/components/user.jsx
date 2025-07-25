import { useEffect, useState } from "react";


function User(){
    const [users,setUsers]=useState([])

const fetctUser= async ()=>{
    try{
       
        // const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        // console.log("response",response);
        // if(response.status === 200)
        // setUsers(response?.data)

        const postResponse = await axios.post("https://jsonplaceholder.typicode.com/posts",{
            title:"my Summer vaction",
            body:"This is just for learning axios with post method"
        });
        console.log("postResponse",postResponse);
        setUsers
        
        
        
        
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