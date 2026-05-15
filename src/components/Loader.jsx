import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  // 40% FASTER LOADING SPEEDS: Changed interval delay from 70ms down to 42ms
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          // Speed up the post-loading hold duration by 40% (1200ms -> 720ms)
          setTimeout(() => setLoading(false), 720);
          return 100;
        }
        const diff = Math.random() * 4 + 1;
        return Math.min(oldProgress + diff, 100);
      });
    }, 42); // 70ms * 0.6 = 42ms

    return () => clearInterval(timer);
  }, [setLoading]);

  // Framer Motion variants for the complex blueprint drawing (Accelerated by 40%)
  const drawSketch = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        // 3.5s -> 2.1s duration for blueprint drawing strings
        pathLength: { type: "tween", duration: 2.1, ease: "easeInOut" },
        opacity: { duration: 0.18 }, // 0.3s -> 0.18s
      },
    },
  };

  const drawGrid = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.3,
      transition: {
        pathLength: { type: "tween", duration: 1.2 }, // 2s -> 1.2s
        opacity: { duration: 0.6 }, // 1s -> 0.6s
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        style={styles.container}
        // Ultra-smooth zero-lag exit
        exit={{
          y: "-100vh",
          opacity: 0,
          transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
        }}
      >
        {/* Full-screen engineering grid */}
        <div style={styles.gridOverlay}></div>

        <div style={styles.contentWrapper}>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }} // 1.5s -> 0.9s
            style={styles.svgContainer}
          >
            {/* Highly detailed Industrial CAD Blueprint SVG */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 500 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Architectural Grid Lines */}
              <motion.path
                d="M50 0 V300 M100 0 V300 M150 0 V300 M200 0 V300 M250 0 V300 M300 0 V300 M350 0 V300 M400 0 V300 M450 0 V300"
                stroke="#6B46C1"
                strokeWidth="0.5"
                variants={drawGrid}
                initial="hidden"
                animate="visible"
              />
              <motion.path
                d="M0 50 H500 M0 100 H500 M0 150 H500 M0 200 H500 M0 250 H500"
                stroke="#6B46C1"
                strokeWidth="0.5"
                variants={drawGrid}
                initial="hidden"
                animate="visible"
              />

              {/* Main Structural Scaffolding */}
              <motion.path
                d="M120 220 L120 80 L280 80 L280 220 Z"
                stroke="#6B46C1"
                strokeWidth="1"
                strokeDasharray="4 4"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />
              <motion.path
                d="M120 80 L280 220 M120 220 L280 80"
                stroke="#6B46C1"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />

              {/* Massive Primary Water Tank */}
              <motion.ellipse
                cx="200"
                cy="90"
                rx="60"
                ry="15"
                stroke="#4C1D95"
                strokeWidth="2.5"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />
              <motion.path
                d="M140 90 V220 A60 15 0 0 0 260 220 V90"
                stroke="#4C1D95"
                strokeWidth="2.5"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />
              <motion.ellipse
                cx="200"
                cy="220"
                rx="60"
                ry="15"
                stroke="#4C1D95"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />

              {/* Tank Ladder/Details */}
              <motion.path
                d="M185 105 V220 M215 105 V220"
                stroke="#6B46C1"
                strokeWidth="1"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />
              <motion.path
                d="M185 120 H215 M185 140 H215 M185 160 H215 M185 180 H215 M185 200 H215"
                stroke="#6B46C1"
                strokeWidth="1"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />

              {/* Secondary Pressure Tank */}
              <motion.rect
                x="340"
                y="140"
                width="60"
                height="80"
                rx="5"
                stroke="#4C1D95"
                strokeWidth="2"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />
              <motion.path
                d="M340 160 H400 M340 200 H400"
                stroke="#6B46C1"
                strokeWidth="1"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />

              {/* Complex Pipeline Network */}
              {/* Bottom Main Pipeline */}
              <motion.path
                d="M50 250 L450 250"
                stroke="#4C1D95"
                strokeWidth="4"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />
              <motion.path
                d="M50 260 L450 260"
                stroke="#4C1D95"
                strokeWidth="4"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />

              {/* Pipeline Flanges / Joints */}
              <motion.line
                x1="100"
                y1="245"
                x2="100"
                y2="265"
                stroke="#4C1D95"
                strokeWidth="3"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />
              <motion.line
                x1="200"
                y1="245"
                x2="200"
                y2="265"
                stroke="#4C1D95"
                strokeWidth="3"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />
              <motion.line
                x1="300"
                y1="245"
                x2="300"
                y2="265"
                stroke="#4C1D95"
                strokeWidth="3"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />
              <motion.line
                x1="400"
                y1="245"
                x2="400"
                y2="265"
                stroke="#4C1D95"
                strokeWidth="3"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />

              {/* Connecting Pipes from Tanks to Main Line */}
              <motion.path
                d="M200 235 V250"
                stroke="#4C1D95"
                strokeWidth="6"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />
              <motion.path
                d="M370 220 V250"
                stroke="#4C1D95"
                strokeWidth="4"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />

              {/* High-level piping between tanks */}
              <motion.path
                d="M260 150 L340 150"
                stroke="#4C1D95"
                strokeWidth="3"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />

              {/* Valve Wheel */}
              <motion.circle
                cx="300"
                cy="150"
                r="12"
                stroke="#6B46C1"
                strokeWidth="2"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />
              <motion.line
                x1="288"
                y1="150"
                x2="312"
                y2="150"
                stroke="#6B46C1"
                strokeWidth="2"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />
              <motion.line
                x1="300"
                y1="138"
                x2="300"
                y2="162"
                stroke="#6B46C1"
                strokeWidth="2"
                variants={drawSketch}
                initial="hidden"
                animate="visible"
              />
            </svg>
          </motion.div>

          {/* Typography & Progress Section */}
          <div style={styles.loadingInfo}>
            <h1 style={styles.brandName}>DIVYA ENTERPRISE</h1>

            <div style={styles.progressContainer}>
              <div style={styles.progressRow}>
                <span style={styles.progressText}>{Math.floor(progress)}%</span>
                <div style={styles.progressBarBg}>
                  <div
                    style={{ ...styles.progressBarFill, width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              <p style={styles.subtitle}>
                ASSEMBLING INFRASTRUCTURE & PIPELINES...
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// --- PURE INLINE CSS STYLES ---
const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#FAFAFC", // Clean, bright premium background
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    fontFamily: '"Inter", "Montserrat", sans-serif',
    overflow: "hidden",
  },
  gridOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `
      linear-gradient(rgba(107, 70, 193, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(107, 70, 193, 0.04) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
    zIndex: 1,
  },
  contentWrapper: {
    position: "relative",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "800px",
  },
  svgContainer: {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
    aspectRatio: "5/3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30px",
  },
  loadingInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "0 20px",
  },
  brandName: {
    fontSize: "clamp(24px, 4vw, 42px)",
    fontWeight: "900",
    color: "#0F172A",
    letterSpacing: "10px",
    margin: "0 0 40px 0",
    textAlign: "center",
    textTransform: "uppercase",
  },
  progressContainer: {
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  progressRow: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    width: "100%",
    marginBottom: "12px",
  },
  progressText: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#4C1D95",
    minWidth: "80px",
    textAlign: "right",
    fontVariantNumeric: "tabular-nums",
  },
  progressBarBg: {
    flex: 1,
    height: "4px",
    backgroundColor: "rgba(76, 29, 149, 0.1)",
    borderRadius: "2px",
    overflow: "hidden",
    position: "relative",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#4C1D95",
    transition: "width 0.1s linear",
    boxShadow: "0 0 10px rgba(76, 29, 149, 0.5)",
  },
  subtitle: {
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "4px",
    color: "#64748B",
    margin: 0,
    textAlign: "center",
  },
};

export default Loader;
