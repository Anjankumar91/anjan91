import React from 'react';

const PremiumCard = ({ children, className = '' }) => {
    return (
        <div className={`premium-card ${className}`}>
            {/* Rotating Background Effect */}
            <div style={{
                overflow: 'hidden',
                pointerEvents: 'none',
                position: 'absolute',
                zIndex: 0,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'calc(100% + 2px)',
                height: 'calc(100% + 2px)',
                backgroundImage: 'linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)',
                borderRadius: '1rem',
                opacity: 0.05 // Subtle fallback
            }}>
                <div className="premium-rotator"></div>
            </div>

            <div className="premium-content">
                {children}
            </div>
        </div>
    );
};

export default PremiumCard;
