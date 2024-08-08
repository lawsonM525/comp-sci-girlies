import React from 'react';

const NavBar = () => (
  <nav className="bg-pink-500 p-4 flex justify-between items-center">
    <ul className="flex space-x-6 text-white">
      <li><a href="#about" className="hover:underline">About Us</a></li>
      <li><a href="#challenge" className="hover:underline">#1000Jobs</a></li>
    </ul>
    <div className="text-white text-2xl font-bold pixel-font">
      &lt;CSG/&gt;
    </div>
    <ul className="flex space-x-6 text-white">
      <li><a href="#join" className="hover:underline">Join Us</a></li>
      <li><a href="#donate" className="hover:underline">Donate</a></li>
    </ul>
  </nav>
);

export default NavBar;