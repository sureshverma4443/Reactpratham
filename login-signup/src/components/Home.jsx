import React from "react";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // <-- Correct hook for navigation

  return (
    <div>
      <button >Login</button>   
      <button onClick={() => navigate("/signup")}>Signup</button>
    </div>
  );
};

export default Home;
