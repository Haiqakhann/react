import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
        <h1>useEffect Cleanup</h1>
        Time: {time}s
    </div>
  )
    
};

export default Timer;