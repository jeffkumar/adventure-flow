// src/components/AnimatedWave.js
import React from 'react';
import './AnimatedWave.css'; // Import the CSS file for animations

const AnimatedChart = () => {
  return (
    <div className="wave-container">
      <svg
        className="wave-svg"
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
      >
        <g className="wave-group">
          {/* First Wave */}
          <path
            d="M0,100 C300,200 900,0 1200,100 L1200,200 L0,200 Z"
            fill="#fff" // White wave
          />
          {/* Second Wave */}
          <path
            d="M1200,100 C1500,200 2100,0 2400,100 L2400,200 L1200,200 Z"
            fill="#fff" // White wave
          />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedChart;
