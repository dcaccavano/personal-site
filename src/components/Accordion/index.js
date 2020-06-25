import React from 'react';

const Accordion = ({ children }) => {
  return (
    <div className="w-full bg-white rounded shadow-md relative">
      {children}
    </div>
  );
};

export default Accordion;
