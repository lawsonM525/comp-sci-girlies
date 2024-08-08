import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/circle_logo.png'; // Adjust the path as needed

const NavBar = () => (
  <nav className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
    <ul className="flex space-x-6 text-white">
      <li><Link to="/About" className="hover:underline font-semibold text-xl pixel-font">About Us</Link></li>
      <li><Link to="/JobsChallenge" className="hover:underline font-semibold text-xl pixel-font">#1000Jobs</Link></li>
    </ul>
    <Link to="/" className="flex items-center">
      <img src={logoImage} alt="CSG Logo" className="h-10 w-auto" />
    </Link>
    <ul className="flex space-x-6 text-white">
      <li><Link to="/JoinUs" className="hover:underline font-semibold text-xl pixel-font">Join Us</Link></li>
      <li><Link to="/Donate" className="hover:underline font-semibold text-xl pixel-font">Donate</Link></li>
    </ul>
  </nav>
);

export default NavBar;