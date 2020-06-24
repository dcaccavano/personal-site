import React from 'react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div
        className={`flex items-center justify-between  cursor-pointer py-2 px-4 border-gray-300 ${isOpen ? "border-b-0" : "border-b"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray800">{title}</span>
        {
          isOpen
          ?
            <svg
              className="text-blue-500 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 15l7-7 7 7"></path>
            </svg>
          :
            <svg
              className="text-gray-700 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
        }
      </div>
      <div className={`pt-0 pb-4 px-4 border-gray-300 ${isOpen ? "block border-b" : "hidden border-b-0"}`}>
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
