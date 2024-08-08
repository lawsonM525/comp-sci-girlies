import React from 'react';

const PartnerCompanies = () => (
  <div className="bg-white py-12 overflow-hidden">
    <h2 className="text-4xl font-bold mb-6 text-center text-pink-500 pixel-font">Our Partners</h2>
    <div className="flex animate-scroll">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="flex-none w-48 h-24 mx-4 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-500 pixel-font">Company {index + 1}</span>
        </div>
      ))}
    </div>
  </div>
);

export default PartnerCompanies;