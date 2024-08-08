import React from 'react';
import { Button } from "../components/ui/button";
import JoinUs from "./ui/JoinUs";

const HeroSection = () => (
  <div className="text-white text-center py-20 relative overflow-hidden h-screen flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold mb-4 pixel-font">Computer Science Girlies</h1>
    <p className="text-1xl mb-12 pixel-font">Redefining diversity in tech</p>
    <div className="mt-8">
      <JoinUs />
    </div>
  </div>
);

export default HeroSection;