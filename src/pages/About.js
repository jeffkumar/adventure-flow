// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <section className="bg-background text-primary max-w-3xl mx-auto p-6">
      <div className="container mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-8">
          About Adventure Flow
        </h1>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
          
          {/* Text Content */}
          <div className="flex-1">
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Adventure Flow was founded in 2023 by <strong className="font-semibold">Jeff Kumar</strong>, a seasoned engineer with over 15 years of experience in enterprise software development. After years of working in the industry, Jeff discovered his passion for solution engineering and building impactful, customer-centric products through consulting.
            </p>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Specializing in <strong className="font-semibold">IoT observability</strong>, <strong className="font-semibold">energy management</strong>, and comprehensive <strong className="font-semibold">cloud-native solutions</strong>, Adventure Flow delivers actionable insights that enable organizations to optimize their infrastructure, enhance operational efficiency, and make data-driven decisions across various domains.
            </p>
            <a
              href="https://www.linkedin.com/in/jeff-kumar-4a6b3424/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-black py-2 px-4 rounded-lg shadow-md hover:bg-secondary transition duration-300 inline-block"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* Image Section */}
          <div className="w-32 h-32 flex flex-col items-center">
            <img
              className="rounded-full w-full h-full object-cover mb-2 border-4 border-primary"
              src="https://i.ibb.co/4N5NvLG/IMG-0577.jpg"
              alt="Jeff Kumar"
            />
            <p className="text-secondary font-semibold">Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
