import React from 'react';
import './Insights.css';
import n7Icon from '../assets/images/n7-vector-icon.png';

const articles = [
  {
    tag: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
    large: true,
  },
  {
    tag: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
  {
    tag: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
];

function IconGrid() {
  return (
    <div className="icon-grid-2x2">
      {[0,1,2,3].map(i => (
        <img src={n7Icon} alt="n7" key={i} className="icon-grid-item" />
      ))}
    </div>
  );
}

export default function Insights() {
  return (
    <section className="insights" id="resources">
      <div className="insights-glow" />

      <div className="insights-left">
        <h2 className="insights-heading">
          Get yourself up-to-speed on all the things happening in fintech
        </h2>
        <button className="btn-outline-white">INSIGHTS</button>
      </div>

      <div className="insights-right">
        {/* Large featured card */}
        <div className="insight-card large">
          <div className="insight-thumbnail">
            <IconGrid />
          </div>
          <div className="insight-content">
            <span className="insight-tag">{articles[0].tag}</span>
            <h3 className="insight-title large-title">{articles[0].title}</h3>
            <div className="insight-meta">
              <span>{articles[0].author}</span>
              <span>{articles[0].date}</span>
            </div>
            <button className="btn-read-more">READ MORE</button>
          </div>
        </div>

        {/* Small cards row */}
        <div className="insights-small-row">
          {articles.slice(1).map((a, i) => (
            <div className="insight-card small" key={i}>
              <span className="insight-tag">{a.tag}</span>
              <h3 className="insight-title">{a.title}</h3>
              <div className="insight-meta">
                <span>{a.author}</span>
                <span>{a.date}</span>
              </div>
              <button className="btn-read-more">READ MORE</button>
            </div>
          ))}
        </div>

        <div className="read-all-link">
          <span>READ ALL INSIGHTS</span>
          <span>→</span>
        </div>
      </div>
    </section>
  );
}
