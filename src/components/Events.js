import React from 'react';
import BorderedImage from './ui/image';
import linkedWorkshop from '../assets/images/linkedin-workshop.jpg'
import comingSoon from '../assets/images/coming-soon.png'
import logo from '../assets/images/circle_logo.png'  
import movieNight from '../assets/images/movie-night.jpg'




const Event = ({ title, date, description, imageSrc }) => (
  <div className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-lg">
    <BorderedImage
      src={imageSrc}
      label={title}
      alt={`Poster for ${title}`}
      width="240px"
      height="180px"
      className="mb-4"
    />
    <div className="text-center">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400">{date}</p>
      <p className="mt-2">{description}</p>
    </div>
  </div>
);

const Events = () => (
  <div className="container mx-auto px-4 py-8 pb-24">
    <h1 className="text-4xl font-bold mb-8 text-white text-left pixel-font">Upcoming Events</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <Event 
        title="How to LinkedIn like a GirlBoss"
        date="Self-Paced Workshop Coming Soon"
        description="Hear from the Gen Z queen of LinkedIn on the best approaches to personal branding and taking advantage of LinkedIn."
        imageSrc={linkedWorkshop}
      />
      <Event 
        title="Grammarly x CSG : How to Ace the Technical Interview"
        date="TBD"
        description="Learn from Grammarly engineers what the best approaches are to ace your technical interview."
        imageSrc={comingSoon}
      />
      <Event 
        title="Impress AI Hackathon"
        date="TBD"
        description="Come hack with us and build something truly human... something AI can't wrap its head around."
        imageSrc={comingSoon}
      />
    </div>

    <h2 className="text-3xl font-bold mb-6 text-white text-left pixel-font">Past Events</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Event 
        title="Capture the Flag Event"
        date="June 28, 2024"
        description=""
        imageSrc={logo}
      />
      <Event 
        title="Roblox Game Dev | Genesis"
        date="July 31, 2024"
        description="Discussing the groundwork of the Roblox game and getting acquainted with the Roblox Studio."
        imageSrc={logo}
      />
      <Event 
        title="Movie Night!"
        date="July 26, 2024"
        description="We simply took a break and watched Howl's Moving Castle together!"
        imageSrc={movieNight}
      />
    </div>
  </div>
);

export default Events;