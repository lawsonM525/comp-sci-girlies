import React from 'react';
import { PopupButton } from '@typeform/embed-react';

const JoinUs = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="pixel-button-container">
      <PopupButton
        id="qv7O6d5r"
        className="pixel-button"
        onClick={handleClick}
      >
        Join Us!
      </PopupButton>
    </div>
  );
};

export default JoinUs;