import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import PremiumCard from './PremiumCard';

const Projects = () => {
    const projects = [
        {
            title: 'BLINKIT Analysis',
            description: 'A brief description of project one. Detailed insights into what it solves and technologies used.',
            tech: ['Python', 'Node.js', 'MongoDB'],
            github: '#',
            demo: '#',
        },
        {
            title: 'Walmart-Sales-Analysis-Using-MYSQL',
            description: 'Another amazing project. Focusing on data visualization and user interaction.',
            tech: ['Python', 'Pandas', 'Streamlit'],
            github: 'https://github.com/Venkatanjan91/Walmart-Sales-Analysis-Using-MYSQL',
            demo: '#',
        },
        {
            title: 'Sales-Customer-Analytics-Dashboard-Using-Excel',
            description: 'Another amazing project. Focusing on data visualization and user interaction.',
            tech: ['Excel', 'Pivot Table', 'KPIs','Data Cleaning & Preparation','Data Visualization'],
            github: 'https://github.com/Venkatanjan91/Sales-Customer-Analytics-Dashboard-Using-Excel',
            demo: '#',
        },
        {
            title: 'UBER-Analysis-Using-PowerBI',
            description: 'Another amazing project. Focusing on data visualization and user interaction.',
            tech: ['Power BI', 'DAX', 'Data Modeling','Data Visualization'],
            github: 'https://github.com/Venkatanjan91/UBER-Analysis-Using-PowerBI',
            demo: '#',
        },
        {
            title: 'Walmart-Sales-Analysis-Using-MYSQL',
            description: 'Another amazing project. Focusing on data visualization and user interaction.',
            tech: ['Python', 'Pandas', 'Streamlit'],
            github: '#',
            demo: '#',
        },
        // Add more projects
    ];

    return (
        <section className="projects-section" id="projects">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <PremiumCard className="project-card" key={index}>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-tech">
                            {project.tech.map((tech, idx) => (
                                <span key={idx} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /> Code</a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Demo</a>
                        </div>
                    </PremiumCard>
                ))}
            </div>
        </section>
    );
};

export default Projects;

