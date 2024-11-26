// src/pages/Services.js
import React from 'react';

const Services = () => {
  return (
    <section className="bg-background text-primary max-w-3xl mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-8">
          Our Services
        </h1>

        {/* Introduction Paragraph */}
        <p className="text-xl text-secondary mb-8 leading-relaxed">
          At Adventure Flow Inc, we are dedicated to delivering comprehensive <strong className="font-semibold">cloud-native software solutions</strong> tailored to your unique business needs. With a strong foundation in IoT and energy management, our expertise extends to a wide array of services designed to drive innovation and efficiency across various industries.
        </p>

        {/* Service Categories */}
        <div className="space-y-8">
          {/* Cloud Solutions */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Cloud Solutions</h2>
            <ul className="list-disc pl-6 text-lg text-secondary space-y-2">
              <li>Custom Cloud-Native Web Applications</li>
              <li>Scalable Microservices Architecture Design</li>
              <li>Integration with Existing Systems and APIs</li>
              <li>Performance Optimization and Scalability Enhancements</li>
            </ul>
          </div>

          {/* IoT and Energy Management */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">IoT & Energy Management</h2>
            <ul className="list-disc pl-6 text-lg text-secondary space-y-2">
              <li>IoT Observability and Real-Time Monitoring</li>
              <li>Advanced Energy Management Systems</li>
              <li>Efficient Firmware Upgrade and Deployment Solutions</li>
              <li>Warranty and Lifecycle Management Tools</li>
            </ul>
          </div>

          {/* Data Analytics & Visualization */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Analytics & Visualization</h2>
            <ul className="list-disc pl-6 text-lg text-secondary space-y-2">
              <li>Tailored Dashboards for Comprehensive Data Visualization</li>
              <li>Real-Time Data Analytics and Monitoring</li>
              <li>Advanced Alerts and Notifications Management</li>
              <li>Comprehensive Role-Based Access Control (RBAC)</li>
            </ul>
          </div>

          {/* AI & Machine Learning */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">AI & Machine Learning</h2>
            <ul className="list-disc pl-6 text-lg text-secondary space-y-2">
              <li>Development of Large Language Model (LLM) Tools for Research</li>
              <li>AI-Driven Data Insights and Automation</li>
              <li>Custom Machine Learning Models for Business Applications</li>
            </ul>
          </div>
        </div>

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
