import React from 'react';
   import NavBar from './components/NavBar';
   import HeroSection from './components/HeroSection';
   import IntroSection from './components/IntroSection';
   import HighlightedSections from './components/HighlightedSections';
   import EventsPreview from './components/EventsPreview';
   import BlogTeaser from './components/BlogTeaser';
   import PartnerCompanies from './components/PartnerCompanies';

   const App = () => (
     <div className="font-sans">
       <NavBar />
       <HeroSection />
       <IntroSection />
       <HighlightedSections />
       <EventsPreview />
       <BlogTeaser />
       <PartnerCompanies /> 
     </div>
   );

   export default App;