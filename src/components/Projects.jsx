import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import PremiumCard from './PremiumCard';

const Projects = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'A brief description of project one. Detailed insights into what it solves and technologies used.',
            tech: ['React', 'Node.js', 'MongoDB'],
            github: '#',
            demo: '#',
        },
        {
            title: 'Project Two',
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
