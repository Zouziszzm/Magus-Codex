import { useState, useEffect } from "react";

const Time = ({ className }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const options = {
        timeZone: userTimeZone,
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      };

      const timeString = new Date().toLocaleTimeString("en-US", options);
      setCurrentTime(timeString);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <p className={className}>{currentTime}</p>
    </>
  );
};

export default Time;
