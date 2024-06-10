import React, { useEffect, useState } from "react";


function RepeatMessage({ message }) {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [message]);

  return <div className="message">I'm logging to console "{message}"</div>;
}

export default function App() {
  const [message, setMessage] = useState("Hello, World!");

  return (
    <div className="App">
      <h3>Type the message to log to console</h3>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <RepeatMessage message={message} />
    </div>
  );
}
