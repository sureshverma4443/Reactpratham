import { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus(); // Auto-focus on mount
  }, []);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Example 1: Access DOM Node</h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}


export default FocusInput