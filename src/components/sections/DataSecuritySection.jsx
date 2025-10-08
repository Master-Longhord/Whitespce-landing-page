import React from 'react';
import arrowRight from '../../assets/icons/arrow-right.svg';
import securityGraphic from '../../assets/images/security-graphic.svg';

const DataSecuritySection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div 
            className="flex flex-col items-center md:items-start text-center md:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-5xl font-bold text-primary leading-tight">
              100% your data
            </h2>
            <p className="mt-6 text-lg text-dark-gray">
              The app is open source and your notes are saved to an open format, so you’ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
            </p>
            <button 
              type="button" 
              className="mt-8 bg-secondary text-white px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 flex items-center space-x-2"
            >
              <span>Read more</span>
              <img src={arrowRight} alt="arrow right" />
            </button>
          </div>

          {/* Right Column: Image */}
          <div 
            className="order-first md:order-last mt-12 md:mt-0"
            data-aos="fade-left"
          >
            <img src={securityGraphic} alt="Data security graphic" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DataSecuritySection;
