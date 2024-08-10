import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/circle_logo.png'; // Adjust the path as needed
import documentImage from '../assets/icons/document.png'; // Import the document image
import folderImage from '../assets/icons/folder.png';
import linkImage from '../assets/icons/html-doc.png';

const NavItem = ({ to, label, iconType }) => {
  const getIcon = () => {
    switch (iconType) {
      case 'document':
        return documentImage;
      case 'folder':
        return folderImage;
      case 'link':
        return linkImage;
      default:
        return documentImage;
    }
  };

  return (
    <Link to={to} className="flex flex-col items-center p-2 rounded transition-transform duration-200 hover:scale-110">
      <img src={getIcon()} alt={`${iconType} Icon`} className="h-10 w-10" />
      <span className="text-xs mt-1" style={{ fontFamily: 'Arial, sans-serif' }}>{label}</span>
    </Link>
  );
};

const NavBar = () => (
  <nav className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
    <ul className="flex space-x-6 text-white">
      <li><NavItem to="/About" label="Our Story.txt" iconType="document" /></li>
      <li><NavItem to="/1000Jobs" label="1000 Jobs.txt" iconType="document" /></li>
    </ul>
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
      <Link to="/" className="flex flex-col items-center hover:scale-110 transition-transform duration-200">
        <img src={logoImage} alt="CSG Logo" className="h-10 w-auto" />
        <span className="text-xs mt-1 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>Home.html</span>
      </Link>
    </div>
    <ul className="flex space-x-6 text-white">
      <li><NavItem to="/resources" label="Resources" iconType="folder" /></li>
      {/**TODO: Replace with a different link like Resources or Events or Contact Us */}
      {/**<li><NavItem to="/JoinUs" label="JOIN US.html" iconType="link" /></li>*/}
    </ul>
  </nav>
);

export default NavBar;