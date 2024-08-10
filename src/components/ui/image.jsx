import React from 'react';
import PropTypes from 'prop-types';

const BorderedImage = ({ 
  src, 
  label,
  alt = label,
  className = 'w-32 h-40', // Default size, adjust as needed
  borderWidth = 4, 
  borderColor = 'white', 
  width = '128px',
  height = '160px'
}) => {
  const containerStyle = {
    width: width,
    height: height,
    padding: borderWidth,
  };

  const imageStyle = {
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: 'calc(100% - 20px)', // Adjust height for label
    border: `${borderWidth}px solid ${borderColor}`,
  };

  return (
    <div className={`inline-block ${className}`} style={containerStyle}>
      <div 
        style={imageStyle}
        role="img" 
        aria-label={alt}
      />
      <span className="block text-xs mt-1 text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
        {label}
      </span>
    </div>
  );
};

BorderedImage.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default BorderedImage;