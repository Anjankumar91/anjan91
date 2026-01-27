import React from 'react';
import './Skills.css';
import { FaPython, FaDatabase, FaChartBar, FaProjectDiagram, FaBriefcase, FaUsers, FaSearch, FaChartLine } from 'react-icons/fa';
import { SiTailwindcss, SiFigma } from 'react-icons/si';
import PremiumCard from './PremiumCard';

const Skills = () => {
    const skillsConfig = [
        {
            category: 'Data Analysis',
            items: [
                { name: 'Excel', icon: <FaChartBar /> },
                { name: 'SQL', icon: <FaChartLine /> },
                { name: 'Python', icon: <FaPython /> },
                { name: 'EExploratory Data Analysis (EDA)', icon: <FaDatabase /> },
                { name: 'Statistical Analysis', icon: <FaChartBar /> },
            ],
        },
        {
            category: 'Business Intelligence',
            items: [
                { name: 'Power BI', icon: <FaDatabase /> },
                { name: 'Dashboard Development', icon: <FaChartBar /> },
                { name: 'Data Modeling ', icon: <FaChartLine /> },
                { name: 'Power Query', icon: <FaChartLine /> },
                { name: 'DAX', icon: <FaChartLine /> },
            ]
        },
        {
            category: 'Business Analysis',
            items: [
                { name: 'Requirement Gathering', icon: <FaBriefcase /> },
                { name: 'Stakeholder Management', icon: <FaUsers /> },
                { name: 'Business Process Mapping', icon: <FaProjectDiagram /> },
                { name: 'Gap Analysis', icon: <FaSearch /> },
                { name: 'KPI Definition', icon: <FaChartLine /> },
            ]
        },
        {
            category: 'Data Fundamentals',
            items: [
                { name: 'Data Cleaning', icon: <FaDatabase /> },
                { name: 'ETL Concepts', icon: <FaDatabase /> },
                { name: 'Relational Databases', icon: <FaDatabase /> },
                { name: 'Data Warehousing', icon: <FaDatabase /> },
            ]
        },
        {
            category: 'Tools & Technologies (Including AI)',
            items: [
                { name: 'Microsoft Excel', icon: <FaGitAlt /> },
                { name: 'Power BI Desktop', icon: <FaPython /> },
                { name: 'Google Colab', icon: <FaChartBar /> },
                { name: 'MYSQL', icon: <FaChartBar /> },
                { name: 'Julius.ai', icon: <FaChartBar /> },
                { name: 'Chat-GPT', icon: <FaChartBar /> },
                { name: 'Gemini', icon: <FaChartBar /> },
            ],
        },
    ];

    return (
        <section className="skills-section" id="skills">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="skills-subtitle">Here are the technologies and tools I work with to turn data into insights</p>

            <div className="skills-container">
                {skillsConfig.map((category, index) => (
                    <PremiumCard className="skills-category" key={index}>
                        <h3 className="category-title">{category.category}</h3>
                        <div className="skills-pills">
                            {category.items.map((skill, idx) => (
                                <div className="skill-pill" key={idx}>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </PremiumCard>
                ))}
            </div>
        </section>
    );
};

export default Skills;





