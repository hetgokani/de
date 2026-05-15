import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Timeline from "../components/Timeline";
import Management from "../components/Management";
import ProjectPortfolio from "../components/ProjectPortfolio";
import Services from "../components/Services";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Timeline />
      <Management />
      <ProjectPortfolio />
      <Services />
      <Footer />
    </>
  );
};

export default HomePage;
