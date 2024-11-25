// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLearnMoreClick = () => {
    navigate('/about'); // Navigate to the /about page
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-primary mb-6">
        Botique Cloud Software Solutions for Energy Management and beyond.
      </h1>

      {/* First Paragraph */}
      <p className="text-xl text-secondary mb-8 leading-relaxed">
        At Adventure Flow, we specialize in building <strong className="font-semibold">Cloud Native Solutions</strong> to provide real-time insights and observability for energy management systems. Our solutions empower businesses to optimize performance, improve efficiency, and make data-driven decisions.
      </p>

      {/* Second Paragraph */}
      <p className="text-xl text-secondary mb-8 leading-relaxed">
        Whether you’re managing complex <strong className="font-semibold">IoT infrastructure</strong>, seeking advanced energy management solutions, we help you harness the power of cutting-edge cloud-native technology to stay ahead of the curve.
      </p>

      {/* Learn More Button */}
      <div>
        <button 
          onClick={handleLearnMoreClick} 
          className="bg-primary text-black py-3 px-6 rounded-lg shadow-lg hover:bg-secondary transition duration-300"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
