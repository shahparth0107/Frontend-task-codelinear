import React from 'react';
import './CoreBanking.css';
import amlDashboard from '../assets/images/aml-dashboard.png';
import kycDashboard from '../assets/images/kyc-dashboard.png';

const features = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
];

export default function CoreBanking() {
  return (
    <>
      {/* ── Frame 12: Cloud Banking ──
          Text LEFT, Dashboard bleeds from RIGHT edge */}
      <section className="cloud-banking">
        <div className="cb-bg-text">CB7</div>

        <div className="cb-content">
          <h2 className="cb-title">A complete cloud-based<br />core banking.</h2>
          <p className="cb-sub">Faster time to market with our cloud-based<br />core banking services</p>
          <button className="btn-primary-blue">REQUEST DEMO</button>
          <div className="learn-more-link">
            <span>LEARN MORE</span>
            <span>→</span>
          </div>
        </div>

        {/* Dashboard: right-bleed laptop frame — left border + top border only */}
        <div className="cb-laptop-outer">
          <div className="cb-laptop-frame">
            <div className="cb-screen">
              <img src={amlDashboard} alt="AML Dashboard" />
            </div>
          </div>
          <div className="cb-laptop-shelf" />
        </div>
      </section>

      {/* ── Frame 80: Features ──
          Laptop LEFT (partially visible, bleeds from left),
          Text content RIGHT */}
      <section className="features-section">

        {/* Left: laptop partially off-screen */}
        <div className="feat-laptop-outer">
          <div className="feat-laptop-frame">
            <div className="feat-screen">
              <img src={kycDashboard} alt="KYC Dashboard" />
            </div>
          </div>
          <div className="feat-laptop-shelf" />
        </div>

        {/* Right: title + feature list */}
        <div className="features-content">
          <h3 className="features-title">
            Run a more efficient, flexible, and digitally
            connected corebanking system
          </h3>
          <div className="features-list-wrap">
            <p className="features-list-label">What you will get:</p>
            <div className="features-grid">
              <div className="features-col">
                {features.slice(0, 5).map((f, i) => (
                  <div className="feature-item" key={i}>
                    <div className="check-icon">
                      <div className="check-circle" />
                      <span className="check-mark">✓</span>
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="features-col">
                {features.slice(5).map((f, i) => (
                  <div className="feature-item" key={i}>
                    <div className="check-icon">
                      <div className="check-circle" />
                      <span className="check-mark">✓</span>
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
