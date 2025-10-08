import React from 'react';
import appleLogo from '../../assets/images/sponsors/apple.svg';
import microsoftLogo from '../../assets/images/sponsors/microsoft.svg';
import slackLogo from '../../assets/images/sponsors/slack.svg';
import googleLogo from '../../assets/images/sponsors/google.svg';

const sponsors = [
  { name: 'Apple', logo: appleLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Slack', logo: slackLogo },
  { name: 'Google', logo: googleLogo },
];

const SponsorsSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl" data-aos="fade-up">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary">Our sponsors</h2>
        </div>

        {/* Sponsors Logos */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {sponsors.map((sponsor) => (
            <img 
              key={sponsor.name} 
              src={sponsor.logo} 
              alt={`${sponsor.name} logo`} 
              className="h-10" 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SponsorsSection;
