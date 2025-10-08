// src/components/sections/CollaborationSection.jsx

import React from 'react';
import collaborationGraphic from '../../assets/images/collaboration-graphic.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

const CollaborationSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Responsive grid with reversed order on desktop */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image */}
          {/* The 'order-last' class is for mobile, making text appear first */}
          <div className="order-last md:order-first">
            <img src={collaborationGraphic} alt="Collaboration graphic" />
          </div>

          {/* Right Column: Text Content */}
          <div>
            <h2 className="text-5xl font-bold text-primary leading-tight">
              Work together
            </h2>
            <p className="mt-6 text-lg text-dark-gray">
              With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
            </p>
            <button 
              type="button" 
              className="mt-8 bg-secondary text-white px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 flex items-center space-x-2"
            >
              <span>Try it now</span>
              <img src={arrowRight} alt="arrow right" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
