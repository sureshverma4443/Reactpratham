import React from 'react';
import { useNavigate } from 'react-router-dom';  

const Home = () => {
  const navigate = useNavigate();  

  const handleChangelogin = () => {
    navigate('/login');  
  };
  const handleChangesignup = () => {
    navigate('/signup');  
  };

  return (
    <>
      <div>Home</div>
      <button onClick={handleChangelogin}>Login</button>
      <button onClick={handleChangesignup}>Signup</button>
    </>
  );
};

export default Home;
