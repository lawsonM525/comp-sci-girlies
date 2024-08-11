import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const imagesPerRow = 4;

  useEffect(() => {
    const importAll = (r) => {
      let images = {};
      r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
      return images;
    };
    const testimonialImages = importAll(require.context('../assets/testimonials', false, /\.(png|jpe?g|svg)$/));
    
    const sortedTestimonials = Object.entries(testimonialImages)
      .map(([name, src]) => ({
        src,
        label: name.split('.')[0],
      }));

    setTestimonials(sortedTestimonials);
  }, []);

  return (
    <div className="w-full min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center"
            style={{
              opacity: 0,
              animation: `popUp 0.5s ease-out ${Math.floor(index / imagesPerRow) * 0.2}s forwards`,
            }}
          >
            <img 
              src={testimonial.src} 
              alt={testimonial.label}
              className="max-w-full max-h-64 object-contain"
            />
            <span className="block text-xs mt-1 text-center">
              {testimonial.label}
            </span>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes popUp {
            from { transform: scale(0.5); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Testimonials;