import React from 'react';
import arrowRight from '../../assets/icons/arrow-right.svg';
import appsGraphic from '../../assets/images/apps-graphic.svg';


const AppsSection = () => {
  return (
    <section className="bg-primary py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image */}
          <div 
            className="mt-12 md:mt-0"
            data-aos="fade-left"
          >
            <img src={appsGraphic} alt="Favorite apps integration graphic" />
          </div>

          {/* Right Column: Text Content */}
          <div 
            className="text-white flex flex-col items-center md:items-start text-center md:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-5xl font-bold leading-tight">
              Work with Your Favorite Apps Using whitepace
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
            </p>
            <button 
              type="button" 
              className="mt-8 bg-secondary text-white px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 flex items-center space-x-2"
            >
              <span>Read more</span>
              <img src={arrowRight} alt="arrow right" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppsSection;
