import React from 'react';

const RightContentSection = ({ children }) => {
  return (
    <div className="border-b border-gray-400 pb-8 last:border-b-0">
      {children}
    </div>
  );
};

export default RightContentSection;
