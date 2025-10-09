import React from 'react';
import arrowRight from '../../assets/icons/arrow-right.svg';
import appleIcon from '../../assets/icons/apple-os.svg';
import windowsIcon from '../../assets/icons/windows-os.svg';
import androidIcon from '../../assets/icons/android-os.svg';

const FinalCtaSection = () => {
  return (
    <section className="bg-primary py-20" data-aos="fade-up">
      <div className="container mx-auto px-4 max-w-3xl text-center text-white">
        <h2 className="text-5xl font-bold">Try Whitepace today</h2>
        <p className="mt-6 text-lg text-gray-300">
          Get started for free. Add your whole team as your needs grow.
        </p>
        <button 
          type="button" 
          className="mt-8 bg-secondary text-white px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 flex items-center space-x-2 mx-auto"
        >
          <span>Try Taskey free</span>
          <img src={arrowRight} alt="arrow right" />
        </button>
        <p className="mt-8 text-gray-300">
          On a big team? <a href="#" className="text-secondary font-semibold hover:underline">Contact sales</a>
        </p>
        <div className="mt-8 flex justify-center items-center space-x-6">
          <img src={appleIcon} alt="Apple" className="h-8" />
          <img src={windowsIcon} alt="Windows" className="h-8" />
          <img src={androidIcon} alt="Android" className="h-8" />
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
