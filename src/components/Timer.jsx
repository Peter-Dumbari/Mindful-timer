import React from "react";

const Timer = () => {
  const [time, setTime] = React.useState(0);
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

  const formatTIme = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold mb-4">Mindful Timer</h1>
      <p className="text-6xl mb-6">{formatTIme(time)}</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>

      <button
        className="bg-gray-500 text-white px-4 py-2 rounded"
        onClick={() => {
          setIsRunning(false);
          setTime(25 * 60);
        }}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
