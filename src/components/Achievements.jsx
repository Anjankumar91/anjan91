import React from 'react';
import './Achievements.css';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';
import PremiumCard from './PremiumCard';

const Achievements = () => {
    const achievements = [
        {
            title: 'Champion Milestone',
            organization: 'Google Cloud Arcade Facilitator 2024',
            description: 'Achieved the champion milestone for outstanding performance in the Google Cloud Arcade program.',
            icon: <FaTrophy color="#FFD700" />,
        },
        {
            title: 'Startup Prototype Submission',
            organization: 'Scaler x Google for Startups',
            description: 'Submitted my first startup prototype built using a no-code AI builder as part of the Scaler program in collaboration with Google for Startups.',
            icon: <FaMedal color="#C0C0C0" />,
        },
        {
            title: 'AI & No-Code Exploration',
            organization: 'Self-Driven',
            description: 'Regularly experimenting with AI tools and various no-code builders to create projects, automate tasks, and improve productivity.',
            icon: <FaAward color="#CD7F32" />,
        },
    ];

    return (
        <section className="achievements-section" id="achievements">
            <h2 className="section-title">Achievements</h2>
            <div className="achievements-container">
                {achievements.map((item, index) => (
                    <PremiumCard className="achievement-card" key={index}>
                        <div className="achievement-icon">
                            {item.icon}
                        </div>
                        <div className="achievement-content">
                            <h3 className="achievement-title">{item.title}</h3>
                            <p className="achievement-org">{item.organization}</p>
                            <p className="achievement-desc">{item.description}</p>
                        </div>
                    </PremiumCard>
                ))}
            </div>
        </section>
    );
};

export default Achievements;

