import React, { useState } from 'react';

const ControlledForm = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("value:", name);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Controlled Component</h1>
          <input
            type='text'
            name='user'
            value={name}
            onChange={handleChange}
          />
          <div></div>
          <button type='submit'>Save</button>
        </form>
      </div>
    </>
  );
};

export default ControlledForm;
