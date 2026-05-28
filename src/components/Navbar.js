import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-logo">N7</div>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#solutions" className="nav-item">
            SOLUTIONS <span className="chevron">&#8964;</span>
          </a>
          <a href="#resources" className="nav-item">
            RESOURCES <span className="chevron">&#8964;</span>
          </a>
          <a href="#about" className="nav-item">ABOUT US</a>
        </div>

        <button className="btn-outline-nav">REQUEST DEMO</button>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
