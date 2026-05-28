import React from 'react';
import './Marquee.css';

const items = [
  { text: 'N7', gradient: true },
  { text: '✦', star: true },
  { text: 'Say', bold: true },
  { text: '👋', emoji: true },
  { text: 'to the new way of banking', bold: true },
  { text: '✦', star: true },
  { text: 'CB7', gradient: true },
  { text: '✦', star: true },
  { text: 'Say', bold: true },
  { text: '👋', emoji: true },
  { text: 'to the new way of banking', bold: true },
  { text: '✦', star: true },
];

export default function Marquee() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`marquee-item ${item.gradient ? 'gradient' : ''} ${item.bold ? 'bold' : ''} ${item.star ? 'star' : ''}`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
