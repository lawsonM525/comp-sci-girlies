import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import HighlightedSections from './components/HighlightedSections';
import EventsPreview from './components/EventsPreview';
import BlogTeaser from './components/BlogTeaser';
import PartnerCompanies from './components/PartnerCompanies';
/** PAGES */
import About from './components/About';
import Events from './components/Events';
import Blog from './components/Blog';
import JobsChallenge from './components/JobsChallenge';
import Donate from './components/Donate';
import JoinUs from './components/JoinUs';

const App = () => (
  <Router>
    <div className="font-sans min-h-screen bg-[#FF8FAB]">
      <NavBar />
      <Routes>
        <Route path="/" element={
          <div className="bg-transparent">
            <HeroSection />
            {/**<IntroSection />
            <HighlightedSections /> */}
            <EventsPreview />
            <BlogTeaser />
            {/**<PartnerCompanies />*/}
          </div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/1000jobs" element={<JobsChallenge />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/JoinUs" element={<JoinUs />} />
      </Routes>
    </div>
  </Router>
);

export default App;