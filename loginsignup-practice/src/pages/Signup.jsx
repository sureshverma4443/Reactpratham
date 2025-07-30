
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useUser } from '../constext/UserProvider';

 const INITIAL_VALUE = {
    fname: "",
    lname: "",
    email: "",
    password: ""
  }

const Signup = () => {
  const { setUser } = useUser(); 
  const [formData, setFormData] = useState(INITIAL_VALUE);
 const navigate = useNavigate()

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    //  setFormData({
    //   ...formData,
    //   [name]:value,
    // })
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser((prev)=>[...prev, formData]);
    
    setFormData(INITIAL_VALUE)
    navigate('/login')
  };

  return (
    <>
    <h1>signup form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type='text'
            name='fname'
            value={formData.fname}
            onChange={handleChange}
           
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type='text'
            name='lname'
            value={formData.lname}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label>Password</label>
          <input required
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
           
          />
        </div>
        <button type='submit'>Signup</button>
      </form>
    </>
  );
};

export default Signup;
