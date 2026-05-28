import React from 'react';
import './DigitalBanking.css';
import iphone1 from '../assets/images/iphone-1.png';
import iphone2 from '../assets/images/iphone-2.png';
import iphone3 from '../assets/images/iphone-3.png';

const rows = [
  {
    phone: iphone1,
    side: 'right',
    title: 'Fully compliant with regulatory requirement',
    desc: "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
    bullets: ['Pre-integrated Security System', 'Fully Compliant With Regulatory Requirement', 'Digitally Connected Core'],
  },
  {
    phone: iphone2,
    side: 'left',
    title: 'No legacy IT systems',
    desc: 'Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.',
    bullets: ['Adaptive & Intelligent API monetization', 'Ambient User Experience', 'Cloud-native With lower TCO'],
  },
  {
    phone: iphone3,
    side: 'right',
    title: 'No traditional branches',
    desc: "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.",
    bullets: ['Branchless & Paperless Banking', 'Digital Transformation Capability', 'Optimized, Adoptable and Scalable'],
  },
];

export default function DigitalBanking() {
  return (
    <section className="digital-banking">

      {/* ── Background decorative layers ── */}

      {/* Faint "N7" watermark top-center */}
      <div className="db-bg-n7" aria-hidden="true">N7</div>

      {/* Faint "7" watermark bottom-right */}
      <div className="db-bg-seven" aria-hidden="true">7</div>

      {/* Circular line-art SVG — top right area (from Figma Vector) */}
      <svg className="db-circle-art db-circle-top-right" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="210" cy="210" r="208" stroke="#003ACE" strokeWidth="1" opacity="0.15"/>
        <circle cx="210" cy="210" r="160" stroke="#003ACE" strokeWidth="1" opacity="0.1"/>
        <circle cx="210" cy="210" r="100" stroke="#003ACE" strokeWidth="1" opacity="0.08"/>
        <line x1="2" y1="210" x2="418" y2="210" stroke="#003ACE" strokeWidth="0.5" opacity="0.1"/>
        <line x1="210" y1="2" x2="210" y2="418" stroke="#003ACE" strokeWidth="0.5" opacity="0.1"/>
        <line x1="62" y1="62" x2="358" y2="358" stroke="#003ACE" strokeWidth="0.5" opacity="0.08"/>
        <line x1="358" y1="62" x2="62" y2="358" stroke="#003ACE" strokeWidth="0.5" opacity="0.08"/>
      </svg>

      {/* Circular line-art SVG — bottom left area */}
      <svg className="db-circle-art db-circle-bottom-left" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="210" cy="210" r="208" stroke="#003ACE" strokeWidth="1" opacity="0.12"/>
        <circle cx="210" cy="210" r="155" stroke="#003ACE" strokeWidth="1" opacity="0.08"/>
        <circle cx="210" cy="210" r="95" stroke="#003ACE" strokeWidth="1" opacity="0.06"/>
        <line x1="2" y1="210" x2="418" y2="210" stroke="#003ACE" strokeWidth="0.5" opacity="0.08"/>
        <line x1="210" y1="2" x2="210" y2="418" stroke="#003ACE" strokeWidth="0.5" opacity="0.08"/>
        <line x1="62" y1="62" x2="358" y2="358" stroke="#003ACE" strokeWidth="0.5" opacity="0.06"/>
        <line x1="358" y1="62" x2="62" y2="358" stroke="#003ACE" strokeWidth="0.5" opacity="0.06"/>
      </svg>

      {/* Color ellipse glows */}
      <div className="db-glow db-glow-orange-tl" aria-hidden="true" />
      <div className="db-glow db-glow-orange-tr" aria-hidden="true" />
      <div className="db-glow db-glow-blue-bl" aria-hidden="true" />

      {/* ── Section header (left-aligned) ── */}
      <div className="db-header">
        <div className="db-header-left">
          <h2 className="db-title">Digital banking<br />out-of-the-box</h2>
          <p className="db-sub">N7 helps your financial institution improve the client experience, automate and optimize procedures</p>
          <button className="btn-primary-blue">REQUEST DEMO</button>
          <div className="learn-more-link">
            <span>LEARN MORE</span>
            <span>→</span>
          </div>
        </div>
      </div>

      {/* ── Phone rows ── */}
      <div className="db-rows">
        {rows.map((row, i) => (
          <div className={`db-row ${row.side === 'left' ? 'row-left' : 'row-right'}`} key={i}>
            <div className="db-phone-wrap">
              <img src={row.phone} alt={`phone mockup ${i + 1}`} className="db-phone" />
            </div>
            <div className="db-info">
              <h3 className="db-info-title">{row.title}</h3>
              <p className="db-info-desc">{row.desc}</p>
              <div className="db-bullets">
                {row.bullets.map((b, j) => (
                  <div className="db-bullet" key={j}>
                    <div className="bullet-check">
                      <div className="bullet-circle" />
                      <span className="bullet-tick">✓</span>
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
