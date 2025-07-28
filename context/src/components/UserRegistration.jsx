import { useState } from 'react'
import { useUser } from '../constext/UserContext/UserProvider';
import { useNavigate } from 'react-router-dom';


const INITIAL_FORM_VALUE ={
    name:"",
    email:""
};


const  UserRegistration=() =>{
  const {setUser} = useUser();
  const navigate = useNavigate();

  const [formData,setFormData]= useState(INITIAL_FORM_VALUE);

  const handleChange =(e)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    setUser({...formData})
    setFormData(INITIAL_FORM_VALUE);
    navigate("/dashboard")
  }
   return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange}/>
      </div>
       <div>
        <label>Email</label>
        <input type='text' name='email' value={formData.email} onChange={handleChange}/>
      </div>
      <button type='submit'>submit</button>

    </form>
  )
}

export default UserRegistration;
