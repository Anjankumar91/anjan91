import React from 'react';
import './Dashboards.css';
import { FaChartBar } from 'react-icons/fa';
import PremiumCard from './PremiumCard';
import kobeDashboard from '../assets/kobe-dashboard.png';
import kohliDashboard from '../assets/kohli-dashboard.png';
import MvsRDashboard from '../assets/M-vs-R-dashboard.png';


const Dashboards = () => {
    const dashboards = [
        {
            title: 'Kobe Bryant Performance Dashboard',
            description: 'Sports analytics dashboard analyzing Kobe Bryant’s NBA career performance from 1996–2016.',
            imgUrl: kobeDashboard, // Replace with real image
            link: 'https://github.com/Venkatanjan91/Kobe-Bryant-Career-Analysis-Using-PowerBI',
        },
        {
            title: 'Kohli Performance Dashboard',
            description: 'Sports analytics dashboard analyzing Kohli’s  CRICKET career performance from 2008-2022.',
            imgUrl: kohliDashboard,
            link: 'https://github.com/Venkatanjan91/Kohli-s-Career-Analysis-Using-PowerBI',
        },
        {
            title: 'Messi vs Ronaldo Overall Performance Dashboard',
            description: 'Sports analytics dashboard analyzing Messi vs Ronaldo career Performance.',
            imgUrl: MvsRDashboard,
            link: '#',
        },
    ];

    return (
        <section className="dashboards-section" id="dashboards">
            <h2 className="section-title">
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <FaChartBar color="#F2C811" /> Power BI Dashboards
                </span>
            </h2>
            <div className="dashboards-container">
                {dashboards.map((dash, index) => (
                    <PremiumCard className="dashboard-item" key={index}>
                        <div className="dashboard-img-wrapper">
                            <img src={dash.imgUrl} alt={dash.title} className="dashboard-img" />
                            <div className="dashboard-overlay">
                                <a href={dash.link} className="btn btn-primary">View Dashboard</a>
                            </div>
                        </div>
                        <div className="dashboard-info">
                            <h3 className="dashboard-title">{dash.title}</h3>
                            <p className="dashboard-desc">{dash.description}</p>
                        </div>
                    </PremiumCard>
                ))}
            </div>
        </section>
    );
};

export default Dashboards;





