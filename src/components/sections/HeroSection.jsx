import React from 'react';
import Header from '../layout/Header';
import arrowRight from '../../assets/icons/arrow-right.svg';

const HeroSection = () => {
  return (
    <div className="bg-primary pb-20">
      <Header />
      <div className="container mx-auto px-4 max-w-7xl mt-12 md:mt-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* CHANGE 1: Added centering classes */}
          <div className="text-white flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Get More Done with whitepace
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
            </p>
            <button 
              type="button" 
              className="mt-8 bg-secondary text-white px-8 py-4 rounded-md text-lg font-medium hover:opacity-90 flex items-center space-x-2"
            >
              <span>Try Whitepace free</span>
              <img src={arrowRight} alt="arrow right" />
            </button>
          </div>

          {/* CHANGE 2: Removed 'hidden md:block' */}
          <div className="mt-12 md:mt-0">
            <div className="bg-accent-blue opacity-50 h-96 w-full rounded-md"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;