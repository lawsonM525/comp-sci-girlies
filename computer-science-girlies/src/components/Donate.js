import React from 'react';

const Donate = () => (
  <div className="flex flex-col h-screen">
    <div className="flex-grow flex flex-col">
      <iframe 
        src="https://hcb.hackclub.com/donations/start/computer-science-girlies" 
        className="w-full h-full border-0"
        name="donateFrame" 
        scrolling="yes" 
        frameBorder="0" 
        allowFullScreen
      />
    </div>
  </div>
);

export default Donate;