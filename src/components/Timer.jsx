import React from "react";

const Timer = () => {
  const [Time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);

  React.useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
  }, [isRunning]);

  const formatTIme = () => {};
  return <div>Timer</div>;
};

export default Timer;
