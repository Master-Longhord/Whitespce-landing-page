import React from 'react';
import arrowRight from '../../assets/icons/arrow-right.svg';
import workEverywhereBg from '../../assets/images/work-everywhere-bg.svg';

const CtaSection = () => {
  return (
    <section 
      className="py-24 bg-primary relative overflow-hidden"
      style={{ backgroundImage: `url(${workEverywhereBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Centered Content */}
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold leading-tight">
            Your work, everywhere you are
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
          <button 
            type="button" 
            className="mt-8 bg-secondary text-white px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 flex items-center space-x-2 mx-auto"
          >
            <span>Try Taskey</span>
            <img src={arrowRight} alt="arrow right" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CtaSection;
