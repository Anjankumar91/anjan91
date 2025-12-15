import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import JobSimulations from './components/JobSimulations';
import Certificates from './components/Certificates';
import Dashboards from './components/Dashboards';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

import SmoothScroll from './components/SmoothScroll';
import LandingOverlay from './components/LandingOverlay';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [loadMainScene, setLoadMainScene] = useState(false);

  /* Manual entry only as requested
  useEffect(() => {
    // Hide intro after 7 seconds (allow time for 3D model to load)
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []); 
  */

  return (
    <div className="app-container">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setLoadMainScene(true)}
      >
        {showIntro && <LandingOverlay key="intro" onSkip={() => setShowIntro(false)} />}
      </AnimatePresence>

      {/* Defer SmoothScroll until intro is done to prioritize robot scene performance */}
      {loadMainScene && <SmoothScroll />}

      {/* Deferred loading: Only load heavy 3D background AFTER intro is gone */}
      {loadMainScene && (
        <div className="global-spline-bg" style={{ animation: 'fadeIn 2s ease-in-out' }}>
          <iframe
            src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV"
            frameBorder="0"
            width="100%"
            height="100%"
            title="Global Spline Background"
            loading="lazy" // Lazy load main background
          ></iframe>
        </div>
      )}

      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <JobSimulations />
        <Dashboards />
        <Certificates />
        <Achievements />
        <Resume />
        <Contact />
        {/* Other sections */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
