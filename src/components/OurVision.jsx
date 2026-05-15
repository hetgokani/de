import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Lightbulb,
  Award,
  Handshake,
  Globe,
  Forward,
} from "lucide-react";

const OurVision = () => {
  const colors = {
    primary: "#1A194D",
    medium: "#353378",
    light: "#62579C",
    accent: "#E6A317",
    white: "#FFFFFF",
    line: "rgba(53, 51, 120, 0.08)",
  };

  const visionCards = [
    {
      icon: <Trophy size={32} />,
      title: "Excellence in Infrastructure",
      desc: "Delivering high-quality civil and engineering solutions with precision and professionalism.",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation & Growth",
      desc: "Adopting modern technologies and efficient construction practices for sustainable development.",
    },
    {
      icon: <Award size={32} />,
      title: "Commitment to Quality",
      desc: "Maintaining the highest standards of safety, durability, and timely project execution.",
    },
    {
      icon: <Handshake size={32} />,
      title: "Trusted Partnerships",
      desc: "Building strong relationships through transparency, integrity, and reliability.",
    },
    {
      icon: <Globe size={32} />,
      title: "Nation Building",
      desc: "Contributing to the growth of communities across India with impactful projects.",
    },
    {
      icon: <Forward size={32} />,
      title: "Future-Focused",
      desc: "Creating long-lasting infrastructure designed to serve future generations responsibly.",
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
        .vision-title {
          font-size: 72px;
          font-weight: 900;
          color: ${colors.primary};
          line-height: 1.1;
          letter-spacing: -3px;
          margin: 0 0 40px 0;
        }
        .vision-desc-box {
          font-size: 20px;
          line-height: 1.8;
          color: ${colors.medium};
          max-width: 900px;
          font-weight: 500;
          margin-bottom: 60px;
        }
        .vision-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        @media (max-width: 1200px) {
          .vision-grid { grid-template-columns: repeat(2, 1fr); }
          .vision-title { font-size: 56px; }
        }

        @media (max-width: 768px) {
          .vision-grid { grid-template-columns: 1fr; gap: 20px; }
          .vision-title { font-size: 34px; letter-spacing: -1px; text-align: center; }
          .vision-desc-box { font-size: 16px; text-align: center; }
          .vision-header-container { align-items: center !important; text-align: center !important; }
          .vision-accent-line { margin: 0 auto 40px !important; }
          .vision-label { text-align: center; width: 100%; }
        }
      `}</style>

      <div
        className="vision-header-container"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <motion.div
          className="vision-label"
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
          Our Vision
        </motion.div>

        <h2 className="vision-title">
          SHAPING THE <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: `1.5px ${colors.primary}`,
            }}
          >
            LANDSCAPE
          </span>
          <br /> OF TOMORROW
        </h2>

        <motion.div
          className="vision-accent-line"
          initial={{ width: 0 }}
          whileInView={{ width: "150px" }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            height: "6px",
            backgroundColor: colors.accent,
            marginBottom: "50px",
          }}
        />

        <motion.div
          className="vision-desc-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          To become one of India’s most trusted and respected infrastructure
          development companies. We envision creating modern infrastructure that
          improves lives, strengthens connectivity, and supports future
          generations through excellence in construction and technology.
        </motion.div>

        <motion.div
          className="vision-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {visionCards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                backgroundColor: colors.primary,
                color: "#FFFFFF",
              }}
              style={{
                padding: "45px 35px",
                backgroundColor: colors.white,
                border: `1px solid ${colors.line}`,
                boxShadow: "0 15px 35px rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                cursor: "default",
              }}
            >
              <div
                className="vision-card-icon"
                style={{ transition: "color 0.3s" }}
              >
                {card.icon}
              </div>
              <h4
                style={{
                  fontSize: "22px",
                  fontWeight: "900",
                  margin: 0,
                  lineHeight: "1.2",
                }}
              >
                {card.title}
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  margin: 0,
                  opacity: 0.85,
                }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Watermark Section */}
      <div
        className="bg-watermark"
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "-20px",
          fontSize: "15vw",
          fontWeight: "900",
          color: colors.line,
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      >
        VISION
      </div>
    </section>
  );
};

export default OurVision;
