import React, { useState } from "react";
// Change to "/homevideo.mp4" if your video is in the public folder!
import bgVideo from "../assets/homevideo.mp4";

const HeroSection = () => {
  // Track if the video has loaded enough to play
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="hero-container">
      {/* INTERNAL CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&display=swap');

          .hero-container {
            position: relative;
            width: 100%;
            margin-top: 60px; 
            
            /* THE FIX FOR DESKTOP: Adding a min-height stops the extreme "zoom/crop" effect on wide screens */
            min-height: 700px;
            height: calc(100vh - 60px); 
            
            /* SCROLLBAR FIXES */
            max-width: 100vw;
            box-sizing: border-box;
            overflow: hidden; 
            
            font-family: 'Montserrat', sans-serif;
            background-color: #000;
          }

          /* FULL SCREEN VIDEO */
          .hero-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            
            /* THE FIX FOR VIDEO POSITIONING */
            object-fit: cover; 
            object-position: center center; /* This locks the camera to the exact middle of the video */
            
            z-index: 1;
            /* Smoothly fade video in when loaded */
            opacity: ${videoLoaded ? 1 : 0};
            transition: opacity 0.5s ease-in-out;
          }

          /* SMALL WHITE TAG FLOATING OFF THE EDGE */
          .white-tag {
            position: absolute;
            bottom: 20px;    
            left: 20px;      
            z-index: 10;
            background: rgba(255, 255, 255, 0.95); 
            backdrop-filter: blur(8px); 
            
            padding: 10px 20px; 
            border-radius: 12px; 
            box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2); 
            
            border-left: 5px solid #62579c;
            
            opacity: 0;
            transform: translateY(20px);
            /* Only animate the tag when video is ready */
            animation: ${videoLoaded ? "slideUpTag 0.8s ease-out 0.2s forwards" : "none"};
          }

          @keyframes slideUpTag {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          /* Tiny subtitle */
          .tag-subtitle {
            margin: 0 0 2px 0;
            font-size: 0.7rem; 
            color: #555555; 
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 500;
          }

          /* Small, clean title */
          .tag-title {
            margin: 0;
            font-size: clamp(1.1rem, 3vw, 1.4rem); 
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            line-height: 1.1;
          }

          .gradient-text {
            background: linear-gradient(to right, #957ab4, #62579c, #353378);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            display: inline-block;
          }

          /* PREMIUM CONSTRUCTION LOADER BRACKET */
          .construction-loader {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #0b0b0f;
            z-index: 100;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            pointer-events: none;
            opacity: ${videoLoaded ? 0 : 1};
            transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          }

          .loader-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
          }

          /* Elegant structural Blueprint-style loader circle */
          .building-ring {
            width: 60px;
            height: 60px;
            border: 3px solid rgba(149, 122, 180, 0.1);
            border-top: 3px solid #62579c;
            border-right: 3px solid #957ab4;
            border-radius: 50%;
            animation: spinStructural 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          }

          .loader-text {
            color: #ffffff;
            font-size: 1.2rem;
            font-weight: 800;
            letter-spacing: 4px;
            text-transform: uppercase;
            margin: 0;
            animation: pulseText 1.8s ease-in-out infinite;
          }

          @keyframes spinStructural {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes pulseText {
            0%, 100% { opacity: 0.6; transform: scale(0.98); }
            50% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>

      {/* NEW: PREMIUM CONSTRUCTION LOADER */}
      <div className="construction-loader">
        <div className="loader-content">
          <div className="building-ring"></div>
          <h2 className="loader-text">Divya Enterprise</h2>
        </div>
      </div>

      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
        onCanPlay={() => setVideoLoaded(true)} // Tells React the moment video data is ready
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* COMPACT FLOATING TAG */}
      <div className="white-tag">
        <p className="tag-subtitle">Welcome to</p>
        <h1 className="tag-title">
          <span className="gradient-text">Divya Enterprise</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
