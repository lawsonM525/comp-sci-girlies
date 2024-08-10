import React from 'react';
import { Link } from 'react-router-dom';
import JoinUs from './ui/JoinUs';
import documentImage from '../assets/icons/document.png';
import folderImage from '../assets/icons/folder.png';
import linkImage from '../assets/icons/html-doc.png';

const FooterItem = ({ to, label, iconType, mobileLabel }) => {
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
      <img src={getIcon()} alt={`${iconType} Icon`} className="h-8 w-8" />
      <span className="text-xs mt-1 hidden sm:inline" style={{ fontFamily: 'Arial, sans-serif' }}>{label}</span>
      <span className="text-xs mt-1 sm:hidden" style={{ fontFamily: 'Arial, sans-serif' }}>{mobileLabel || label}</span>
    </Link>
  );
};

const Footer = () => (
  <footer className="fixed bottom-0 left-0 right-0 bg-[#e94d70] text-white p-2 flex justify-between items-center">
    <div className="flex space-x-4">
      <FooterItem to="/" label="Home" iconType="folder" />
      <FooterItem to="/events" label="Events" iconType="document" />
      {/**<FooterItem to="/blog" label="Blog" iconType="folder" />*/}
      <FooterItem to="/contact" label="Email Us" mobileLabel="Email" iconType="link" />
      <FooterItem to="/testimonials" label="Testimonials" iconType="document" />
    </div>
    <div className="ml-4 flex space-x-2">
      <div className="hidden sm:block">
        <JoinUs buttonText="Join Us!" />
      </div>
      <Link to="/Donate" className="pixel-button-container">
        <button className="pixel-button">Donate</button>
      </Link>
    </div>
  </footer>
);

export default Footer;