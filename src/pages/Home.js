import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLearnMoreClick = () => {
    navigate('/about'); // Navigate to the /about page
  };
    
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Custom Software Consulting for Energy Management
      </h1>
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        At Adventure Flow, we specialize in delivering <strong>Cloud Native Solutions</strong> designed to provide real-time insights and observability for energy management systems. Our solutions empower businesses to optimize performance, improve efficiency, and make data driven decisions.
      </p>
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        Whether you’re managing complex <strong>IoT infrastructure </strong>or seeking advanced energy management solutions, we help you harness the power of cutting edge cloud native technology to stay ahead of the curve.
      </p>
          <button onClick={handleLearnMoreClick} className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
        Learn More
      </button>
    </div>
  );
};

export default Home;
