import React from 'react';
import arrowRight from '../../assets/icons/arrow-right.svg';

const CustomiseSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Placeholder for the image/graphic */}
          <div 
            className="mt-12 md:mt-0"
            data-aos="fade-left"
          >
            <div className="bg-accent-blue h-96 w-full rounded-md"></div>
          </div>

          {/* Right Column: Text Content */}
          <div 
            className="flex flex-col items-center md:items-start text-center md:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-5xl font-bold text-primary leading-tight">
              Customise it to
              <br />
              your needs
            </h2>
            <p className="mt-6 text-lg text-dark-gray">
              Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>
            <button 
              type="button" 
              className="mt-8 bg-secondary text-white px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 flex items-center space-x-2"
            >
              <span>Let's Go</span>
              <img src={arrowRight} alt="arrow right" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomiseSection;
