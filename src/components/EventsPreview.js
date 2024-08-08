import React from 'react';
import { Button } from "./ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../components/ui/carousel";

const EventsPreview = () => (
  <div className="bg-transparent py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6 text-center text-pink-500 pixel-font">Upcoming Events</h2>
      <Carousel className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {[
            'Tech Talk: AI in Healthcare',
            'Workshop: Building Your First App',
            'Panel: Women in Cybersecurity',
          ].map((event, index) => (
            <CarouselItem key={index}>
              <Card className="border-4 border-pink-500 bg-transparent">
                <CardContent className="flex aspect-square items-center justify-center p-6 bg-transparent">
                  <span className="text-lg font-semibold pixel-font text-white">{event}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-center mt-6">
        <Button variant="outline" className="text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white pixel-font bg-transparent">
          View All Events
        </Button>
      </div>
    </div>
  </div>
);

export default EventsPreview;