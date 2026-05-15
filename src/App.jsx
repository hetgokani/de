import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BoardPage from "./pages/BoardPage";
import OurMissionPage from "./pages/OurMissionPage";
import OurVisionPage from "./pages/OurVisionPage";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div
        style={{
          minHeight: "calc(100vh - 100px)",
          background: "#f8f9fa",
          // THE FIXES:
          width:
            "100%" /* Forces the wrapper to stay inside the browser window */,
          maxWidth: "100%" /* Prevents it from ever stretching past 100% */,
          overflowX:
            "hidden" /* ONLY hides the horizontal scroll, keeps vertical working perfectly */,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes here */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/boardofdirectors" element={<BoardPage />} />
          <Route path="/our-mission" element={<OurMissionPage />} />
          <Route path="/our-vision" element={<OurVisionPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
