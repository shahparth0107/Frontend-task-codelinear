import React from 'react';
import './CTABanner.css';

export default function CTABanner({ bgText = 'CB7' }) {
  return (
    <section className="cta-banner">
      <div className="cta-bg-text">{bgText}</div>
      <div className="cta-inner">
        <div className="cta-left">
          <h2 className="cta-title">Take the full advantage of<br />going paper-less now.</h2>
          <p className="cta-sub">
            CB7 helps your financial institution improve the client experience,<br />
            automate and optimize procedures, simplify banking operations
          </p>
        </div>
        <div className="cta-buttons">
          <button className="btn-outline">CONTACT US</button>
          <button className="btn-primary">REQUEST DEMO</button>
        </div>
      </div>
    </section>
  );
}
