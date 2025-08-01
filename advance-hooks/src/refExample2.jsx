import React, { useRef, useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null); // holds the interval ID

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current); // clean up on unmount
  }, []);

  return (
    <div>
      <h1>Example 2 : Persistent Timer (No Re-render)</h1>
      <h2>Timer: {seconds}s</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  );
};

export default Timer;
