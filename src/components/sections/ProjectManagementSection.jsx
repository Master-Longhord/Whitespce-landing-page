import React from 'react';
import arrowRight from '../../assets/icons/arrow-right.svg';

const ProjectManagementSection = () => {
  return (
    <section className="py-20 overflow-hidden"> {/* Added overflow-hidden */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Add data-aos="fade-right" to the text column */}
          <div 
            className="flex flex-col items-center md:items-start text-center md:text-left" 
            data-aos="fade-right"
          >
            <h2 className="text-5xl font-bold text-primary leading-tight">
              Project 
              <br />
              Management
            </h2>
            <p className="mt-6 text-lg text-dark-gray">
              Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
            <button 
              type="button" 
              className="mt-8 bg-secondary text-white px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <img src={arrowRight} alt="arrow right" />
            </button>
          </div>

          {/* Add data-aos="fade-left" to the image column */}
          <div 
            className="order-first md:order-last mt-12 md:mt-0" 
            data-aos="fade-left"
          >
            <div className="bg-accent-blue h-96 w-full rounded-md"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectManagementSection;