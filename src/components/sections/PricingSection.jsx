import React from 'react';
import checkmarkIcon from '../../assets/icons/checkmark.svg';

const PricingSection = () => {
  const features = [
    "Sync unlimited devices",
    "10 GB monthly uploads",
    "200 MB max. note size",
    "Customize Home dashboard and access extra widgets",
    "Connect primary Google Calendar account",
    "Add due dates, reminders, and notifications to your tasks",
  ];

  const PricingCard = ({ title, price, description }) => (
    <div className="group border rounded-lg p-8 transition-all duration-300 hover:bg-primary hover:shadow-2xl hover:transform hover:lg:scale-105">
      <h3 className="text-2xl font-semibold text-primary group-hover:text-white">{title}</h3>
      <p className="text-5xl font-bold mt-4 text-primary group-hover:text-white">{price}</p>
      <p className="mt-4 text-dark-gray group-hover:text-gray-300">{description}</p>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <img src={checkmarkIcon} alt="checkmark" />
            <span className="text-dark-gray group-hover:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full mt-8 py-3 px-6 border border-secondary rounded-md text-secondary font-semibold transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
        Get Started
      </button>
    </div>
  );

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl" data-aos="fade-up">
        
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold text-primary">Choose Your Plan</h2>
          <p className="mt-4 text-lg text-dark-gray">
            Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
          </p>
        </div>

        {/* Corrected Grid Layout: Changed lg: to md: */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* All three cards now use the same component structure */}
          <PricingCard 
            title="Free" 
            price="$0" 
            description="Capture ideas and find them quickly" 
          />

          <PricingCard 
            title="Personal" 
            price="$11.99" 
            description="Keep home and family on track" 
          />
          
          <PricingCard 
            title="Organization" 
            price="$49.99" 
            description="Capture ideas and find them quickly" 
          />

        </div>
      </div>
    </section>
  );
};

export default PricingSection;