import React from 'react';
import arrowRight from '../../assets/icons/arrow-right.svg';

const ExtensionSection = () => {
  return (
    <section className="bg-primary py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div 
            className="text-white flex flex-col items-center md:items-start text-center md:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-5xl font-bold leading-tight">
              Use as Extension
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
            </p>
            <button 
              type="button" 
              className="mt-8 bg-secondary text-white px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 flex items-center space-x-2"
            >
              <span>Let's Go</span>
              <img src={arrowRight} alt="arrow right" />
            </button>
          </div>

          <div 
            className="mt-12 md:mt-0"
            data-aos="fade-left"
          >
            <div className="bg-accent-blue opacity-50 h-80 w-full rounded-md"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExtensionSection;