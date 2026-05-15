import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Construction,
  Settings,
  Mountain,
  Building,
  ArrowUpRight,
} from "lucide-react";

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colors = {
    primary: "#1A194D",
    medium: "#353378",
    accent: "#E6A317",
    white: "#FFFFFF",
    line: "rgba(53, 51, 120, 0.08)",
    waterBright: "#00E5FF",
    waterMid: "#0077BE",
    waterDeep: "#003366",
    pipeBlack: "#0A0A1A",
  };

  const serviceData = [
    {
      title: "Piping & UGPL Solutions",
      desc: "Specialized in laying and jointing of MS, DI, GRP, and UPVC pipelines. Expertise in Sauni Yojana and UGPL works.",
      icon: <Droplets size={30} />,
      tags: ["MS PIPE", "DI PIPE"],
    },
    {
      title: "Canal & Irrigation Systems",
      desc: "Pioneers in Canal Lining, Pumping Irrigation, and PMKSY schemes. High-precision canal construction for state water resources.",
      icon: <Mountain size={30} />,
      tags: ["CANAL LINING", "PMKSY", "IRRIGATION"],
    },
    {
      title: "Water Infrastructure (RCC)",
      desc: "Expert construction of critical RCC structures including ESR, Sump, WTP, and Intake Wells.",
      icon: <Settings size={30} />,
      tags: ["ESR", "WTP", "SUMP"],
    },
    {
      title: "Civil & Building Works",
      desc: "Comprehensive project management for Road & Building departments and Gujarat Council of School Education.",
      icon: <Building size={30} />,
      tags: ["SCHOOL BLDGS", "PIU", "ROADS"],
    },
    {
      title: "Electro-Mechanical Work",
      desc: "Integration of mechanical components, solar panel installations, and technical engineering services for government utilities.",
      icon: <Construction size={30} />,
      tags: ["SOLAR", "TECHNICAL", "PUMPING"],
    },
  ];

  const seamlessWavePath =
    "M 0 70 Q 250 40 500 70 T 1000 70 T 1500 70 T 2000 70 T 2500 70 T 3000 70 V 150 H 0 Z";

  return (
    <section
      style={{
        backgroundColor: colors.white,
        backgroundImage: `linear-gradient(${colors.line} 1px, transparent 1px), linear-gradient(90deg, ${colors.line} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        // FIXED: Dynamic padding for mobile to prevent overflow
        padding: isMobile ? "60px 5%" : "100px 8%",
        fontFamily: '"Montserrat", sans-serif',
        overflow: "hidden",
      }}
    >
      <div style={{ marginBottom: "60px", textAlign: "left" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{
            color: colors.accent,
            fontSize: "12px",
            fontWeight: "900",
            letterSpacing: "5px",
            marginBottom: "20px",
          }}
        >
          OUR EXPERTISE
        </motion.div>

        <h2
          style={{
            fontSize: isMobile ? "40px" : "clamp(40px, 7vw, 90px)",
            fontWeight: "900",
            color: colors.primary,
            lineHeight: "1.1",
            letterSpacing: isMobile ? "-1px" : "-4px",
            margin: 0,
          }}
        >
          ENGINEERING <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: `1.5px ${colors.primary}`,
            }}
          >
            SOLUTIONS
          </span>
        </h2>
      </div>

      {/* --- 🌊 CONTINUOUS SEAMLESS WATER PIPELINE --- */}
      <div
        style={{
          position: "relative",
          width: "120%",
          left: "-10%",
          height: "180px",
          marginBottom: "100px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg
          width="100%"
          height="150"
          viewBox="0 0 1000 150"
          preserveAspectRatio="none"
          style={{ filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.3))" }}
        >
          <defs>
            <clipPath id="waterClipPath">
              <rect x="0" y="35" width="1000" height="80" rx="10" />
            </clipPath>
            <linearGradient id="oceanFlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.waterBright} />
              <stop offset="50%" stopColor={colors.waterMid} />
              <stop offset="100%" stopColor={colors.waterDeep} />
            </linearGradient>
            <linearGradient id="glassShine" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.4" />
              <stop offset="15%" stopColor="white" stopOpacity="0" />
              <stop offset="85%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect
            x="0"
            y="30"
            width="1000"
            height="90"
            fill={colors.pipeBlack}
            rx="12"
          />
          <g clipPath="url(#waterClipPath)">
            <rect
              x="0"
              y="0"
              width="1000"
              height="150"
              fill={colors.waterMid}
            />
            <motion.path
              d={seamlessWavePath}
              fill="url(#oceanFlow)"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d={seamlessWavePath}
              fill="#FFFFFF"
              opacity="0.2"
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
          </g>
          <rect
            x="0"
            y="35"
            width="1000"
            height="80"
            fill="url(#glassShine)"
            rx="10"
          />
          {isMobile
            ? [200, 500, 800].map((pos, i) => (
                <rect
                  key={i}
                  x={pos - 15}
                  y="25"
                  width="30"
                  height="100"
                  fill="#000000"
                  rx="4"
                />
              ))
            : [...Array(10)].map((_, i) => (
                <rect
                  key={i}
                  x={i * 111}
                  y="25"
                  width="10"
                  height="100"
                  fill="#000000"
                  rx="2"
                />
              ))}
        </svg>
      </div>

      {/* --- 💳 RESPONSIVE SERVICES GRID --- */}
      <div
        style={{
          display: "grid",
          // FIXED: Use 1fr on mobile to ensure it stays within section padding
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            whileHover={isMobile ? {} : { y: -15 }}
            style={{
              backgroundColor: colors.white,
              border: `1px solid ${colors.line}`,
              // FIXED: Optimized padding for mobile
              padding: isMobile ? "40px 25px" : "50px 40px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 60px rgba(26, 25, 77, 0.04)",
              overflow: "hidden",
              width: "100%",
              boxSizing: "border-box", // Ensures padding doesn't add to width
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "-10px",
                right: "-5px",
                fontSize: isMobile ? "80px" : "120px",
                fontWeight: "900",
                color: colors.line,
                zIndex: 0,
                userSelect: "none",
              }}
            >
              0{index + 1}
            </span>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  color: colors.accent,
                  marginBottom: "25px",
                  display: "inline-block",
                  padding: "12px",
                  backgroundColor: "rgba(230, 163, 23, 0.05)",
                  borderRadius: "12px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: isMobile ? "22px" : "26px",
                  fontWeight: "900",
                  color: colors.primary,
                  marginBottom: "15px",
                  letterSpacing: "-0.5px",
                  lineHeight: "1.2",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#444",
                  lineHeight: "1.6",
                  fontSize: isMobile ? "15px" : "16px",
                  marginBottom: "25px",
                }}
              >
                {service.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "10px",
                      fontWeight: "800",
                      padding: "4px 10px",
                      border: `1px solid ${colors.line}`,
                      color: colors.medium,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.div
                style={{
                  marginTop: "35px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: colors.primary,
                  fontWeight: "900",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
                whileHover={{ gap: "18px" }}
              ></motion.div>
            </div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "4px",
                background: colors.accent,
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
