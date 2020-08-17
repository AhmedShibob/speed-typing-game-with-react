import { useState, useEffect, useRef } from "react";

function useWordGame(startingTime = 10) {

  const [text, setText] = useState("");
  const [time, setTime] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handelChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWords(text) {
    const wordArr = text.trim().split(" ");
    const filterWords = wordArr.filter((word) => word !== "");
    return filterWords.length;
  }

  function startClock() {
    setIsTimeRunning(true);
    setTime(startingTime);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWords(text));
  }

  useEffect(() => {
    if (isTimeRunning && time > 0) {
      setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      endGame();
    }
  }, [time, isTimeRunning]);

  return {
    textBoxRef,
    handelChange,
    text,
    isTimeRunning,
    time,
    startClock,
    wordCount,
  };
}


export default useWordGame