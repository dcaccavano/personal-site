import React from 'react';

const Accordion = ({ children }) => {
  return (
    <div className="w-full relative">
      {children}
    </div>
  );
};

export default Accordion;
