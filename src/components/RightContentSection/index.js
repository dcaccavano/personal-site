import React from 'react';

const RightContentSection = ({ children }) => {
  return (
    <div className="w-full bg-white rounded shadow-md relative p-4">
      {children}
    </div>
  );
};

export default RightContentSection;
