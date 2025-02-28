import React, { useEffect, useState } from 'react'

const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval); // avoid memory leak
  }, []);


  return (
    <h3 className="date-time">{dateTime}</h3>
  )
}

export default TodoDate