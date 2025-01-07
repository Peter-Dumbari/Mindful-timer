import React from "react";

const Timer = () => {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const [moods, setMoods] = React.useState([]);
  const [message, setMessage] = React.useState("");

  const prompts = [
    "Take 5 deep breaths.",
    "Write down 3 things you're grateful for.",
    "Stretch your arms and back.",
    "Drink a glass of water mindfully.",
  ];

  const handleMoodChange = (mood) => {
    setMoods([...moods, { mood, date: new Date().toLocaleDateString() }]);
    setMessage("Mood logged! Thank you for sharing.");
  };

  const getRandomPrompt = () => {
    return prompts[Math.floor(Math.random() * prompts.length)];
  };

  React.useEffect(() => {
    const messageTimeout = setTimeout(() => {
      setMessage("");
    }, 10000);
    return () => clearTimeout(messageTimeout);
  }, [message]);

  React.useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(moods));
  }, [moods]);

  React.useEffect(() => {
    if (time === 0 && isRunning) {
      setMessage(getRandomPrompt());
    }
  }, [time, isRunning]);

  React.useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTIme = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center ">
      <div className="text-center p-4">
        {message && (
          <div
            className="absolute  top-10 left-10 right-10  p-4 mb-4 text-sm text-white-500 rounded-lg bg-green-50 dark:bg-yellow-500 dark:text-white"
            role="alert">
            <span className="font-medium">{message}</span>
          </div>
        )}
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
            setTime(0);
          }}>
          Reset
        </button>
        <div className="mt-6">
          <p className="text-xl">How did you feel?</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded text-3xl"
              onClick={() => handleMoodChange("😊")}>
              😊
            </button>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded text-3xl"
              onClick={() => handleMoodChange("😐")}>
              😐
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded text-3xl"
              onClick={() => handleMoodChange("😞")}>
              😞
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
