import React from 'react';
import './Certificates.css';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import PremiumCard from './PremiumCard';

const Certificates = () => {
    const certificates = [
        {
            title: 'Google Cloud Data Analytics Certificate',
            issuer: 'Google Cloud',
            date: '2024',
            link: 'https://www.credly.com/badges/413811e7-c88c-4c74-9f6d-f8dd4e1e5b72',
        },
        {
            title: 'AI Python for Beginners',
            issuer: 'DeepLearning.AI',
            date: '2025',
            link: 'https://learn.deeplearning.ai/accomplishments/4c2d83fb-1ff6-46e7-84ec-3f26790a7753?usp=sharing',
        },
        {
            title: 'MySQL Data Analysis',
            issuer: 'Maven Analytics',
            date: '2025',
            link: 'https://certificates.mavenanalytics.io/25b1cf57-5f98-4de3-9a14-1e016feb55e3#acc.GLnQ8tW3',
        },
        {
            title: 'Career Essentials in Data Analysis by Microsoft and LinkedIn',
            issuer: 'Microsoft and LinkedIn',
            date: '2025',
            link: 'https://www.linkedin.com/learning/certificates/66e9b91caa5554f0979778cd13b28af2a2eca6a1979413ab04dca75fc951e928?trk=share_certificate',
        },
        {
            title: 'Career Essentials in Business Analysis by Microsoft and LinkedIn',
            issuer: 'Microsoft and LinkedIn',
            date: '2025',
            link: 'https://www.linkedin.com/learning/certificates/c742300b9eb64c8da5050fcd77798d2ebfc390705423af3a4579a3030dfbe2c9?trk=share_certificate',
        },
        {
            title: 'Become a Prompt Engineer',
            issuer: 'Educative',
            date: '2025',
            link: 'https://www.educative.io/verify-certificate/8q5JgjuBZJm2k1N9quEgj4An2k0rUg',
        },
        {
            title: 'Postman API Fundamentals Student Expert',
            issuer: 'Postman',
            date: '2025',
            link: 'https://badgr.com/public/assertions/PpV8sqzLTSiwrm3AZe-NkQ?identity__email=venkatanjan91%40gmail.com',
        },
        {
            title: 'Prompt Engineering & Programming with OpenAI',
            issuer: 'Columbia+',
            date: '2025',
            link: 'https://badges.plus.columbia.edu/26a42072-4d80-4f18-9023-d84f39255639#acc.6VnxGTNY',
        },
        {
            title: 'Google Cloud Computing Foundations Certificate',
            issuer: 'Google Cloud',
            date: '2024',
            link: 'https://www.credly.com/badges/4473b9fa-73f3-4c6a-923a-1e023f9c2f11',
        },
    ];

    return (
        <section className="certificates-section" id="certificates">
            <h2 className="section-title">Certifications</h2>
            <div className="certs-container">
                {certificates.map((cert, index) => (
                    <PremiumCard className="cert-card" key={index}>
                        <div className="cert-header">
                            <div className="cert-icon-box">
                                <FaAward />
                            </div>
                            <div className="cert-info">
                                <h3 className="cert-title">{cert.title}</h3>
                                <div className="cert-meta">
                                    <span className="cert-issuer">{cert.issuer}</span>
                                    <span className="cert-date" style={{ marginLeft: '10px', fontSize: '0.85rem', color: '#888' }}>
                                        {cert.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Description would go here if data existed */}
                        <a href={cert.link} className="cert-link-btn" target="_blank" rel="noopener noreferrer">
                            View Credential <FaExternalLinkAlt style={{ marginLeft: '8px', fontSize: '0.8em' }} />
                        </a>
                    </PremiumCard>
                ))}
            </div>
        </section>
    );
};

export default Certificates;



