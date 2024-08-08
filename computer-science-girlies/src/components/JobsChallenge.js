import React from 'react';
import JoinUs from "./ui/JoinUs";

const JobsChallenge = () => (
  <div className="container mx-auto px-4 py-20 pt-24 text-white">
    <h1 className="text-4xl font-bold mb-8 text-center pixel-font">#1000jobs Challenge</h1>
    
    <div className="grid grid-cols-4 gap-8">
      <div className="col-span-4 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">Our Plan</h2>
        <p className="mb-4">
          We're partnering with recruiters to get access to our top diverse talent. We're also bringing in employees and experts to give workshops on various important topics like:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>How to ace a technical interview</li>
          <li>How to LinkedIn like a girlboss</li>
          <li>Resume building and personal branding</li>
          <li>Networking strategies</li>
        </ul>
      </div>

      <div className="col-span-2 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">Training Roadmap</h2>
        <ol className="list-decimal list-inside mb-4">
          <li><strong>Gain Experience:</strong> Participate in projects and internships</li>
          <li><strong>Show Experience:</strong> Create a compelling portfolio and resume</li>
          <li><strong>Share Experience:</strong> Leverage social media and professional networks</li>
          <li><strong>Ace the Technical Interview:</strong> Master coding challenges</li>
          <li><strong>Ace the Behavioral Interview:</strong> Present yourself effectively</li>
        </ol>
      </div>

      <div className="col-span-2 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">Our Partners</h2>
        <p className="mb-4">
          We've partnered with leading companies to recruit from our community and provide workshops. Here are some of our amazing partners:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Company A</li>
          <li>Company B</li>
          <li>Company C</li>
          <li>Company D</li>
        </ul>
      </div>

      <div className="col-span-4 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 pixel-font">Progress Tracker</h2>
        <div className="bg-gray-200 rounded-full h-6 w-full mb-4">
          <div className="bg-pink-700 rounded-full h-6" style={{width: '35%'}}></div>
        </div>
        <p className="mb-6">350 out of 1000 jobs secured</p>
      </div>

      <div className="col-span-4 mt-4">
        <JoinUs buttonText="Join the Challenge" className="w-full" />
      </div>
    </div>
  </div>
);

export default JobsChallenge;