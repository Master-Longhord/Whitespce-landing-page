// src/components/layout/Header.jsx

import React from 'react';
import logo from '../../assets/images/logo.svg';
import arrowDown from '../../assets/icons/arrow-down.svg';

const Header = () => {
  return (
    // 1. THE OUTER ELEMENT: This has padding but NO container class.
    // It will be transparent, letting the blue background from HeroSection show through.
    <header className="py-8">
      
      {/* 2. THE INNER ELEMENT: This is the container! */}
      {/* It centers itself (mx-auto), has a max-width, and handles the flex layout. */}
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <div className="flex items-center text-white">
          <a href="#">
            <img src={logo} alt="Whitepace Logo" />
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10 text-white font-medium">
          <a href="#" className="flex items-center space-x-2 hover:opacity-80">
            <span>Products</span>
            <img src={arrowDown} alt="dropdown arrow" />
          </a>
          {/* ...other links... */}
          <a href="#" className="flex items-center space-x-2 hover:opacity-80">
            <span>Solutions</span>
            <img src={arrowDown} alt="dropdown arrow" />
          </a>
          <a href="#" className="flex items-center space-x-2 hover:opacity-80">
            <span>Resources</span>
            <img src={arrowDown} alt="dropdown arrow" />
          </a>
          <a href="#" className="hover:opacity-80">
            <span>Pricing</span>
          </a>
        </nav>

        {/* Right Side: Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            type="button" 
            className="bg-accent-yellow text-primary px-6 py-2 rounded-md font-medium hover:opacity-90"
          >
            Login
          </button>
          <button 
            type="button" 
            className="bg-secondary text-white px-6 py-2 rounded-md font-medium hover:opacity-90"
          >
            <span>Try Whitepace free</span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;