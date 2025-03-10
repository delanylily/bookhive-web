import React from "react";
import { FaDownload } from "react-icons/fa";
import simulatorVideo from "../assets/simulator.mp4";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Discover Free Books Near You</h1>
            <p className="hero-description">
              BookHive is the ultimate free book exchange app that helps you
              discover new reads for free!
            </p>
            <div className="hero-cta">
              <a href="#download" className="btn btn-hero">
                <FaDownload /> Download Now
              </a>
            </div>
          </div>

          <div className="hero-video">
            <div className="video-container">
              <video autoPlay loop muted playsInline className="app-video">
                <source src={simulatorVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
