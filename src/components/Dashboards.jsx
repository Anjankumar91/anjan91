import React from 'react';
import './Dashboards.css';
import { FaChartBar } from 'react-icons/fa';
import PremiumCard from './PremiumCard';
import kobeDashboard from '../assets/kobe-dashboard.png';
import kohliDashboard from '../assets/kohli-dashboard.png';
import MvsRDashboard from '../assets/M-vs-R-dashboard.png';
import AdidasDashboard from '../assets/adidas-dashboard.png';
import WalmartDashboard from '../assets/walmart-dashboard.png';
import InventoryDashboard from '../assets/inventory-dashboard.png';

const Dashboards = () => {
    const dashboards = [
        {
            title: 'Adidas – Sales & Profitability Dashboard',
            description: 'Analyzing Adidas sales, profit margins, and growth trends across products and regions.',
            imgUrl: AdidasDashboard, // Replace with real image
            link: 'https://github.com/Venkatanjan91/Adidas-Sales-Dashboard-Using-PowerBI',
        },
        {
            title: ' Walmart – Retail Performance Dashboard',
            description: 'Evaluating Walmart store performance and the impact of economic and seasonal factors on sales.',
            imgUrl: WalmartDashboard, // Replace with real image
            link: 'https://github.com/Venkatanjan91/Walmart-Sales-Dashboard-Using-PowerBI',
        },
        {
            title: 'Inventory & Supply Chain Management Dashboard',
            description: 'Assessing inventory flow, lead times, and supply chain efficiency to identify operational bottlenecks.',
            imgUrl: InventoryDashboard, // Replace with real image
            link: 'https://github.com/Venkatanjan91/Inventory-Supply-Chain-Management-Analysis-Using-PowerBI',
        },
        {
            title: 'Messi vs Ronaldo Overall Performance Dashboard',
            description: 'Sports analytics dashboard analyzing Messi vs Ronaldo career Performance.',
            imgUrl: MvsRDashboard,
            link: 'https://github.com/Venkatanjan91/Messi-vs-Ronaldo-Analysis-Using-PowerBI',
        },
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







