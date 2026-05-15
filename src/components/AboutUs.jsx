import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import tank from "../assets/tank.png";

const AboutUs = () => {
  const colors = {
    primary: "#1A194D",
    white: "#FFFFFF",
    line: "rgba(26, 25, 77, 0.08)",
    accent: "#E6A317",
  };

  // --- 🪄 PARALLAX LOGIC FOR TANK ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  const tankMoveX = useTransform(mouseX, [-0.5, 0.5], ["-25px", "25px"]);
  const tankMoveY = useTransform(mouseY, [-0.5, 0.5], ["-25px", "25px"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const stats = [
    { value: "12+", label: "YEARS ELAPSED" },
    { value: "100%", label: "SUCCESS RATE" },
    { value: "₹991 Cr+", label: "Completed Projects" },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        backgroundColor: colors.white,
        backgroundImage: `linear-gradient(${colors.line} 1px, transparent 1px), linear-gradient(90deg, ${colors.line} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        padding: "120px 8%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: '"Montserrat", sans-serif',
      }}
    >
      <style>{`
        @keyframes rotateBadge {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 1024px) {
          .main-content { flex-direction: column !important; text-align: center !important; margin-top: 40px; }
          .image-side { width: 100% !important; max-width: 550px !important; margin-top: 20px; }
          .text-side { order: 2; width: 100% !important; }
          .image-side { order: 1; }
          .stats-row { justify-content: center !important; gap: 30px !important; }
          .v-text { display: none !important; }
          .bg-watermark { font-size: 30vw !important; }
        }
        @media (max-width: 768px) {
          .tank-img { width: 110% !important; max-width: none !important; }
        }
      `}</style>

      {/* GIANT DIVYA WATERMARK */}
      <div
        className="bg-watermark"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "20vw",
          fontWeight: "900",
          color: colors.primary,
          opacity: 0.03,
          letterSpacing: "15px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        DIVYA
      </div>

      {/* LEFT VERTICAL BRANDING */}
      <div
        className="v-text"
        style={{
          position: "absolute",
          left: "40px",
          top: "50%",
          transform: "translateY(-50%)",
          writingMode: "vertical-rl",
          fontSize: "12px",
          fontWeight: "800",
          color: colors.primary,
          letterSpacing: "8px",
          opacity: 0.3,
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "80px",
            backgroundColor: colors.primary,
          }}
        ></div>
        DIVYA EXPERIENCE — RAJKOT INDIA
      </div>

      <div
        className="main-content"
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          position: "relative",
          zIndex: 2,
          gap: "40px",
        }}
      >
        {/* TEXT SIDE */}
        <div className="text-side" style={{ flex: "1", maxWidth: "650px" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              display: "inline-block",
              padding: "8px 24px",
              border: `1.5px solid ${colors.primary}`,
              fontSize: "12px",
              fontWeight: "900",
              letterSpacing: "5px",
              color: colors.primary,
              marginBottom: "35px",
            }}
          >
            PRECISION ENGINEERING
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{
              fontSize: "clamp(55px, 8vw, 105px)",
              fontWeight: "900",
              color: colors.primary,
              lineHeight: "0.85",
              letterSpacing: "-4px",
              margin: "0 0 35px 0",
            }}
          >
            BUILDING <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: `2px ${colors.primary}`,
              }}
            >
              LEGACIES.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{
              fontSize: "19px",
              color: colors.primary,
              lineHeight: "1.8",
              opacity: 0.8,
              maxWidth: "550px",
              marginBottom: "50px",
              fontWeight: "500",
            }}
          >
            We don't just construct; we orchestrate infrastructure that stands
            the test of time. From Rajkot to the edges of Gujarat, our mastery
            in irrigation defines industrial excellence.
          </motion.p>

          <div
            className="stats-row"
            style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  style={{
                    fontSize: "45px",
                    fontWeight: "900",
                    color: colors.primary,
                    lineHeight: "1",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "900",
                    color: colors.primary,
                    letterSpacing: "2px",
                    marginTop: "8px",
                    opacity: 0.5,
                  }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IMAGE SIDE - ENLARGED TANK */}
        <motion.div
          className="image-side"
          style={{
            flex: "1.2",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            x: tankMoveX,
            y: tankMoveY,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          {/* THE TANK - INCREASED SIZE */}
          <img
            className="tank-img"
            src={tank}
            alt="Infrastructure Tank"
            style={{
              width: "100%",
              maxWidth: "680px", // Increased from 450px
              height: "auto",
              objectFit: "contain",
              zIndex: 2,
              filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.15))",
            }}
          />

          {/* ROTATING BADGE */}
          <div
            style={{
              position: "absolute",
              right: "-10px",
              bottom: "10%",
              width: "180px",
              height: "180px",
              zIndex: 3,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                animation: "rotateBadge 20s linear infinite",
              }}
            >
              <svg
                viewBox="0 0 100 100"
                style={{ width: "100%", height: "100%", overflow: "visible" }}
              >
                <path
                  id="tPath"
                  d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                  fill="none"
                />
                <text
                  style={{
                    fontSize: "8px",
                    fontWeight: "900",
                    fill: colors.primary,
                    opacity: 0.2,
                    textTransform: "uppercase",
                    letterSpacing: "4px",
                  }}
                >
                  <textPath xlinkHref="#tPath">
                    • THE • ELITE • QUALITY • POWER •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
