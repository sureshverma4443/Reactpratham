import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input value:', inputRef.current.value);
  };

  return (
    <>
      <div>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={inputRef} placeholder="Enter your name" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UncontrolledForm;

