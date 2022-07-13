import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  //state hook
  const [time, setTime] = useState(now);

  function updateTime() {
    const time2 = new Date().toLocaleTimeString();
    setTime(time2);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
