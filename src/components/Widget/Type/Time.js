import React, { useEffect, useState } from "react";

function getTime() {
  let date = new Date();
  return [
    date.getHours().toString(),
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
    date,
  ];
}

function Time() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="widget timeWidget">
      <span id="date">
        {time[2].toLocaleDateString("en-EN", { weekday: "short" }) +
          " " +
          time[2].toLocaleString("en-EN", { month: "long" }) +
          " " +
          time[2].getFullYear()}
      </span>
      <div className="time">
        <span id="hours">{time[0] ? time[0] : "00"}</span>
        <span id="colon">:</span>
        <span id="minutes">{time[1] ? time[1] : "00"}</span>
      </div>
    </div>
  );
}

export default Time;
