import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import CoreBanking from './components/CoreBanking';
import CTABanner from './components/CTABanner';
import Marquee from './components/Marquee';
import DigitalBanking from './components/DigitalBanking';
import Insights from './components/Insights';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Solutions />
      <CoreBanking />
      <CTABanner bgText="CB7" />
      <Marquee />
      <DigitalBanking />
      <CTABanner bgText="N7" />
      <Insights />
      <CaseStudies />
      <CTABanner bgText="N7" />
      <Footer />
    </div>
  );
}

export default App;
