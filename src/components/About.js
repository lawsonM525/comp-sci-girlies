import React from 'react';
import BorderedImage from './ui/image';
import image1 from '../assets/images/our-beginnings.png';
import image2 from '../assets/images/founder.jpeg';
import image3 from '../assets/images/community-growth.jpg';
import image4 from '../assets/images/social-media.jpg';
import image5 from '../assets/images/skool-platform.jpg';
import image6 from '../assets/images/discord-community.jpg';
import image7 from '../assets/images/1000jobs-challenge.jpg';
import image8 from '../assets/images/values-infographic.png';
import JoinUs from "./ui/JoinUs";

const About = () => (
  <div className="container mx-auto px-4 py-10  pb-32 text-white">
    <h1 className="text-4xl font-bold mb-12 text-center pixel-font">About Computer Science Girlies</h1>
    
    {/* Our Beginnings Section */}
    <div className="flex flex-col md:flex-row items-center mb-16">
      <BorderedImage
        src={image1}
        label="Our Beginnings"
        width="400px"
        height="400px"
        className="md:mr-8 mb-8 md:mb-0"
      />
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">Our Beginnings: From Passion to Purpose</h2>
        <p>Computer Science Girlies started in 2023, born out of a deep passion for technology and a desire to make tech education more accessible and relatable for women. What began as fun, girly analogies to explain complex computer science concepts quickly evolved into a movement. Today, we're a thriving community of over 160,000 young women who are breaking barriers and making their mark in the tech world.</p>
      </div>
    </div>

    {/* The Visionary Behind CSG Section */}
    <div className="flex flex-col md:flex-row-reverse items-center mb-16">
      <BorderedImage
        src={image2}
        label="Michelle Lawson"
        width="400px"
        height="400px"
        className="md:ml-8 mb-8 md:mb-0"
      />
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">The Visionary Behind CSG: Meet Our Founder</h2>
        <p>Michelle Lawson, the visionary behind Computer Science Girlies, is on a mission to change the tech industry. With a unique approach to learning that made tech concepts relatable, Michelle's content quickly resonated with thousands of young women. Her leadership and innovative vision continue to drive our community forward, ensuring that every girlie has the support she needs to thrive.</p>
      </div>
    </div>

    {/* The Growth Section */}
    <div className="flex flex-col md:flex-row items-center mb-16">
      <BorderedImage
        src={image3}
        label="Community Growth"
        width="400px"
        height="400px"
        className="md:mr-8 mb-8 md:mb-0"
      />
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">The Growth: A Community on the Rise</h2>
        <p>Our community has grown rapidly, attracting 160,000 followers on TikTok and Instagram, with over 10,000 members actively engaging in our Discord. In just the past three months, we've reached 1.2 million young women with valuable resources and opportunities. This isn't just growth—it's a testament to the need for a supportive, inclusive space for women in tech.</p>
      </div>
    </div>

    {/* Big number and growing text */}
    <div className="w-full text-center my-16">
      <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 pixel-font" style={{ fontFamily: "'Press Start 2P', cursive" }}>
        153,104
      </h2>
      <p className="text-xl md:text-2xl pixel-font" style={{ fontFamily: "'Press Start 2P', cursive" }}>
        and growing...
      </p>
    </div>

    {/* Our Unique Approach Section */}
    <div className="flex flex-col md:flex-row-reverse items-center mb-16">
      <BorderedImage
        src={image4}
        label="Social Media"
        width="400px"
        height="400px"
        className="md:ml-8 mb-8 md:mb-0"
      />
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">Our Unique Approach: Meeting Gen Z Where They Are</h2>
        <p>At Computer Science Girlies, we understand that to truly make an impact, we need to meet young women where they are. That's why we leverage social media platforms like TikTok and Instagram to deliver content that is not only educational but also engaging and relatable. From these platforms, our members can transition into more structured environments like our Discord and SKOOL platforms, where they find a wealth of resources and a strong community.</p>
      </div>
    </div>

    {/* Structured Learning Section */}
    <div className="flex flex-col md:flex-row items-center mb-16">
      <BorderedImage
        src={image5}
        label="SKOOL Platform"
        width="400px"
        height="400px"
        className="md:mr-8 mb-8 md:mb-0"
      />
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">Structured Learning: The SKOOL Platform</h2>
        <p>Our SKOOL platform is designed to provide structured learning that equips our members with the skills they need to succeed in tech. From building a strong portfolio to acing technical interviews, our courses cover every aspect of career preparation. With expert-led workshops and real-world projects, SKOOL is where our members turn knowledge into action.</p>
      </div>
    </div>

    {/* Community and Support Section */}
    <div className="flex flex-col md:flex-row-reverse items-center mb-16">
      <BorderedImage
        src={image6}
        label="Discord Community"
        width="400px"
        height="400px"
        className="md:ml-8 mb-8 md:mb-0"
      />
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">Community and Support: The Heartbeat of CSG</h2>
        <p>Our Discord server is the heart of our community, where over 10,000 members connect, collaborate, and support each other daily. Whether it's peer resume reviews, mock interviews, or simply a word of encouragement, our community thrives on the collective strength and shared goals of its members. This is where girlies turn to lift each other up and make lasting connections.</p>
      </div>
    </div>

    {/* The #1000Jobs Challenge Section */}
    <div className="flex flex-col md:flex-row items-center mb-16">
      <BorderedImage
        src={image7}
        label="#1000Jobs Challenge"
        width="400px"
        height="400px"
        className="md:mr-8 mb-8 md:mb-0"
      />
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">The #1000Jobs Challenge: Making a Tangible Impact</h2>
        <p>The #1000Jobs Challenge is our flagship initiative, aiming to secure 1,000 jobs for women in our community. Through partnerships with top recruiters, expert-led workshops, and hands-on support, we are paving the way for our members to land meaningful roles in the tech industry. This isn't just about jobs—it's about changing lives and making a lasting impact on the tech landscape.</p>
      </div>
    </div>

    {/* Our Values Section */}
    <div className="flex flex-col md:flex-row-reverse items-center mb-16">
      <BorderedImage
        src={image8}
        label="Our Values"
        width="400px"
        height="400px"
        className="md:ml-8 mb-8 md:mb-0"
      />
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">Our Values: The Foundation of CSG</h2>
        <p>At the core of Computer Science Girlies are values that guide everything we do: inclusivity, continuous learning, collaboration, and innovation. These values are not just words—they are the principles that drive our community to be a force for change in the tech industry. We believe that by staying true to these values, we can create a space where every woman feels empowered to achieve her full potential.</p>
      </div>
    </div>

    {/* Join Us Section */}
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="transform scale-[3]">
          <JoinUs />
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">Join Us: Be a Part of the Change</h2>
        <p>We're not just a community; we're a movement. Whether you're a young woman looking to break into tech, an investor wanting to support the next generation, or a company seeking diverse talent, there's a place for you in Computer Science Girlies. Together, we can redefine diversity in tech. Donate, join our community, or partner with us today and help us continue to make a difference.</p>
      </div>
    </div>
  </div>
);

export default About;