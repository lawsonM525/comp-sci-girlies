import React from 'react';

const Event = ({ title, date, description }) => (
  <div className="border-b pb-4 mb-4">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{date}</p>
    <p>{description}</p>
  </div>
);

const Events = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>
    <Event 
      title="Tech Talk: Women in AI"
      date="May 15, 2024"
      description="Join us for an inspiring discussion with leading women in AI research and development."
    />
    <Event 
      title="Coding Workshop: Web Development Basics"
      date="June 1, 2024"
      description="Learn the fundamentals of web development in this hands-on workshop for beginners."
    />
    <Event 
      title="Networking Mixer: Tech Industry Professionals"
      date="June 20, 2024"
      description="Connect with fellow women in tech and expand your professional network."
    />
  </div>
);

export default Events;