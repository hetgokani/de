import React from "react";
// Change to "/homevideo.mp4" if your video is in the public folder!
import bgVideo from "../assets/homevideo.mp4";

const HeroSection = () => {
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
            animation: slideUpTag 0.8s ease-out 0.5s forwards;
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
        `}
      </style>

      {/* BACKGROUND VIDEO */}
      <video autoPlay loop muted playsInline className="hero-video">
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
