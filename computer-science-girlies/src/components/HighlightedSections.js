import React from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Users, Computer, Heart, BookOpen } from 'lucide-react';

const HighlightedSections = () => (
  <div className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-4">
        {[
          { title: 'About Us', icon: <Users size={48} /> },
          { title: '#1000Jobs', icon: <Computer size={48} /> },
          { title: 'Join Us', icon: <Heart size={48} /> },
          { title: 'Donate', icon: <BookOpen size={48} /> },
        ].map((item, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow border-4 border-pink-500 transform hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle className="text-2xl pixel-font">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center text-pink-500">{item.icon}</div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button variant="link" className="text-pink-500 pixel-font">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default HighlightedSections;