import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '', })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (formData.username==="admin" && formData.password==="admin"){
        const user = {
            name :formData.username,
            email:"admin@gmail.com"
        };
        dispatch(loginUser(user))

        navigate('./dasboard')
    }else{
        console.log("Invalid User");
        
    }


  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
