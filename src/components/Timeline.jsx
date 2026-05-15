import React from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  // 🎨 PURE PURPLE REFINED PALETTE
  const colors = {
    primary: "#1A194D",
    medium: "#353378",
    light: "#62579C",
    white: "#FFFFFF",
    ghost: "rgba(53, 51, 120, 0.06)",
    line: "rgba(53, 51, 120, 0.15)",
    accent: "#E6A317",
  };

  const timelineData = [
    {
      year: "2013",
      title: "THE FOUNDATION",
      desc: "Company established as a specialized Civil Work Contractor, setting the groundwork for engineering excellence.",
    },
    {
      year: "2015",
      title: "GOVERNMENT INFRASTRUCTURE",
      desc: "Successfully transitioned into public sector development, initiating high-level Government Infrastructure Projects.",
    },
    {
      year: "2017",
      title: "IRRIGATION EXPANSION",
      desc: "Expanded technical footprint into large-scale Canal & Irrigation Works to support regional agriculture.",
    },
    {
      year: "2019",
      title: "STRUCTURAL MASTERY",
      desc: "Entered complex engineering domains including RCC, Elevated Storage Reservoirs (ESR), SUMP, & WTP Projects.",
    },
    {
      year: "2021",
      title: "WATER NETWORKS",
      desc: "Engineered and executed Large Scale Pipeline & Water Supply Projects across challenging terrains.",
    },
    {
      year: "2024",
      title: "MEGA PROJECTS",
      desc: "Currently executing Multi-Crore Government Infrastructure Projects, defining the future of Gujarat's development.",
    },
  ];

  const styles = {
    section: {
      position: "relative",
      backgroundColor: colors.white,
      padding: "clamp(80px, 10vh, 150px) 5%",
      overflow: "hidden",
      fontFamily: '"Montserrat", sans-serif',
    },
    headerWrap: {
      textAlign: "center",
      marginBottom: "clamp(60px, 8vw, 100px)",
      position: "relative",
      zIndex: 2,
    },
    subtitle: {
      display: "inline-block",
      padding: "8px 24px",
      border: `1px solid ${colors.primary}`,
      color: colors.primary,
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "3px",
      marginBottom: "20px",
    },
    title: {
      fontSize: "clamp(40px, 6vw, 80px)",
      fontWeight: "900",
      color: colors.primary,
      lineHeight: "1",
      letterSpacing: "-2px",
    },
    timelineContainer: {
      position: "relative",
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "clamp(40px, 5vw, 80px)",
    },
    centerTrack: {
      position: "absolute",
      left: "50%",
      top: "0",
      bottom: "0",
      width: "2px",
      backgroundColor: colors.line,
      transform: "translateX(-50%)",
    },
    progressLine: {
      position: "absolute",
      left: "0",
      top: "0",
      width: "100%",
      backgroundColor: colors.primary,
      transformOrigin: "top",
    },
    itemWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
      width: "100%",
    },
    contentBox: {
      width: "42%",
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    yearHuge: {
      position: "absolute",
      fontSize: "clamp(80px, 12vw, 160px)",
      fontWeight: "900",
      color: colors.ghost,
      WebkitTextStroke: `2px rgba(53, 51, 120, 0.1)`,
      top: "50%",
      left: "50%",
      width: "100%",
      textAlign: "center",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
      pointerEvents: "none",
    },
    yearTitle: {
      fontSize: "clamp(24px, 3vw, 36px)",
      fontWeight: "900",
      color: colors.primary,
      marginBottom: "15px",
      letterSpacing: "-1px",
    },
    titleText: {
      fontSize: "14px",
      fontWeight: "800",
      color: colors.light,
      letterSpacing: "2px",
      marginBottom: "15px",
      textTransform: "uppercase",
    },
    descText: {
      fontSize: "clamp(15px, 1.5vw, 18px)",
      color: colors.medium,
      lineHeight: "1.7",
      opacity: 0.8,
    },
    node: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: "20px",
      height: "20px",
      backgroundColor: colors.white,
      border: `4px solid ${colors.primary}`,
      borderRadius: "50%",
      zIndex: 3,
      boxShadow: `0 0 0 10px ${colors.white}, 0 10px 30px rgba(26, 25, 77, 0.2)`,
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <section className="timeline-section" style={styles.section}>
      <style>{`
        @media (max-width: 900px) {
          .center-track { 
            left: 20px !important; 
            transform: none !important;
          }
          .timeline-item { 
            flex-direction: column !important; 
            align-items: flex-start !important; 
            gap: 0px !important;
          }
          .content-box { 
            width: 100% !important; 
            padding-left: 55px !important; 
            padding-right: 10px !important;
            text-align: left !important; 
            align-items: flex-start !important; 
            box-sizing: border-box !important;
          }
          .empty-space { 
            display: none !important; 
          }
          .timeline-node { 
            left: 20px !important; 
            top: 24px !important;
            transform: translate(-50%, 0) !important;
            z-index: 10 !important; 
          }
          .huge-year-bg { 
            left: 55px !important; 
            top: 20px !important;
            transform: none !important; 
            text-align: left !important; 
            width: auto !important;
            font-size: 70px !important;
          }
        }

        @media (max-width: 480px) {
          .center-track {
            left: 15px !important;
          }
          .timeline-node {
            left: 15px !important;
            top: 20px !important;
            width: 16px !important;
            height: 16px !important;
            box-shadow: 0 0 0 6px #FFFFFF, 0 10px 20px rgba(26, 25, 77, 0.15) !important;
          }
          .content-box {
            padding-left: 45px !important;
          }
          .huge-year-bg {
            left: 45px !important;
            font-size: 55px !important;
            top: 15px !important;
          }
        }
      `}</style>

      {/* BACKGROUND DECOR */}
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          fontSize: "15vw",
          fontWeight: 950,
          color: "rgba(53, 51, 120, 0.02)",
          zIndex: 0,
          userSelect: "none",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        # EVOLUTION
      </motion.div>

      <div style={styles.headerWrap}>
        <motion.div
          style={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          OUR JOURNEY
        </motion.div>
        <motion.h2
          style={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A DECADE OF <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: `1.5px ${colors.primary}`,
            }}
          >
            BUILDING TRUST.
          </span>
        </motion.h2>
      </div>

      <div style={styles.timelineContainer}>
        <div className="center-track" style={styles.centerTrack}>
          <motion.div
            style={styles.progressLine}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </div>

        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className="timeline-item"
              style={{
                ...styles.itemWrapper,
                flexDirection: isEven ? "row" : "row-reverse",
              }}
            >
              <motion.div
                className="content-box"
                style={styles.contentBox}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="huge-year-bg" style={styles.yearHuge}>
                  {item.year}
                </div>
                <div style={styles.titleText}>{item.title}</div>
                <div style={styles.yearTitle}>{item.year}</div>
                <div style={styles.descText}>{item.desc}</div>
              </motion.div>

              {/* STATIC CENTER DOT - REMOVED MOTION PROPS */}
              <div className="timeline-node" style={styles.node} />

              <div className="empty-space" style={{ width: "42%" }} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
