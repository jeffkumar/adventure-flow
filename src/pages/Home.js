// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedChart from '../components/AnimatedChart'; // Import the AnimatedChart component

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLearnMoreClick = () => {
    navigate('/about'); // Navigate to the /about page
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-primary mb-6">
        Adventure Flow offers Botique Software Solutions
      </h1>
          
      {/* Animated Chart */}
      <div className="mb-8">
        <AnimatedChart />
      </div>

      {/* First Paragraph */}
      <p className="text-xl text-secondary mb-8 leading-relaxed">
        At Adventure Flow, we specialize in building <strong className="font-semibold">cloud-native software solutions</strong> that deliver real-time insights and observability across various industries, including energy management and IoT. Our comprehensive approach empowers businesses to optimize performance, enhance efficiency, and make informed, data-driven decisions.
      </p>

      {/* Second Paragraph */}
      <p className="text-xl text-secondary mb-8 leading-relaxed">
        Whether you’re managing complex <strong className="font-semibold">IoT infrastructure</strong>, developing innovative digital products, or seeking advanced energy management solutions, we help you harness the power of cutting-edge cloud-native technology to stay ahead of the curve.
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
