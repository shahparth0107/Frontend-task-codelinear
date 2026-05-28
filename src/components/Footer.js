import React from 'react';
import './Footer.css';

const solutions = ['Core Banking CB7', 'Digital Banking N7', 'Open Banking', 'Loan Origination System', 'Loan Management System', 'Digital Transformation'];
const n7Links = ['About Us', 'Solutions', 'Contact', 'Company', 'Careers', 'Insights', 'Core Team', 'Brand Center'];
const socials = ['LinkedIn', 'X'];

const offices = [
  {
    city: 'London',
    addr: 'Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.',
  },
  {
    city: 'Dubai',
    addr: 'Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates',
  },
  {
    city: 'London',
    addr: 'Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India',
  },
];

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-glow" />

      <div className="footer-logo-col">
        <div className="footer-n7">N7</div>
      </div>

      <div className="footer-main">
        {/* Offices */}
        <div className="footer-offices">
          {offices.map((o, i) => (
            <div className="office" key={i}>
              <h4 className="office-city">{o.city}</h4>
              <p className="office-addr">{o.addr}</p>
            </div>
          ))}
        </div>

        {/* Link columns */}
        <div className="footer-links">
          <div className="footer-col">
            <h4 className="col-title">Solutions</h4>
            <div className="col-links">
              {solutions.map((s, i) => (
                <a key={i} href="#solutions" className="footer-link">
                  {s} <span className="link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="col-title">N7 Banking</h4>
            <div className="col-links">
              {n7Links.map((s, i) => (
                <a key={i} href="#about" className="footer-link">
                  {s} <span className="link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="col-title">Our Socials</h4>
            <div className="col-links">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s === 'LinkedIn' ? 'https://www.linkedin.com' : 'https://x.com'}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  {s} <span className="link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  );
}
