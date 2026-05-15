import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.webp";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
  });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { width } = useWindowSize();

  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const isMobile = width <= 998;
  const isNarrowDesktop = width > 998 && width <= 1300; // Adjusted breakpoint for smaller text

  // DIVYA Brand Colors
  const colors = {
    primary: "#1A194D", // Deep Navy
    white: "#FFFFFF",
    accent: "#E6A317", // Signature Gold
    line: "rgba(26, 25, 77, 0.08)",
    borderLine: "rgba(26, 25, 77, 0.15)", // Slightly darker for visible borders
    textDark: "#333333",
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "HOME", path: "/" },
    {
      name: "ABOUT US",
      path: "/about",
      dropdown: [
        { name: "Who We Are", path: "/about" },
        { name: "Our Mission", path: "/our-mission" },
        { name: "Our Vision", path: "/our-vision" },
        { name: "Our Journey", path: "/our-journey" },
        { name: "Board of Directors", path: "/boardofdirectors" },
      ],
    },
    { name: "SERVICES", path: "/services" },
    {
      name: "PROJECTS",
      path: "/completed-projects",
      dropdown: [
        { name: "Completed Projects", path: "/completed-projects" },
        { name: "Ongoing Projects", path: "/ongoing-projects" },
      ],
    },
    { name: "INVESTOR", path: "/investor" },
    { name: "CAREER", path: "/career" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CSR", path: "/csr" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const styles = {
    // --- MAIN HEADER BAR ---
    header: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 9999,
      backgroundColor: colors.white,
      boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.06)" : "none",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      fontFamily: '"Montserrat", sans-serif',
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "10px 20px" : isNarrowDesktop ? "10px 2%" : "10px 5%",
      maxWidth: "100%",
      width: "100%",
      height: isMobile ? "70px" : "90px",
      margin: "0 auto",
      borderBottom: isScrolled ? "none" : `1px solid ${colors.line}`,
      boxSizing: "border-box",
      position: "relative",
      zIndex: 10001,
      backgroundColor: colors.white,
    },
    logoWrapper: {
      display: "flex",
      alignItems: "center",
      flexShrink: 0,
    },
    logoImage: {
      height: isMobile ? "35px" : isNarrowDesktop ? "45px" : "55px",
      width: "auto",
      objectFit: "contain",
      transition: "height 0.3s ease",
    },

    // --- DESKTOP NAV ---
    desktopNav: {
      display: isMobile ? "none" : "flex",
      alignItems: "center",
      height: "100%",
    },
    navItemContainer: (index) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: "30px", // Keeps the vertical bar from stretching too tall
      borderRight:
        index === navLinks.length - 1
          ? "none"
          : `1px solid ${colors.borderLine}`,
    }),
    navItem: {
      fontSize: width <= 1300 ? "10.5px" : "12px", // Smaller text as requested
      fontWeight: "800",
      color: colors.primary,
      textDecoration: "none",
      letterSpacing: "1.2px",
      padding: width <= 1300 ? "0 12px" : "0 18px",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      height: "100%",
      cursor: "pointer",
    },
    desktopDropdown: {
      position: "absolute",
      top: "calc(100% + 20px)", // Pushed slightly down from the link
      left: "0",
      backgroundColor: colors.white,
      boxShadow: "0 15px 40px rgba(26, 25, 77, 0.08)",
      padding: "15px 0",
      minWidth: "220px",
      borderRadius: "0 0 8px 8px",
      border: `1px solid ${colors.line}`,
      borderTop: `3px solid ${colors.accent}`,
    },
    activeLine: {
      position: "absolute",
      bottom: "-15px",
      left: "20px",
      right: "20px",
      height: "3px",
      backgroundColor: colors.accent,
      borderRadius: "2px",
    },

    // --- HAMBURGER BUTTON (Fixed anti-clipping logic) ---
    hamburgerBtn: {
      display: isMobile ? "block" : "none",
      width: "30px",
      height: "22px",
      background: "transparent",
      border: "none",
      zIndex: 10002,
      cursor: "pointer",
      padding: 0,
      position: "relative", // Required for absolute positioned lines
    },

    // --- MOBILE MENU OVERLAY ---
    mobileMenuOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      zIndex: 10000,
      display: "flex",
      flexDirection: "column",
      paddingTop: "70px",
      backgroundColor: colors.white,
      backgroundImage: `linear-gradient(${colors.line} 1px, transparent 1px), linear-gradient(90deg, ${colors.line} 1px, transparent 1px)`,
      backgroundSize: "60px 60px",
      overflowY: "auto",
      overflowX: "hidden",
      fontFamily: '"Montserrat", sans-serif',
    },
    mobileItemWrapper: (isOpen) => ({
      backgroundColor: isOpen ? "rgba(26, 25, 77, 0.02)" : "transparent",
      transition: "background-color 0.3s ease",
      width: "100%",
      borderBottom: `1px solid ${colors.line}`,
    }),
    mobileNavItem: {
      padding: "20px 25px",
      fontSize: "1.15rem",
      fontWeight: "800",
      color: colors.primary,
      textTransform: "uppercase",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    mobileDropdown: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      padding: "10px 25px 25px 60px",
      backgroundColor: "transparent",
    },
  };

  const Chevron = ({ isOpen, color = "currentColor", size = 12 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: "transform 0.3s ease",
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  return (
    <header style={styles.header}>
      {/* HEADER CONTAINER */}
      <div style={styles.container}>
        <div style={styles.logoWrapper}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={logo} alt="DIVYA Logo" style={styles.logoImage} />
          </Link>
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav style={styles.desktopNav}>
          {navLinks.map((link, index) => {
            const isPageActive =
              currentPath === link.path ||
              (link.dropdown &&
                link.dropdown.some((sub) => sub.path === currentPath));

            return (
              <div
                key={link.name}
                style={styles.navItemContainer(index)}
                onMouseEnter={() => setHoveredItem(link.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link to={link.path} style={styles.navItem}>
                  {link.name}
                  {link.dropdown && (
                    <Chevron
                      isOpen={hoveredItem === link.name}
                      size={10}
                      color={colors.primary}
                    />
                  )}
                  <AnimatePresence>
                    {(hoveredItem === link.name ||
                      (!hoveredItem && isPageActive)) && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        style={styles.activeLine}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>

                <AnimatePresence>
                  {link.dropdown && hoveredItem === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      style={styles.desktopDropdown}
                    >
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          style={{
                            padding: "10px 25px",
                            fontSize: "0.85rem",
                            color: colors.textDark,
                            textDecoration: "none",
                            display: "block",
                            fontWeight: "600",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = colors.accent;
                            e.target.style.paddingLeft = "30px";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = colors.textDark;
                            e.target.style.paddingLeft = "25px";
                          }}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* --- HAMBURGER MENU (Fixed clipping) --- */}
        <button
          style={styles.hamburgerBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Top Line */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "2.5px",
              background: colors.primary,
              borderRadius: "2px",
              top: isMobileMenuOpen ? "50%" : "0%",
              left: 0,
              transform: isMobileMenuOpen
                ? "translateY(-50%) rotate(45deg)"
                : "translateY(0) rotate(0deg)",
              transition: "all 0.3s ease",
            }}
          />
          {/* Middle Line */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "2.5px",
              background: colors.primary,
              borderRadius: "2px",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              opacity: isMobileMenuOpen ? 0 : 1,
              transition: "all 0.3s ease",
            }}
          />
          {/* Bottom Line */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "2.5px",
              background: colors.primary,
              borderRadius: "2px",
              bottom: isMobileMenuOpen ? "50%" : "0%",
              left: 0,
              transform: isMobileMenuOpen
                ? "translateY(50%) rotate(-45deg)"
                : "translateY(0) rotate(0deg)",
              transition: "all 0.3s ease",
            }}
          />
        </button>
      </div>

      {/* --- MOBILE OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            style={styles.mobileMenuOverlay}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          >
            {/* Giant Background Watermark */}
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(-90deg)",
                fontSize: "25vw",
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

            <div
              style={{
                width: "100%",
                position: "relative",
                zIndex: 1,
                paddingBottom: "60px",
              }}
            >
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  style={styles.mobileItemWrapper(activeDropdown === link.name)}
                >
                  <div
                    style={styles.mobileNavItem}
                    onClick={() => {
                      if (link.dropdown) {
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name,
                        );
                      } else {
                        navigate(link.path);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <span
                        style={{
                          color: colors.accent,
                          fontSize: "0.85rem",
                          fontWeight: "800",
                          marginRight: "20px",
                          fontFamily: "monospace",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {link.name}
                    </span>
                    {link.dropdown && (
                      <Chevron
                        isOpen={activeDropdown === link.name}
                        size={16}
                        color={colors.primary}
                      />
                    )}
                  </div>

                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={styles.mobileDropdown}>
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              style={{
                                fontSize: "1rem",
                                color: colors.textDark,
                                fontWeight: "600",
                                textDecoration: "none",
                                padding: "8px 0",
                              }}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
