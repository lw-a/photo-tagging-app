import { useState, useEffect } from "react";

function Timer(props) {

  useEffect(() => {
    let interval;
    if (props.running) {
      interval = setInterval(() => {
        props.setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!props.running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [props]);

  return (
    <div className="text-light lead" style={{minWidth: "60px", textAlign: "right"}}>
      <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}</span>
    </div>
  );
}

export default Timer;
