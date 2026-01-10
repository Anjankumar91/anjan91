import React from 'react';
import './JobSimulations.css';
import { FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';
import PremiumCard from './PremiumCard';

const JobSimulations = () => {
    const jobSimulations = [
        {
            title: 'GenAI Powered Data Analytics',
            issuer: 'Forage (TATA)',
            date: '2025',
            description: 'CCompleted a job simulation involving AI-powered data analytics and strategy development for the Financial Services team at Tata iQ.',
            skills: ['Python', 'Data Visualization', 'AI Analytics','Exploratory Data Analysis'],
        },
        {
            title: 'Machine Learning',
            issuer: 'SmartBridge Educational Services Pvt.Ltd.',
            date: '2024',
            description: 'Developed a Python-based ML model to predict flight delays using Scikit-learn.',
            skills: ['Python', 'Scikit-learn', 'Feature Engineering'],
            link: '#',
        },
    ];

    return (
        <section className="job-sim-section" id="job-simulations">
            <h2 className="section-title">Internships</h2>
            <div className="job-sim-container">
                {jobSimulations.map((sim, index) => (
                    <PremiumCard className="job-sim-card" key={index}>
                        <div className="job-sim-header">
                            <div className="icon-box">
                                <FaLaptopCode />
                            </div>
                            <div>
                                <h3 className="job-sim-title">{sim.title}</h3>
                                <span className="job-sim-issuer">{sim.issuer} | {sim.date}</span>
                            </div>
                        </div>
                        <p className="job-sim-desc">{sim.description}</p>
                        <div className="job-sim-skills">
                            {sim.skills.map((skill, idx) => (
                                <span key={idx} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </PremiumCard>
                ))}
            </div>
        </section>
    );
};

export default JobSimulations;


