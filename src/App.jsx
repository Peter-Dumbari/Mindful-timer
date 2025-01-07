import { Route, Routes } from "react-router";
import "./App.css";
import Timer from "./components/Timer";
import Home from "./Pages/Home";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="await">
      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/timer"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3.5 }}>
              <Timer />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
