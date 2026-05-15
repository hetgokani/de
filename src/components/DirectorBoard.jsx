import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ceo1 from "../assets/ceo1.PNG";
import ceo2 from "../assets/ceo2.PNG";

const DirectorBoard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colors = {
    primary: "#1A194D", // Heavy Navy
    accent: "#F2994A", // Hi-Vis Construction Orange
    slate: "#0F172A", // Site Ground
    white: "#FFFFFF",
    concrete: "#E2E8F0",
    steel: "rgba(242, 153, 74, 0.1)",
  };

  const leaders = [
    {
      name: "Mr. Pravin Sagpariya",
      img: ceo2,
      role: "Strategic Working Partner",
      bio: "Driving the business development, project management, and administration of the company. With over 8 years of specialized experience in Government Projects, he identifies changes in the business environment and proactively reviews work progress to ensure the highest quality service in the industry.",
      unit: "DIV-SEC-01",
    },
    {
      name: "Mr. Pravin Kotadiya",
      img: ceo1,
      role: "Operations Working Partner",
      bio: "Proficient in offering engineering services including laying, jointing, pumping irrigation, and construction of canals. He communicates key learning points and company policy to all staff during regular meetings, ensuring the team remains the most qualified in the market today.",
      unit: "DIV-OPS-02",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: colors.white,
        backgroundImage: `linear-gradient(90deg, ${colors.concrete} 1px, transparent 1px), linear-gradient(${colors.concrete} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        padding: isMobile ? "80px 5%" : "140px 10%",
        fontFamily: '"Montserrat", sans-serif',
        overflow: "hidden",
      }}
    >
      {/* --- SITE PLAN HEADER --- */}
      <div
        style={{
          marginBottom: isMobile ? "60px" : "120px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{ width: "60px", height: "4px", background: colors.accent }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: "900",
              color: colors.accent,
              letterSpacing: "4px",
            }}
          >
            PROJECT LEADERSHIP
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(45px, 9vw, 105px)",
            fontWeight: "900",
            color: colors.primary,
            lineHeight: "0.85",
            letterSpacing: "-4px",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          BOARD OF <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: `2px ${colors.primary}`,
            }}
          >
            DIRECTORS
          </span>
        </h1>
      </div>

      {/* --- STRUCTURAL GRID --- */}
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {leaders.map((leader, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: isMobile
                ? "column"
                : index % 2 === 0
                  ? "row"
                  : "row-reverse",
              alignItems: "center",
              marginBottom: isMobile ? "100px" : "180px",
              gap: isMobile ? "40px" : "0",
            }}
          >
            {/* IMAGE: VIBRANT COLOR + INDUSTRIAL FRAME */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ flex: "1.1", position: "relative" }}
            >
              {/* Construction Border Effect */}
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  left: index % 2 === 0 ? "-15px" : "auto",
                  right: index % 2 === 0 ? "auto" : "-15px",
                  width: "100%",
                  height: "100%",
                  border: `2px dashed ${colors.accent}`,
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  padding: "15px",
                  background: colors.white,
                  boxShadow: "20px 20px 0px " + colors.primary,
                }}
              >
                <img
                  src={leader.img}
                  alt={leader.name}
                  style={{
                    width: "100%",
                    height: isMobile ? "400px" : "580px",
                    objectFit: "cover",
                    display: "block",
                    // COLORFUL VIBE:
                    filter: "contrast(1.1) saturate(1.2)",
                  }}
                />
                {/* Site Label Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "30px",
                    left: index % 2 === 0 ? "auto" : "-10px",
                    right: index % 2 === 0 ? "-10px" : "auto",
                    background: colors.accent,
                    color: colors.white,
                    padding: "8px 20px",
                    fontWeight: "900",
                    fontSize: "12px",
                    transform: "skewX(-15deg)",
                    boxShadow: "5px 5px 0px " + colors.primary,
                  }}
                >
                  {leader.unit}
                </div>
              </div>
            </motion.div>

            {/* CONTENT: HEAVY INDUSTRIAL BLUEPRINT */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                flex: "1",
                padding: isMobile ? "40px 25px" : "70px",
                backgroundColor: colors.primary,
                color: colors.white,
                marginLeft: isMobile ? "0" : index % 2 === 0 ? "-80px" : "0",
                marginRight: isMobile ? "0" : index % 2 === 0 ? "0" : "-80px",
                position: "relative",
                zIndex: 2,
                clipPath: isMobile
                  ? "none"
                  : index % 2 === 0
                    ? "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)"
                    : "polygon(0 5%, 100% 0, 100% 100%, 0% 95%)",
              }}
            >
              <h4
                style={{
                  color: colors.accent,
                  fontWeight: "900",
                  fontSize: "13px",
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {leader.role}
              </h4>
              <h2
                style={{
                  fontSize: isMobile ? "32px" : "48px",
                  fontWeight: "900",
                  lineHeight: "1.1",
                  marginBottom: "25px",
                  letterSpacing: "-1px",
                }}
              >
                {leader.name}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  opacity: 0.8,
                  fontWeight: "400",
                  margin: 0,
                }}
              >
                {leader.bio}
              </p>

              {/* Construction Stencil Detail */}
              <div
                style={{
                  marginTop: "40px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  opacity: 0.4,
                }}
              >
                <div
                  style={{ flex: 1, height: "1px", background: colors.white }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "900",
                    letterSpacing: "3px",
                  }}
                >
                  DIVYA ENTERPRISE
                </span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DirectorBoard;
