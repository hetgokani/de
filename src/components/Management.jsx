import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ceo1 from "../assets/ceo1.PNG";
import ceo2 from "../assets/ceo2.PNG";

const Management = () => {
  const colors = {
    primary: "#1A194D",
    medium: "#353378",
    light: "#62579C",
    accent: "#E6A317",
    white: "#FFFFFF",
    line: "rgba(53, 51, 120, 0.08)",
  };

  // --- 🪄 3D MOUSE PARALLAX LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const leaders = [
    {
      name: "Mr. Pravin Sagpariya",
      img: ceo2,
      role: "Strategic Working Partner",
      bio: "Driving the business development, project management, and administration of the company. With over 8 years of specialized experience in Government Projects, he identifies changes in the business environment and proactively reviews work progress to ensure the highest quality service in the industry.",
    },
    {
      name: "Mr. Pravin Kotadiya",
      img: ceo1,
      role: "Operations Working Partner",
      bio: "Proficient in offering engineering services including laying, jointing, pumping irrigation, and construction of canals. He communicates key learning points and company policy to all staff during regular meetings, ensuring the team remains the most qualified in the market today.",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: colors.white,
        backgroundImage: `linear-gradient(${colors.line} 1px, transparent 1px), linear-gradient(90deg, ${colors.line} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        padding: "80px 8%",
        overflow: "hidden",
        fontFamily: '"Montserrat", sans-serif',
      }}
      onMouseMove={handleMouseMove}
    >
      <style>{`
        /* RESPONSIVE DESIGN ADJUSTMENTS */
        @media (max-width: 1024px) {
          .leader-row { flex-direction: column !important; gap: 50px !important; text-align: center !important; }
          .text-content { align-items: center !important; max-width: 100% !important; }
          .image-box { width: 320px !important; height: 400px !important; }
        }
        @media (max-width: 768px) {
          .section-title { font-size: 14vw !important; }
          .leader-row { gap: 40px !important; }
          .image-box { width: 280px !important; height: 350px !important; }
        }
      `}</style>

      {/* HEADER SECTION - BOLD TITLES */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            padding: "8px 24px",
            border: `1px solid ${colors.primary}`,
            color: colors.primary,
            fontSize: "12px",
            fontWeight: "900",
            letterSpacing: "4px",
            width: "fit-content",
            margin: "0 auto 30px",
          }}
        >
          CORE MANAGEMENT
        </motion.div>

        <h2
          className="section-title"
          style={{
            fontSize: "clamp(60px, 9vw, 110px)", // LARGE TITLE SCALE
            fontWeight: "900",
            color: colors.primary,
            lineHeight: "0.85",
            letterSpacing: "-5px",
          }}
        >
          MEET OUR <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: `2px ${colors.primary}`,
            }}
          >
            LEADERS
          </span>
        </h2>
      </div>

      {/* LEADERS CONTENT - SPACED DESKTOP LAYOUT */}
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="leader-row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "100px", // INCREASED GAP BETWEEN PHOTO AND DESC
              marginBottom: "100px",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            {/* IMAGE BLOCK - SLIGHTLY BIGGER */}
            <motion.div
              className="image-box"
              style={{
                width: "380px",
                height: "480px",
                position: "relative",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  border: `2px solid ${colors.primary}`,
                  padding: "15px",
                  backgroundColor: colors.white,
                  rotateX,
                  rotateY,
                  perspective: "1000px",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={leader.img}
                  alt={leader.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    right: index % 2 === 0 ? "-20px" : "auto",
                    left: index % 2 === 0 ? "auto" : "-20px",
                    background: colors.primary,
                    color: "white",
                    padding: "15px 30px",
                    fontSize: "12px",
                    fontWeight: "900",
                    letterSpacing: "2px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                >
                  PARTNER
                </div>
              </motion.div>
            </motion.div>

            {/* TEXT CONTENT - ENLARGED BIO */}
            <motion.div
              className="text-content"
              style={{
                flex: "1",
                maxWidth: "600px",
                display: "flex",
                flexDirection: "column",
                alignItems: index % 2 === 0 ? "flex-start" : "flex-end",
                textAlign: index % 2 === 0 ? "left" : "right",
              }}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "900",
                  color: colors.accent,
                  letterSpacing: "4px",
                  marginBottom: "15px",
                  textTransform: "uppercase",
                }}
              >
                {leader.role}
              </div>
              <h3
                style={{
                  fontSize: "45px", // LARGER NAME
                  fontWeight: "900",
                  color: colors.primary,
                  marginBottom: "25px",
                  letterSpacing: "-2px",
                  lineHeight: "1",
                }}
              >
                {leader.name}
              </h3>
              <p
                style={{
                  fontSize: "18px", // LARGER BIO TEXT
                  color: colors.medium,
                  lineHeight: "1.8",
                  opacity: 0.9,
                  margin: 0,
                }}
              >
                {leader.bio}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Management;
