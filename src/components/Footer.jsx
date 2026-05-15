import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Adjust these paths based on your actual folder structure
import logo from "../assets/nobglogo.png";
import footerBg from "../assets/construction2.png";

const Footer = () => {
  const colors = {
    light: "#957ab4",
    medium: "#62579c",
    dark: "#353378",
    base: "#1A194D",
    accent: "#E6A317", // Gold
    white: "#FFFFFF",
    line: "rgba(255, 255, 255, 0.1)",
    textFade: "rgba(255, 255, 255, 0.65)",
    darkGrey: "#1a1a1a",
  };

  const footerLinks = {
    quick: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Our Journey", path: "/our-journey" },
      { name: "Board of Directors", path: "/boardofdirectors" },
    ],
    services: [
      { name: "Government Infrastructure", path: "/services" },
      { name: "Canal & Irrigation", path: "/services" },
      { name: "Elevated Storage (ESR)", path: "/services" },
      { name: "Large Scale Pipelines", path: "/services" },
    ],
    company: [
      { name: "Completed Projects", path: "/completed-projects" },
      { name: "Investor Relations", path: "/investor" },
      { name: "Careers", path: "/career" },
      { name: "CSR Initiatives", path: "/csr" },
    ],
  };

  const styles = {
    footerWrapper: {
      position: "relative",
      fontFamily: '"Montserrat", sans-serif',
      color: colors.white,
      // The construction background image with a dark industrial/brand overlay
      backgroundImage: `linear-gradient(to right, rgba(26, 25, 77, 0.95), rgba(40, 40, 45, 0.92)), url(${footerBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed", // Gives a slight parallax effect on desktop
      borderTop: `4px solid ${colors.accent}`,
      paddingTop: "60px",
    },
    container: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 5%",
      position: "relative",
      zIndex: 2,
    },
    ctaSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: `1px solid ${colors.line}`,
      paddingBottom: "40px",
      marginBottom: "50px",
    },
    ctaTitle: {
      fontSize: "clamp(24px, 4vw, 36px)", // Scaled down for proper footer sizing
      fontWeight: "900",
      lineHeight: "1.2",
      letterSpacing: "-1px",
      margin: 0,
    },
    ctaSubtitle: {
      color: colors.light,
      fontSize: "12px",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "8px",
      display: "block",
    },
    contactBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "14px 28px",
      backgroundColor: colors.accent,
      color: colors.base,
      fontSize: "13px",
      fontWeight: "800",
      letterSpacing: "1px",
      textTransform: "uppercase",
      textDecoration: "none",
      borderRadius: "2px",
      transition: "all 0.3s ease",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
      gap: "40px",
      paddingBottom: "50px",
    },
    colTitle: {
      fontSize: "14px",
      fontWeight: "800",
      color: colors.white,
      marginBottom: "20px",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    logoImg: {
      height: "85px", // INCREASED LOGO SIZE HERE
      width: "auto",
      objectFit: "contain",
      marginBottom: "20px",
      filter: "brightness(0) invert(1)", // Makes the logo white for the dark background
    },
    desc: {
      color: colors.textFade,
      lineHeight: "1.6",
      fontSize: "13px",
      maxWidth: "90%",
      marginBottom: "25px",
    },
    contactItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      marginBottom: "15px",
      color: colors.textFade,
      fontSize: "13px",
      lineHeight: "1.5",
    },
    linkItem: {
      display: "block",
      color: colors.textFade,
      textDecoration: "none",
      fontSize: "13px",
      fontWeight: "500",
      marginBottom: "12px",
      transition: "color 0.3s ease",
    },
    bottomBar: {
      borderTop: `1px solid ${colors.line}`,
      padding: "20px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "12px",
      color: colors.textFade,
      flexWrap: "wrap",
      gap: "20px",
    },
    agencyHighlight: {
      backgroundColor: "rgba(230, 163, 23, 0.1)", // Subtle gold background
      border: `1px solid ${colors.accent}`,
      padding: "10px 20px",
      borderRadius: "4px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "4px",
    },
    agencyText: {
      color: colors.white,
      fontSize: "12px",
      fontWeight: "600",
      letterSpacing: "0.5px",
    },
    agencyEmail: {
      color: colors.accent,
      fontSize: "11px",
      fontWeight: "700",
      textDecoration: "none",
      letterSpacing: "1px",
    },
  };

  const linkVariants = {
    initial: { x: 0, color: colors.textFade },
    hover: { x: 5, color: colors.accent, transition: { duration: 0.2 } },
  };

  return (
    <footer className="refined-footer" style={styles.footerWrapper}>
      <style>{`
        /* FIX FOR iOS BACKGROUND SCALING BUG */
        @supports (-webkit-touch-callout: none) {
          .refined-footer {
            background-attachment: scroll !important;
          }
        }

        .footer-cta-btn:hover {
          background-color: ${colors.white} !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        .footer-email-link:hover {
          color: ${colors.accent} !important;
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-brand-col {
            grid-column: span 2;
          }
          /* Disables parallax on mobile devices to prevent the zooming glitch */
          .refined-footer {
            background-attachment: scroll !important;
          }
        }
        @media (max-width: 768px) {
          .footer-cta {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 25px;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .footer-brand-col {
            grid-column: span 1;
            border-bottom: 1px solid ${colors.line};
            padding-bottom: 30px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
          }
          .agency-badge {
            align-items: center !important;
            width: 100%;
          }
        }
      `}</style>

      <div style={styles.container}>
        {/* TOP CTA SECTION */}
        <div className="footer-cta" style={styles.ctaSection}>
          <div>
            <span style={styles.ctaSubtitle}>Ready to Build?</span>
            <h2 style={styles.ctaTitle}>
              HAVE A <span style={{ color: colors.accent }}>MEGA PROJECT?</span>
            </h2>
          </div>

          <Link
            to="/contact"
            className="footer-cta-btn"
            style={styles.contactBtn}
          >
            GET IN TOUCH
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* MAIN LINKS GRID */}
        <div className="footer-grid" style={styles.grid}>
          {/* Brand Column */}
          <div className="footer-brand-col">
            <img src={logo} alt="Divya Enterprise" style={styles.logoImg} />
            <p style={styles.desc}>
              Pioneering infrastructure development. Delivering structural
              excellence, irrigation networks, and multi-crore public sector
              projects.
            </p>

            {/* Address */}
            <div style={styles.contactItem}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.accent}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0, marginTop: "2px" }}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>
                The Millennium, Office No. 808, 8th Floor,
                <br />
                Near Nana Mova Circle, 150- Feet Ring Road,
                <br />
                Rajkot-360004 [Gujarat]
              </span>
            </div>

            {/* Phone */}
            <div style={styles.contactItem}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.accent}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+91 96387 57366 / 72020 44744</span>
            </div>

            {/* Email */}
            <div style={styles.contactItem}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.accent}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0, marginTop: "2px" }}
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a
                href="mailto:divyaenterprise2015@gmail.com"
                className="footer-email-link"
                style={{
                  color: colors.textFade,
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                divyaenterprise2015@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={styles.colTitle}>Quick Links</h4>
            {footerLinks.quick.map((link, idx) => (
              <motion.div key={idx} initial="initial" whileHover="hover">
                <Link to={link.path} style={{ textDecoration: "none" }}>
                  <motion.span variants={linkVariants} style={styles.linkItem}>
                    {link.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={styles.colTitle}>Expertise</h4>
            {footerLinks.services.map((link, idx) => (
              <motion.div key={idx} initial="initial" whileHover="hover">
                <Link to={link.path} style={{ textDecoration: "none" }}>
                  <motion.span variants={linkVariants} style={styles.linkItem}>
                    {link.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={styles.colTitle}>Company</h4>
            {footerLinks.company.map((link, idx) => (
              <motion.div key={idx} initial="initial" whileHover="hover">
                <Link to={link.path} style={{ textDecoration: "none" }}>
                  <motion.span variants={linkVariants} style={styles.linkItem}>
                    {link.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & BLACKNOVA HIGHLIGHT */}
        <div className="footer-bottom-bar" style={styles.bottomBar}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div>
              {/* Dynamic Auto-Updating Year */}
              &copy; {new Date().getFullYear()} Divya Enterprise. All Rights
              Reserved.
            </div>
          </div>

          {/* BLACKNOVA TECH AGENCY HIGHLIGHT */}
          <div className="agency-badge" style={styles.agencyHighlight}>
            <span style={styles.agencyText}>
              Designed & Developed by{" "}
              <span style={{ color: colors.accent, fontWeight: "800" }}>
                BlackNova Tech
              </span>
            </span>
            <a
              href="mailto:contact.blacknovatech@gmail.com"
              style={styles.agencyEmail}
            >
              contact.blacknovatech@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;