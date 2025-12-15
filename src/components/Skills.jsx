import React from 'react';
import './Skills.css';
import { FaReact, FaJs, FaHtml5, FaCss3, FaPython, FaGitAlt, FaNodeJs, FaDatabase, FaChartBar, FaChartLine } from 'react-icons/fa';
import { SiTailwindcss, SiFigma } from 'react-icons/si';
import PremiumCard from './PremiumCard';

const Skills = () => {
    const skillsConfig = [
        {
            category: 'Data Analysis',
            items: [
                { name: 'Power BI', icon: <FaChartBar /> },
                { name: 'Tableau', icon: <FaChartLine /> },
                { name: 'Python', icon: <FaPython /> },
                { name: 'SQL', icon: <FaDatabase /> },
                { name: 'Excel', icon: <FaChartBar /> },
                { name: 'R', icon: <FaChartLine /> },
                { name: 'Statistical Analysis', icon: <FaChartBar /> },
            ],
        },
        {
            category: 'Business Intelligence',
            items: [
                { name: 'Data Modeling', icon: <FaDatabase /> },
                { name: 'DAX', icon: <FaChartBar /> },
                { name: 'Power Query', icon: <FaChartLine /> },
            ]
        },
        {
            category: 'Data Engineering',
            items: [
                { name: 'ETL', icon: <FaDatabase /> },
                { name: 'Data Warehousing', icon: <FaDatabase /> },
                { name: 'Azure', icon: <FaDatabase /> },
                { name: 'Database Design', icon: <FaDatabase /> },
            ]
        },
        {
            category: 'Tools & Technologies',
            items: [
                { name: 'Git', icon: <FaGitAlt /> },
                { name: 'Jupyter', icon: <FaPython /> },
                { name: 'VS Code', icon: <FaChartBar /> },
                { name: 'Microsoft Office', icon: <FaChartBar /> },
            ],
        },
        {
            category: 'Web Development',
            items: [
                { name: 'React', icon: <FaReact /> },
                { name: 'JavaScript', icon: <FaJs /> },
                { name: 'HTML5', icon: <FaHtml5 /> },
                { name: 'CSS3', icon: <FaCss3 /> },
                { name: 'Tailwind', icon: <SiTailwindcss /> },
                { name: 'Node.js', icon: <FaNodeJs /> },
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
