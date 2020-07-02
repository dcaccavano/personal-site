import React from 'react';

const AccordionItem = ({ position, company, date, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div
        className={`box-border flex items-center justify-between relative cursor-pointer p-4 border-gray-300 ${isOpen ? "border-b-0" : "border-b"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="mr-4">
          <span className="text-gray-800 mr-2 font-semibold">{position}</span>
          <span className="text-gray-800">{company}</span>
          <span className="text-gray-800 hidden md:inline"> : {date}</span>
        </div>
        {
          isOpen
          ?
            <svg
              className="text-main w-6"
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
              className="text-gray-600 w-6"
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
