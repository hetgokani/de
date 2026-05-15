import React, { useState } from "react"; // Added useState import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // Add this import for exit animations
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BoardPage from "./pages/BoardPage";
import OurMissionPage from "./pages/OurMissionPage";
import OurVisionPage from "./pages/OurVisionPage";
import Loader from "./components/Loader"; // Adjust this path for where you saved Loader.jsx
import "./App.css";

const App = () => {
  // 1. STATE TO TRACK LOADING
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {/* 2. ADD AnimatePresence MODE="WAIT" */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          // 3. RENDER LOADER WHILE LOADING
          <Loader key="loader" setLoading={setIsLoading} />
        ) : (
          // 4. RENDER MAIN CONTENT AFTER LOADING IS FINISHED
          // Key is crucial for AnimatePresence to work!
          <div
            key="main-app"
            style={{
              minHeight: "calc(100vh - 100px)",
              background: "#f8f9fa",
              // THE FIXES FROM PREVIOUS INTERACTION (Retained):
              width:
                "100%" /* Forces the wrapper to stay inside the browser window */,
              maxWidth: "100%" /* Prevents it from ever stretching past 100% */,
              overflowX:
                "hidden" /* ONLY hides the horizontal scroll, keeps vertical working perfectly */,
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/boardofdirectors" element={<BoardPage />} />
              <Route path="/our-mission" element={<OurMissionPage />} />
              <Route path="/our-vision" element={<OurVisionPage />} />
            </Routes>
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;
