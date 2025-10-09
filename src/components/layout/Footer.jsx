import React from 'react';
import logo from '../../assets/images/logo.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-6 gap-8">
          
          {/* Column 1: Logo & Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="Whitepace Logo" />
            <p className="mt-4 text-gray-300">
              whitepace was created for the new ways we live and work. We make a better workspace around the world
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-lg">Product</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Overview</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Customer stories</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-lg">Resources</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Guides & tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Help center</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg">Company</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">About us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Media kit</a></li>
            </ul>
          </div>

          {/* Try It Today CTA */}
          <div>
            <h4 className="font-bold text-lg">Try It Today</h4>
            <p className="mt-4 text-gray-300">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <button className="mt-4 bg-secondary text-white px-6 py-2 rounded-md font-medium hover:opacity-90 flex items-center space-x-2">
              <span>Start today</span>
              <img src={arrowRight} alt="arrow right" />
            </button>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="mt-16 py-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="#" className="hover:text-white">Terms & privacy</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Status</a>
            <span>©2021 Whitepace LLC.</span>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="#" className="hover:text-white"><img src={twitterIcon} alt="Twitter" /></a>
            <a href="#" className="hover:text-white"><img src={linkedinIcon} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
