import React from 'react';
import './Solutions.css';
import iconCoreBanking from '../assets/images/icon-core-banking.png';
import iconDigitalBanking from '../assets/images/icon-digital-banking.png';
import iconOpenBanking from '../assets/images/icon-open-banking.png';
import iconLoan from '../assets/images/icon-loan.png';
import iconLoanMgmt from '../assets/images/icon-loan-mgmt.png';

const solutions = [
  {
    icon: iconCoreBanking,
    title: 'Core Banking CB7',
    desc: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
  },
  {
    icon: iconDigitalBanking,
    title: 'Digital Banking N7',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
  {
    icon: iconOpenBanking,
    title: 'Open Banking',
    desc: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
  },
  {
    icon: iconLoan,
    title: 'Loan Origination System',
    badge: 'NBFC',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
  {
    icon: iconLoanMgmt,
    title: 'Loan Management System',
    badge: 'NBFC',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
];

export default function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions-glow" />

      <div className="solutions-left">
        <h2 className="solutions-heading">
          All of our solutions are<br />tailor-made to your needs
        </h2>
        <button className="btn-outline-white">REQUEST DEMO</button>
      </div>

      <div className="solutions-grid">
        {solutions.map((s, i) => (
          <div className="solution-card" key={i}>
            <div className="solution-header">
              <img src={s.icon} alt={s.title} className="solution-icon-img" />
              {s.badge && <span className="solution-badge">{s.badge}</span>}
            </div>
            <div className="solution-body">
              <h3 className="solution-title">{s.title}</h3>
              <p className="solution-desc">{s.desc}</p>
              <div className="learn-more">
                <span>LEARN MORE</span>
                <span className="arrow">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}





