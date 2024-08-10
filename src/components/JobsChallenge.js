import React from 'react';
import JoinUs from "./ui/JoinUs";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BorderedImage from './ui/image';
import workshopImage from '../assets/images/linkedin-workshop.jpg';  

// Import the Grammarly logo
import grammarly from '../assets/images/grammarly-logo.png'; // Adjust the path as needed

const JobsChallenge = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto px-4 py-10 pb-24 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center pixel-font">#1000Jobs Challenge: Empowering Women in Tech</h1>
      
      <div className="grid grid-cols-5 gap-8">
        {/* Our Mission Section */}
        <div className="col-span-5 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 pixel-font">Our Mission</h2>
          <p className="mb-4">
            The #1000Jobs Challenge is our ambitious initiative aimed at securing 1,000 jobs for young women in tech. By partnering with leading recruiters and experts, we're providing our community with the resources, training, and support they need to land their dream jobs and excel in their careers.
          </p>
          <p className="mb-4">
            Our strategy includes hands-on workshops, targeted training, and exclusive job opportunities that are designed to bridge the gap between education and employment.
          </p>
        </div>

        {/* Training Roadmap Section */}
        <div className="col-span-2 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 pixel-font">Training Roadmap</h2>
          <ol className="list-decimal list-inside mb-4 text-sm">
            <li><strong>Gain Experience:</strong> Participate in real-world projects and internships</li>
            <li><strong>Show Experience:</strong> Build a standout portfolio and resume</li>
            <li><strong>Share Experience:</strong> Harness the power of social media and professional networks</li>
            <li><strong>Ace the Technical Interview:</strong> Master coding challenges and problem-solving</li>
            <li><strong>Ace the Behavioral Interview:</strong> Present yourself confidently and effectively</li>
          </ol>
          <a 
            href="https://coda.io/@michelle-lawson/computer-science-girlies#:~:text=1%2C000%20Jobs%20for%20the%20Computer%20Science%20Girlies&text=%2C%20an%20exclusive%20community%20dedicated%20to,assistance%20and%20mental%20health%20support." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="pixel-button-container w-full"
          >
            <button className="pixel-button w-full">View Full Roadmap</button>
          </a>
        </div>

        {/* Expert-Led Workshops Section */}
        <div className="col-span-3 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 pixel-font">Expert-Led Workshops</h2>
          <div className="flex">
            <div className="flex-1 pr-4">
              <p className="mb-4">
                To maximize the chances of success for our girlies, we're hosting workshops led by industry experts on topics such as:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>How to ace a technical interview</li>
                <li>How to LinkedIn like a Girlboss</li>
                <li>Resume building and personal branding</li>
                <li>Networking strategies for the digital age</li>
              </ul>
            </div>
            <div className="flex items-center">
              <BorderedImage
                src={workshopImage}
                label="LinkedIn Like a Girlboss Workshop"
                alt="Upcoming LinkedIn workshop"
                width="270px"
                height="200px"
              />
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="col-span-5 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 pixel-font">Our Partners</h2>
          <p className="mb-4">
            We're proud to collaborate with companies like Grammarly to recruit top diverse talent from our community. We're actively seeking more partners to help us connect our members with meaningful job opportunities.
          </p>
          <img src={grammarly} alt="Grammarly logo" className="w-1/3 h-auto" />

        </div>

        {/* Progress Tracker Section */}
        <div className="col-span-5 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 pixel-font">Progress Tracker</h2>
          <div className="bg-gray-200 rounded-full h-6 w-full mb-4">
            <div className="bg-pink-700 rounded-full h-6" style={{width: '0.2%'}}></div> {/* Adjusted to reflect 2 out of 1000 */}
          </div>
          <p className="mb-6">2 out of 1000 jobs secured</p>
          <p className="text-sm italic">*Updated regularly to reflect the growing impact of our challenge.</p>
        </div>

        {/* Call to Action Section */}
        <div className="col-span-5 mt-4 flex justify-between">
          <div className="w-[48%]">
            <JoinUs buttonText="Join the Challenge" className="w-full" />
          </div>
          <div className="w-[48%]">
            <Link to="#" onClick={(e) => {
              e.preventDefault();
              window.location.href = 'mailto:michellelawsonmedia@gmail.com';
            }} className="pixel-button-container w-full">
              <button className="pixel-button w-full">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsChallenge;