import React from 'react';
import { PopupButton } from '@typeform/embed-react';

const JoinUs = ({ buttonText = "Join Us!", className = "" }) => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className={`pixel-button-container ${className}`}>
      <PopupButton
        id="qv7O6d5r"
        className="pixel-button w-full"
        onClick={handleClick}
      >
        {buttonText}
      </PopupButton>
    </div>
  );
};

export default JoinUs;