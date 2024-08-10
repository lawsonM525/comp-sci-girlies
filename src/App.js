import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Events from './components/Events';
import Blog from './components/Blog';
import JobsChallenge from './components/JobsChallenge';
import Donate from './components/Donate';
import JoinUs from './components/JoinUs';
import FullBlogPost from './components/FullBlogPost';
import Resources from './components/Resources'; // Added this import

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="font-sans min-h-screen bg-[#FF8FAB] flex flex-col">
      {isHomePage && <NavBar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={
            <div className="bg-transparent">
              <HeroSection />
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/1000jobs" element={<JobsChallenge />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/JoinUs" element={<JoinUs />} />
          <Route path="/blog/:id" element={<FullBlogPost />} />
          <Route path="/resources" element={<Resources />} /> {/* Added this route */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;