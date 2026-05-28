import React from 'react';
import './Hero.css';
import heroPerson from '../assets/images/hero-person.png';
import homeCard    from '../assets/images/home-card.png';
import homeCard2   from '../assets/images/home-card-2.png';

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

      {/* Right: photo + PNG overlay cards */}
      <div className="hero-visual">

        {/* Person photo */}
        <div className="hero-photo-wrap">
          <img src={heroPerson} alt="banking user" className="hero-photo" />
        </div>

        {/* Balance card — top-right, overlapping photo (PNG asset) */}
        <img
          src={homeCard}
          alt="Balance card"
          className="hero-card hero-card-balance"
        />

        {/* Activity card — bottom-left, overlapping photo (PNG asset) */}
        <img
          src={homeCard2}
          alt="Recent activity card"
          className="hero-card hero-card-activity"
        />
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
