import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-primary">
        {/* Navbar */}
        <nav className="bg-navbar p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img
                src={`${process.env.PUBLIC_URL}/logo.svg`}
                alt="Adventure Flow Logo"
                className="w-12"
              />
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link to="/" className="text-primary hover:text-secondary font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary hover:text-secondary font-semibold">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary hover:text-secondary font-semibold">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary hover:text-secondary font-semibold">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-primary hover:text-secondary focus:outline-none"
                aria-label="Toggle Menu"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  // Close Icon
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <ul className="md:hidden flex flex-col space-y-4 mt-4 px-4">
              <li>
                <Link to="/" className="text-primary hover:text-secondary font-semibold" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary hover:text-secondary font-semibold" onClick={toggleMobileMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary hover:text-secondary font-semibold" onClick={toggleMobileMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary hover:text-secondary font-semibold" onClick={toggleMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </nav>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-footer text-gray-300 p-4">
          <div className="container mx-auto text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Adventure Flow Inc. All rights reserved.</p> 
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
