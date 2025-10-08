import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import arrowDown from '../../assets/icons/arrow-down.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import menuIcon from '../../assets/icons/menu.svg';

const Header = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-8">
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <div className="flex items-center text-white">
          <a href="#">
            <img src={logo} alt="Whitepace Logo" />
          </a>
        </div>

        {/* Center: Desktop Navigation Links (hidden on mobile) */}
        <nav className="hidden md:flex items-center space-x-10 text-white font-medium">
          {/* ... (links are unchanged) ... */}
          <a href="#" className="flex items-center space-x-2 hover:opacity-80"><span>Products</span><img src={arrowDown} alt="dropdown"/></a>
          <a href="#" className="flex items-center space-x-2 hover:opacity-80"><span>Solutions</span><img src={arrowDown} alt="dropdown"/></a>
          <a href="#" className="flex items-center space-x-2 hover:opacity-80"><span>Resources</span><img src={arrowDown} alt="dropdown"/></a>
          <a href="#" className="hover:opacity-80"><span>Pricing</span></a>
        </nav>

        {/* Right Side: Desktop Action Buttons (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4">
          <button type="button" className="bg-accent-yellow text-primary px-6 py-2 rounded-md font-medium hover:opacity-90">
            Login
          </button>
          <button type="button" className="bg-secondary text-white px-6 py-2 rounded-md font-medium hover:opacity-90 flex items-center space-x-2">
            <span>Try Whitepace free</span>
            <img src={arrowRight} alt="arrow right" />
          </button>
        </div>

        {/* Hamburger Menu Button (visible on mobile) */}
        <div className="md:hidden">
          <button type="button" onClick={() => setIsMenuOpen(true)} className="text-white">
            <img src={menuIcon} alt="Menu" className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-primary z-50 md:hidden">
          <div className="container mx-auto px-4 max-w-7xl h-full">
            <div className="flex justify-between items-center pt-8">
              <a href="#"><img src={logo} alt="Whitepace Logo" /></a>
              <button type="button" onClick={() => setIsMenuOpen(false)} className="text-white text-4xl">
                &times; {/* This is a simple 'X' close button */}
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center space-y-8 mt-20 text-white text-2xl">
              <a href="#" className="flex items-center space-x-2"><span>Products</span><img src={arrowDown} alt="dropdown"/></a>
              <a href="#" className="flex items-center space-x-2"><span>Solutions</span><img src={arrowDown} alt="dropdown"/></a>
              <a href="#" className="flex items-center space-x-2"><span>Resources</span><img src={arrowDown} alt="dropdown"/></a>
              <a href="#"><span>Pricing</span></a>
              <button type="button" className="bg-accent-yellow text-primary w-full py-3 rounded-md font-medium">Login</button>
              <button type="button" className="bg-secondary text-white w-full py-3 rounded-md font-medium flex items-center justify-center space-x-2">
                <span>Try Whitepace free</span>
                <img src={arrowRight} alt="arrow right" />
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;