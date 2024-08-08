import React from 'react';

const JobsChallenge = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-6">#1000jobs Challenge</h1>
    <p className="mb-4">
      The #1000jobs Challenge is our initiative to help 1,000 women secure jobs in the tech industry by the end of 2024.
    </p>
    <h2 className="text-2xl font-semibold mt-6 mb-4">How It Works</h2>
    <ol className="list-decimal list-inside mb-4">
      <li>Sign up for the challenge</li>
      <li>Access our exclusive job preparation resources</li>
      <li>Attend virtual job fairs and networking events</li>
      <li>Receive mentorship and interview coaching</li>
      <li>Apply to jobs with our partner companies</li>
    </ol>
    <h2 className="text-2xl font-semibold mt-6 mb-4">Progress Tracker</h2>
    <div className="bg-gray-200 rounded-full h-6 w-full">
      <div className="bg-blue-500 rounded-full h-6" style={{width: '35%'}}></div>
    </div>
    <p className="mt-2">350 out of 1000 jobs secured</p>
    <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Join the Challenge
    </button>
  </div>
);

export default JobsChallenge;