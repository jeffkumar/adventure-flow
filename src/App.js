import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact'; 

function App() {
  return (
    <Router  basename="/adventure-flow/">
      <div className="flex flex-col min-h-screen">
        {/* Main Content */}
        <div className="flex-grow">
          {/* Navbar */}
          <nav className="bg-slate-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="AF Logo" className="w-12" />
            </div>
                    
              <ul className="flex space-x-6">
                <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
                <li><Link to="/services" className="text-white hover:text-gray-200">Services</Link></li>
                <li><Link to="/about" className="text-white hover:text-gray-200">About</Link></li>
                <li><Link to="/contact" className="text-white hover:text-gray-200">Contact</Link></li>
              </ul>
            </div>
          </nav>

          {/* Routes */}
          <div className="container mx-auto p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-200 p-4">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Adventure Flow Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
