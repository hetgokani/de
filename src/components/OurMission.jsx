import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, HardHat, Timer, Handshake } from "lucide-react";

const OurMission = () => {
  const colors = {
    primary: "#1A194D",
    medium: "#353378",
    light: "#62579C",
    accent: "#E6A317",
    white: "#FFFFFF",
    line: "rgba(53, 51, 120, 0.08)",
  };

  const missionPillars = [
    {
      icon: <CheckCircle2 size={28} />,
      title: "Quality Workmanship",
      desc: "Delivering future-ready solutions that meet the highest standards of engineering excellence.",
    },
    {
      icon: <HardHat size={28} />,
      title: "Safety & Precision",
      desc: "Executing every project with a focus on technical accuracy and uncompromising safety protocols.",
    },
    {
      icon: <Timer size={28} />,
      title: "Timely Execution",
      desc: "Respecting deadlines through innovation and skilled teamwork to ensure project reliability.",
    },
    {
      icon: <Handshake size={28} />,
      title: "Building Trust",
      desc: "Maintaining transparency and responsible practices to exceed our clients' expectations.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: colors.white,
        backgroundImage: `linear-gradient(${colors.line} 1px, transparent 1px), linear-gradient(90deg, ${colors.line} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        padding: "100px 8%",
        overflow: "hidden",
        fontFamily: '"Montserrat", sans-serif',
      }}
    >
      <style>{`
        /* Desktop Base */
        .mission-title {
          font-size: 72px;
          font-weight: 900;
          color: ${colors.primary};
          line-height: 1.1;
          letter-spacing: -3px;
          margin: 0 0 40px 0;
        }
        .mission-desc {
          font-size: 20px;
          line-height: 1.8;
          color: ${colors.medium};
          max-width: 850px;
          font-weight: 500;
        }
        .mission-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        /* Large Tablets */
        @media (max-width: 1024px) {
          .mission-title { font-size: 52px; letter-spacing: -2px; }
          .mission-desc { font-size: 18px; }
        }

        /* Mobile Devices (Fixes for image_78afcf.png) */
        @media (max-width: 768px) {
          .mission-title { 
            font-size: 32px; 
            letter-spacing: -1px; 
            text-align: center; 
            line-height: 1.2;
          }
          .mission-desc { 
            font-size: 15px; 
            text-align: center; 
            line-height: 1.6;
          }
          .header-container { text-align: center !important; align-items: center !important; }
          .accent-line { margin: 0 auto 30px !important; width: 80px !important; }
          .mission-label { text-align: center; width: 100%; font-size: 12px; }
          
          /* Grid adjustments for image_78af52.png */
          .mission-grid {
            margin-top: 40px;
            gap: 20px;
          }
          .pillar-card {
            padding: 30px 20px !important;
            text-align: center;
            align-items: center;
          }
        }
      `}</style>

      <div
        className="header-container"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <motion.div
          className="mission-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            color: colors.accent,
            fontSize: "14px",
            fontWeight: "900",
            letterSpacing: "5px",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          Our Mission
        </motion.div>

        <h2 className="mission-title">
          BUILDING SUSTAINABLE <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: `1.5px ${colors.primary}`,
            }}
          >
            INFRASTRUCTURE
          </span>
          <br /> FOR A STRONGER TOMORROW
        </h2>

        <motion.div
          className="accent-line"
          initial={{ width: 0 }}
          whileInView={{ width: "150px" }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            height: "6px",
            backgroundColor: colors.accent,
            marginBottom: "50px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "flex-start",
          }}
        >
          <motion.div
            className="mission-desc"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            At <strong>Divya Enterprise</strong>, our mission is to deliver
            reliable, high-quality, and future-ready infrastructure solutions
            that contribute to the growth of communities and industries across
            India. We are committed to executing every project with precision,
            safety, transparency, and engineering excellence.
          </motion.div>
        </div>

        <motion.div
          className="mission-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {missionPillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="pillar-card"
              whileHover={{ y: -5, borderColor: colors.accent }}
              style={{
                padding: "40px",
                backgroundColor: colors.white,
                border: `1px solid ${colors.line}`,
                boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                transition: "border-color 0.3s ease",
              }}
            >
              <div
                style={{
                  color: colors.primary,
                  display: "flex",
                  justifyContent: "inherit",
                }}
              >
                {pillar.icon}
              </div>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "900",
                  color: colors.primary,
                  margin: 0,
                }}
              >
                {pillar.title}
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  color: colors.medium,
                  lineHeight: "1.6",
                  margin: 0,
                  opacity: 0.8,
                }}
              >
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative background text - hidden on mobile for better performance */}
      <style>{`
        @media (max-width: 768px) { .bg-watermark { display: none; } }
      `}</style>
      <div
        className="bg-watermark"
        style={{
          position: "absolute",
          bottom: "-40px",
          right: "-20px",
          fontSize: "15vw",
          fontWeight: "900",
          color: colors.line,
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      >
        MISSION
      </div>
    </section>
  );
};

export default OurMission;
