import React from "react";
import { motion } from "framer-motion";
import constructionImg from "../assets/construction2.png";

const MoreAboutUs = () => {
  const theme = {
    darkPurple: "#353378",
    mediumPurple: "#62579c",
    lightPurple: "#957ab4",
    concrete: "#FFFFFF", // Matched to pure white background in image_792f71.jpg
    white: "#FFFFFF",
  };

  // Refined "Scroll Up" animation logic
  const structuralReveal = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, margin: "-50px" },
  };

  return (
    <section
      style={{
        backgroundColor: theme.concrete,
        padding: "clamp(60px, 10vw, 140px) 0", // Fully responsive padding
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* --- RESPONSIVE MEDIA QUERIES --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;700;900&display=swap');
        
        .construction-font { font-family: 'Archivo Black', sans-serif; }
        
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1px ${theme.darkPurple};
        }

        .industrial-card {
            background: ${theme.white};
            border: 4px solid ${theme.darkPurple};
            box-shadow: 15px 15px 0px ${theme.mediumPurple};
            transition: transform 0.3s ease;
        }

        /* TABLET & MOBILE RESPONSIVENESS */
        @media (max-width: 1024px) {
          .main-grid { 
            grid-template-columns: 1fr !important; 
            gap: 50px !important; 
          }
          .hero-text { font-size: clamp(32px, 8vw, 48px) !important; }
          .side-marker { display: none; }
          .header-block { text-align: center; margin-bottom: 50px !important; }
          .stats-area { justify-content: center !important; }
        }

        @media (max-width: 640px) {
          .card-padding { padding: 40px 20px !important; }
          .stats-area { flex-direction: column !important; align-items: center; gap: 30px !important; }
        }
      `}</style>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 5%",
          position: "relative",
        }}
      >
        {/* --- HEADER BLOCK --- */}
        <div className="header-block" style={{ marginBottom: "100px" }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{
              display: "block",
              color: theme.mediumPurple,
              fontWeight: "900",
              letterSpacing: "5px",
              textTransform: "uppercase",
              fontSize: "13px",
              marginBottom: "15px",
            }}
          >
            [ ABOUT US ]
          </motion.span>
          <motion.h2
            {...structuralReveal}
            className="construction-font hero-text"
            style={{
              fontSize: "clamp(38px, 5vw, 60px)", // REDUCED FONT SIZE per image_792f71.jpg
              color: theme.darkPurple,
              lineHeight: "1.1",
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "-1px",
            }}
          >
            FORGING THE <br />
            <span className="outline-text">SKYLINES OF</span> <br />
            GUJARAT
          </motion.h2>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div
          className="main-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* LEFT SIDE: THE INDUSTRIAL CARD */}
          <motion.div
            {...structuralReveal}
            className="industrial-card card-padding"
            style={{ padding: "60px 40px", position: "relative" }}
          >
            {/* Structural Bolt Accents */}
            <div
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: theme.darkPurple,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: theme.darkPurple,
              }}
            />

            <h3
              style={{
                fontSize: "26px",
                fontWeight: "900",
                color: theme.darkPurple,
                marginBottom: "25px",
                textTransform: "uppercase",
              }}
            >
              Engineering Evolution
            </h3>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: theme.darkPurple,
                opacity: 0.8,
                fontWeight: "500",
              }}
            >
              Divya Enterprise didn't just grow; we{" "}
              <strong style={{ color: theme.mediumPurple }}>reinforced</strong>.
              What started as a Civil Work Contractor in 2013 has mutated into a
              strategic force in Central Government projects.
            </p>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: theme.darkPurple,
                opacity: 0.8,
                fontWeight: "500",
                marginTop: "20px",
              }}
            >
              We specialize in heavy-duty roads and monumental civil trades. We
              deliver a
              <span style={{ color: theme.mediumPurple, fontWeight: "900" }}>
                {" "}
                COMMITMENT EXPERIENCE
              </span>{" "}
              that survives the test of time.
            </p>

            {/* STATS AREA */}
            <div
              className="stats-area"
              style={{
                display: "flex",
                gap: "40px",
                marginTop: "50px",
                borderTop: `1px solid ${theme.lightPurple}44`,
                paddingTop: "40px",
              }}
            >
              <div>
                <div
                  className="construction-font"
                  style={{ fontSize: "40px", color: theme.darkPurple }}
                >
                  991+
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "800",
                    color: theme.mediumPurple,
                    letterSpacing: "2px",
                  }}
                >
                  CR. COMPLETED
                </div>
              </div>
              <div>
                <div
                  className="construction-font"
                  style={{ fontSize: "40px", color: theme.darkPurple }}
                >
                  808+
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "800",
                    color: theme.mediumPurple,
                    letterSpacing: "2px",
                  }}
                >
                  CR. ONGOING
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: IMAGE & DECOR */}
          <div style={{ position: "relative" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                position: "relative",
                zIndex: 2,
                border: `4px solid ${theme.darkPurple}`,
                height: "auto",
                maxHeight: "600px",
                overflow: "hidden",
              }}
            >
              <img
                src={constructionImg}
                alt="On-site execution"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  background: theme.mediumPurple,
                  color: theme.white,
                  padding: "15px 30px",
                  fontWeight: "900",
                  fontSize: "12px",
                }}
              >
                We Build For The Future
              </div>
            </motion.div>

            {/* DECORATIVE SCAFFOLDING */}
            <div
              className="side-marker"
              style={{
                position: "absolute",
                top: "-30px",
                right: "-30px",
                width: "100%",
                height: "100%",
                border: `2px solid ${theme.lightPurple}`,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                marginTop: "30px",
                padding: "25px",
                borderLeft: `8px solid ${theme.lightPurple}`,
                background: theme.darkPurple,
                color: theme.white,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                  lineHeight: "1.5",
                }}
              >
                "ACCUMULATING UNPARALLELED SKILLS IN ADVANCED BUILDING TRADES
                SINCE DAY ONE."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutUs;
