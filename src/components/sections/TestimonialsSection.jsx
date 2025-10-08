import React from 'react';
import quotationMarkIcon from '../../assets/icons/quotation-mark.svg';
import avatar1 from '../../assets/images/avatars/avatar-1.png';
import avatar2 from '../../assets/images/avatars/avatar-2.png';
import avatar3 from '../../assets/images/avatars/avatar-3.png';

const testimonials = [
  {
    text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    avatar: avatar1,
    isFeatured: false,
  },
  {
    text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    avatar: avatar2,
    isFeatured: true,
  },
  {
    text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    avatar: avatar3,
    isFeatured: true,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl" data-aos="fade-up">
        
        <div className="text-center">
          <h2 className="text-5xl font-bold text-primary">What Our Clients Says</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`rounded-lg p-8 ${testimonial.isFeatured ? 'bg-secondary text-white' : 'bg-white shadow-lg'}`}
            >
              <img src={quotationMarkIcon} alt="quotation mark" />
              <p className={`mt-6 text-lg ${testimonial.isFeatured ? 'text-gray-200' : 'text-dark-gray'}`}>
                {testimonial.text}
              </p>
              <hr className={`my-6 ${testimonial.isFeatured ? 'border-gray-400' : 'border-gray-200'}`} />
              <div className="flex items-center space-x-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className={`${testimonial.isFeatured ? 'text-gray-300' : 'text-dark-gray'}`}>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-12">
          <button className="w-3 h-3 bg-secondary rounded-full"></button>
          <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-secondary"></button>
          <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-secondary"></button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
