import React from 'react';
import { Button } from "../components/ui/button";

const IntroSection = () => (
  <div className="bg-white py-12">
    <div className="container mx-auto px-4">
      <div className="flex items-center">
        <div className="w-1/2 pr-8">
          <h2 className="text-4xl font-bold mb-4 text-pink-500 pixel-font">About Our Community</h2>
          <p className="mb-4 text-lg">Computer Science Girlies is a vibrant community of 150,000+ young women in tech, ages 16-25. We're here to support, inspire, and empower each other in the world of technology.</p>
          <Button variant="outline" className="text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white pixel-font">
            SPARK!
          </Button>
        </div>
        <div className="w-1/2">
          <div className="bg-gradient-to-br from-purple-400 to-pink-500 h-64 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
            <span className="text-6xl">👩‍💻</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IntroSection;