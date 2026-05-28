import React, { useState } from 'react';
import './CaseStudies.css';
import n7Icon from '../assets/images/n7-vector-icon.png';

const cases = [
  {
    tag: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    client: 'Zoomerr',
  },
  {
    tag: 'GETTING STARTED',
    title: 'How N7 transformed digital banking infrastructure',
    client: 'SmartFinder',
  },
  {
    tag: 'GETTING STARTED',
    title: 'Building compliant API banking for modern institutions',
    client: 'ArtVenue',
  },
];

function IconGrid({ size = 138 }) {
  return (
    <div className="cs-icon-grid" style={{ gap: 24 }}>
      {[0,1,2,3].map(i => (
        <img src={n7Icon} alt="n7" key={i} style={{ width: size, height: size, objectFit: 'contain' }} />
      ))}
    </div>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  const prev = () => setActive(a => (a - 1 + cases.length) % cases.length);
  const next = () => setActive(a => (a + 1) % cases.length);

  return (
    <section className="case-studies">
      <h2 className="cs-title">Our Case Studies</h2>

      <div className="cs-carousel-wrap">
        {/* Ghost cards behind */}
        <div className="cs-ghost cs-ghost-left">
          <div className="cs-ghost-image-panel">
            <IconGrid size={80} />
          </div>
        </div>
        <div className="cs-ghost cs-ghost-right">
          <div className="cs-ghost-image-panel">
            <IconGrid size={80} />
          </div>
        </div>

        {/* Active card */}
        <div className="cs-card">
          <div className="cs-image-panel">
            <div className="cs-image-inner">
              <IconGrid size={138} />
            </div>
          </div>
          <div className="cs-content">
            <span className="cs-tag">{cases[active].tag}</span>
            <h3 className="cs-card-title">{cases[active].title}</h3>
            <div className="cs-client">
              <span className="cs-client-dot">⚡</span>
              <span>{cases[active].client}</span>
            </div>
            <button className="btn-read-more-cs">READ MORE</button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="cs-controls">
        <button className="cs-nav" onClick={prev}>
          <span className="cs-circle">←</span>
        </button>
        <div className="cs-dots">
          {cases.map((_, i) => (
            <span
              key={i}
              className={`cs-dot ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
        <button className="cs-nav" onClick={next}>
          <span className="cs-circle">→</span>
        </button>
        <div className="view-all">
          <span>VIEW ALL</span>
          <span>→</span>
        </div>
      </div>
    </section>
  );
}
