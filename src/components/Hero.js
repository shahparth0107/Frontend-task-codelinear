import React from 'react';
import './Hero.css';
import heroPerson from '../assets/images/hero-person.png';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />

      {/* Left content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            The new foundation<br />of modern banking
          </h1>
          <p className="hero-sub">
            We drive innovation and growth, provide seamless<br />
            customer experience and operational excellence
          </p>
        </div>
        <div className="hero-ctas">
          <button className="btn-primary">REQUEST DEMO</button>
          <button className="btn-outline">CONTACT US</button>
        </div>
      </div>

      {/* Right: stacked mockup layout */}
      <div className="hero-visual">
        {/* Background person photo */}
        <div className="hero-photo-wrap">
          <img src={heroPerson} alt="banking user" className="hero-photo" />
        </div>

        {/* Balance card — top right, overlapping photo */}
        <div className="overlay-card card-balance">
          <div className="card-header">
            <div className="card-avatar">
              <div className="avatar-circle" />
            </div>
            <div className="card-user">
              <span className="card-name">Toni Kross</span>
              <span className="card-greeting">Good Morning</span>
            </div>
            <div className="card-bell">🔔</div>
          </div>
          <div className="card-balance-section">
            <p className="card-label">Total balance</p>
            <p className="card-amount">$42,295.00 USD</p>
          </div>
          <div className="card-divider" />
          <div className="card-actions">
            <div className="card-action">
              <span className="action-icon">↑⊙</span>
              <span>Fund Transfer</span>
            </div>
            <div className="card-action">
              <span className="action-icon">⊕$</span>
              <span>Add Money</span>
            </div>
            <div className="card-action">
              <span className="action-icon">⊞</span>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Activity card — bottom left, overlapping photo */}
        <div className="overlay-card card-activity">
          <p className="activity-title">Recent activity</p>
          <div className="activity-tabs">
            <span className="tab">This Day</span>
            <span className="tab active">This Week</span>
            <span className="tab">This Month</span>
            <span className="tab">6 Month</span>
          </div>
          <div className="activity-row">
            <div className="activity-icon">↗</div>
            <div className="activity-info">
              <p className="activity-name"><strong>To Jin</strong> · Work</p>
              <p className="activity-date">12 jun 2022</p>
            </div>
            <p className="activity-amount">-$59</p>
          </div>
        </div>
      </div>

      {/* Trusted by */}
      <div className="trusted">
        <p className="trusted-label">Trusted By:</p>
        <div className="trusted-logos">
          <span>⊙ SHELLS</span>
          <span>⬡ SmartFinder</span>
          <span>⊕ Zoomerr</span>
          <span>⊞ ArtVenue</span>
          <span>⊘ kontrastr</span>
          <span>⌁ WAVESMARATHON</span>
        </div>
      </div>
    </section>
  );
}
