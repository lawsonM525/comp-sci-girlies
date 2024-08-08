import React from 'react';
import { PopupButton } from '@typeform/embed-react';

const JoinUs = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <PopupButton
      id="01J4RJQAJMTN3QD66RHDQEEK1J"
      style={{ fontSize: 20 }}
      className="my-button"
      onClick={handleClick}
    >
      Join Us!
    </PopupButton>
  );
};

export default JoinUs;