import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);

    return () => clearTimeout(timer);
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);

      return () => clearInterval(interval);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
