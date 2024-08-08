import React from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const BlogTeaser = () => (
  <div className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6 text-center text-pink-500 pixel-font">Latest from Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          'My Journey into Tech',
          'Tips for Acing Your First Interview',
          'The Future of Women in AI',
        ].map((post, index) => (
          <Card key={index} className="border-4 border-pink-500 transform hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle className="pixel-font">{post}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="text-pink-500 pixel-font">Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center mt-6">
        <Button variant="outline" className="text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white pixel-font">
          Visit Our Blog
        </Button>
      </div>
    </div>
  </div>
);

export default BlogTeaser;