// src/pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    companyName: '',
    softwareType: '' // Added field for software type
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:jeffkumar.aw@gmail.com?subject=Contact%20Form%20Submission&body=Company Name: ${encodeURIComponent(formData.companyName)}%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0AType of Software: ${encodeURIComponent(formData.softwareType)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="bg-background text-primary max-w-3xl mx-auto py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-gray-800 shadow-lg p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Get Your Free Consultation Today</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-gray-300 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your company name"
                required
              />
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Software Type */}
            <div>
              <label htmlFor="softwareType" className="block text-gray-300 mb-2">
                What kind of web app are you looking to build or update?
              </label>
              <input
                type="text"
                id="softwareType"
                name="softwareType"
                value={formData.softwareType}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Describe the application you need"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                rows="4"
                placeholder="Enter your message"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-primary text-black py-3 px-6 rounded-md shadow-md hover:bg-secondary transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
