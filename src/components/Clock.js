import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState();

  function formatTime(val) {
    if (val < 10) {
      return "0";
    } else {
      return "";
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    setTime(
      formatTime(h) + h + ":" + formatTime(m) + m + ":" + formatTime(s) + s
    );
  }
  return (
    <div className="clock">
      <div className="screen">
        <h3 className="time">{time}</h3>
      </div>
    </div>
  );
}

export default Clock;
