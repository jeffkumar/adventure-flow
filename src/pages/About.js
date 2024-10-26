import React from 'react';

const About = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About Adventure Flow</h1>
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        
        <div className="flex-1">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Adventure Flow was founded in 2023 by <strong>Jeff Kumar</strong>, a seasoned engineer with over 15 years of experience in enterprise software development. After years of working in the industry, Jeff discovered his passion for solution engineering and building impactful, customer-centric products through consulting.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Specializing in <strong>IoT observability</strong> and <strong>energy management</strong>, Adventure Flow delivers actionable insights that enable organizations to optimize their energy infrastructure and make data-driven decisions.
          </p>
          <a
            href="https://www.linkedin.com/in/jeff-kumar-4a6b3424/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 inline-block"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Image Section */}
        <div className="w-32 h-32 flex flex-col items-center mt-4 md:mt-0">
          <img
            className="rounded-full w-full h-full object-cover mb-2"
            src="https://i.ibb.co/4N5NvLG/IMG-0577.jpg"
            alt="Jeff Kumar"
            border="0"
          />
          <p className="text-gray-600 font-semibold">Founder</p>
        </div>
      </div>
    </div>
  );
};

export default About;
