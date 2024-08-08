import React from 'react';
import founderImage from '../assets/images/founder.jpeg'; // Add this image to your assets

const About = () => (
  <div className="container mx-auto px-4 py-20 pt-24"> {/* Added pt-24 for navbar space */}
    <h1 className="text-4xl font-bold mb-8 text-center pixel-font">About Computer Science Girlies</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Our Story Section */}
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">Our Story</h2>
        <p className="mb-4">
          Computer Science Girlies is a community dedicated to empowering and supporting women in technology. 
          Founded in [year], we have been working tirelessly to bridge the gender gap in tech through various initiatives, 
          mentorship programs, and educational resources.
        </p>
        <p>
          Our mission is to create a welcoming and inclusive environment for women to learn, grow, and thrive in the field of computer science.
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
              [Founder's Name] is the visionary behind Computer Science Girlies. With a passion for technology and a 
              commitment to gender equality in tech, [she/they] founded this community to make a lasting impact on the industry.
            </p>
            <p>
              [Add more details about the founder's background, achievements, and vision for the community.]
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;