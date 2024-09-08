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
    const mailtoLink = `mailto:jeffkumar.aw@gmail.com?subject=Contact%20Form%20Submission&body=Company Name: ${formData.companyName}%0AName: ${formData.name}%0AEmail: ${formData.email}%0AType of Software: ${formData.softwareType}%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="p-6 flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg p-8 rounded-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get your free consultation today</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your company name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">What kind of web app are you looking to build or update?</label>
            <input
              type="text"
              name="softwareType"
              value={formData.softwareType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Describe the application you need"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Enter your message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
