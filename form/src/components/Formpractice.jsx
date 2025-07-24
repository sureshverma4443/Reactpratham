import React, { useState } from 'react';

const Formpractice = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    password: ''
  });

  const [carddata,setCarddata]=useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setCarddata([...carddata, form]);
   
  };

  return (
    <div>
      <h1>Detail Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
          />

          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <label>Age</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <ul>
        {carddata.map((e)=>{
            return(
            <h>{e.email}</h>
            )
        })

        }
          

      </ul>
    </div>
  );
};

export default Formpractice;
