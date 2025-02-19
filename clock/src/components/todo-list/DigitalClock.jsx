import React, { useState, useEffect } from "react";
import "./DigitalClock"; // Import CSS for styling

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [is24HourFormat, setIs24HourFormat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleTimeFormat = () => {
    setIs24HourFormat(!is24HourFormat);
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = "";

    if (!is24HourFormat) {
      ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
    }

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
  };

  return (
    <div className={`clock-container ${isDarkMode ? "dark" : "light"}`}>
      <div className="clock">
        <h1>{formatTime(time)}</h1>
        <p>{time.toDateString()}</p>
      </div>
      <div className="controls">
        <button onClick={toggleTheme}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
        <button onClick={toggleTimeFormat}>{is24HourFormat ? "12-Hour Format" : "24-Hour Format"}</button>
      </div>
    </div>
  );
};

export default DigitalClock;
