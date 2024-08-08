import React from 'react';
import { Button } from "../components/ui/button";
import JoinUs from "./ui/JoinUs";

const HeroSection = () => (
  <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white text-center py-20 relative overflow-hidden h-screen flex flex-col justify-center items-center">
    <div className="absolute inset-0 opacity-20">
      {[...Array(100)].map((_, i) => (
        <div key={i} className="pixel absolute" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: '10px',
          height: '10px',
          backgroundColor: 'white',
        }}></div>
      ))}
    </div>
    <h1 className="text-6xl font-bold mb-4 pixel-font">Computer Science Girlies</h1>
    <p className="text-2xl mb-6 pixel-font">Empowering young women in tech</p>
    < JoinUs />
  </div>
);

export default HeroSection;