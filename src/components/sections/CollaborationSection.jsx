import React from 'react';
import collaborationGraphic from '../../assets/images/collaboration-graphic.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

const CollaborationSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div 
            className="mt-12 md:mt-0"
            data-aos="fade-left"
          >
            <img src={collaborationGraphic} alt="Collaboration graphic" />
          </div>

          <div 
            className="flex flex-col items-center md:items-start text-center md:text-left"
            data-aos="fade-right"
          >
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