import React from 'react';
import founderImage from '../assets/images/founder.jpeg'; // Add this image to your assets

const About = () => (
  <div className="container mx-auto px-4 py-20 pt-24 text-white"> {/* Added text-white here */}
    <h1 className="text-4xl font-bold mb-8 text-center pixel-font">About Computer Science Girlies</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Our Story Section */}
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">Our Story</h2>
        <p className="mb-4">
          Computer Science Girlies is a revolutionary community dedicated to empowering Gen Z women in computer science. 
          Founded in 2023 by Michelle Lawson, we are transforming the tech landscape with innovative education, robust support, and unmatched inclusivity. 
          Our mission is to redefine diversity in tech by creating a supportive and engaging environment for young women.
        </p>
        <p>
          Our unique approach combines social media engagement with structured educational platforms, meeting young women where they are and providing comprehensive resources to help them thrive.
        </p>
      </div>

      {/* Our Values Section */}
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">Our Values</h2>
        <ul className="list-disc list-inside">
          <li>Inclusivity and diversity</li>
          <li>Continuous learning and growth</li>
          <li>Collaboration and community support</li>
          <li>Innovation and creativity</li>
        </ul>
      </div>

      {/* About the Founder Section */}
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg md:col-span-2">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">About the Founder</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img src={founderImage} alt="Founder" className="w-48 h-48 object-cover rounded-full mb-4 md:mb-0 md:mr-6" />
          <div>
            <p className="mb-4">
              Michelle Lawson is the visionary behind Computer Science Girlies. With a deep passion for technology and a 
              commitment to gender equality in tech, she founded this community to make a lasting impact on the industry.
            </p>
            <p>
              Michelle started by creating content that explained computer science concepts using relatable, girly analogies. 
              Her unique approach quickly resonated with young women, leading to rapid growth on social media platforms like TikTok and Instagram. 
              Today, she continues to lead the community, providing valuable resources and fostering a supportive environment for women in tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;