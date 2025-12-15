import { motion } from 'framer-motion';
import './LandingOverlay.css';

const LandingOverlay = ({ onSkip }) => {
    // Debug log
    console.log("LandingOverlay mounted");
    return (
        <motion.div
            className="landing-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
        >
            <button
                onClick={onSkip}
                className="premium-enter-btn"
            >
                ENTER PORTFOLIO
            </button>

            <iframe
                src="https://my.spline.design/nexbotrobotcharacterconcept-kLwr8f6hgKgaa5gmU6oB00Si"
                frameBorder="0"
                width="100%"
                height="100%"
                id="aura-spline"
                title="Intro Scene"
                loading="eager"
                style={{ width: '100%', height: '100%', border: 'none' }}
            ></iframe>
        </motion.div>
    );
};

export default LandingOverlay;
