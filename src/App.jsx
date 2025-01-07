import { Route, Routes } from "react-router";
import "./App.css";
import Timer from "./components/Timer";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  );
}

export default App;
