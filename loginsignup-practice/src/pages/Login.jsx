import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { useUser } from '../constext/UserProvider';

const Login = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allusers = JSON.parse(localStorage.getItem("UserData")) || [];
    console.log(allusers.email);
    
    console.log("allusers",allusers)
    
    const matchedUser = allusers.find(user =>
    user.email === loginData.email && user.password === loginData.password
  )
  
 
  
    if (matchedUser) {
      alert('Login successful');
      setUser(matchedUser); // Set user in context
      navigate('/post');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type='email' name='email' onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
