import React from "react";


import useWordGame from "./hooks/useWordGame"


function App() {

  const {
    textBoxRef,
    handelChange,
    text,
    isTimeRunning,
    time,
    startClock,
    wordCount,
} = useWordGame(5)

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea ref={textBoxRef} onChange={handelChange} value={text} disabled={!isTimeRunning} />
      <h4>Time remaining: {time}</h4>
      <button onClick={startClock} disabled={isTimeRunning}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
