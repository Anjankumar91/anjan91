import React from 'react';
import './Hero.css';
// import { FaDownload } from 'react-icons/fa'; // For Resume button

const Hero = () => {
    return (
        <div className="hero-container" id="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Hi, I'm <span className="highlight-text">Venkat Anjan Kumar</span>
                </h1>
                {/* <h1 className="hero-title">
                    Hi, I'm <span className="highlight-text">Your Name</span>
                </h1> */}
                <h2 className="hero-subtitle">AI & Data Solutions Builder</h2>
                <p className="hero-description">
                    Transforms data into actionable insights and builds AI-assisted tools and dashboards that solve real problems.  
     Delivers practical, data-driven solutions using Power BI, AI tools, and no-code platforms.
                </p>
                <div className="hero-btns">
                    <a href="#projects" className="btn btn-primary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Contact Me
                    </a>
                </div>
            </div>
            {/* <div className="hero-img">
         <img src={ProfileImg} alt="Profile" />
      </div> */}
            {/* <div className="hero-img">
         <img src={ProfileImg} alt="Profile" />
      </div> */}
            {/* Global background handles this now - removed for performance */}
        </div>
    );
};

export default Hero;

