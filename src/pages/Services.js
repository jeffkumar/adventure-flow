// src/pages/Services.js
import React from 'react';

const Services = () => {
  return (
    <section className="bg-background text-primary py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-8">
          Our Services
        </h1>

        {/* Introduction Paragraph */}
        <p className="text-xl text-secondary mb-8 leading-relaxed">
          At Adventure Flow Inc, we specialize in crafting a diverse range of cloud-based web software solutions tailored to meet your unique business needs. Whether you're looking to develop advanced Large Language Model (LLM) tools for research or launch innovative digital products, our expert team is here to deliver scalable and efficient solutions.
        </p>

        {/* Services List */}
        <ul className="list-disc pl-6 text-lg text-secondary space-y-4">
          <li>Custom Cloud-Native Web Applications</li>
          <li>Large Language Model (LLM) Tools for Research</li>
          <li>IoT Observability and Energy Management Systems</li>
          <li>Tailored Dashboards for Comprehensive Data Visualization</li>
          <li>Real-Time Data Analytics and Monitoring</li>
          <li>Advanced Alerts and Notifications Management</li>
          <li>Efficient Firmware Upgrade and Deployment Solutions</li>
          <li>Warranty and Lifecycle Management Tools</li>
          <li>Comprehensive Role-Based Access Control (RBAC)</li>
          <li>Scalable Microservices Architecture Design</li>
          <li>Integration with Existing Systems and APIs</li>
          <li>Performance Optimization and Scalability Enhancements</li>
        </ul>

        {/* Call-to-Action Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => window.location.href='/contact'} 
            className="bg-primary text-black py-3 px-6 rounded-lg shadow-lg hover:bg-secondary transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
