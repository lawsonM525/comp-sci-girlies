import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/circle_logo.png'; // Adjust the path as needed

const NavBar = () => (
  <nav className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
    <ul className="flex space-x-6 text-white">
      <li><Link to="/About" className="font-semibold text-lg pixel-font transition-transform duration-200 hover:scale-110 inline-block">About Us</Link></li>
      <li><Link to="/1000Jobs" className="font-semibold text-lg pixel-font transition-transform duration-200 hover:scale-110 inline-block">#1000Jobs</Link></li>
    </ul>
    <Link to="/" className="flex items-center hover:scale-110">
      <img src={logoImage} alt="CSG Logo" className="h-10 w-auto" />
    </Link>
    <ul className="flex space-x-6 text-white">
      <li><Link to="/JoinUs" className="font-semibold text-lg pixel-font transition-transform duration-200 hover:scale-110 inline-block">Join Us</Link></li>
      {/**TODO: Replace with a different link like Resources or Events or Contact Us */}
      <li><Link to="/Donate" className="font-semibold text-lg pixel-font transition-transform duration-200 hover:scale-110 inline-block">Donate</Link></li>
    </ul>
  </nav>
);

export default NavBar;