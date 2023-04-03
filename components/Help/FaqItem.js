import { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="shadow-md rounded-[8px] my-2 w-full">

      <button
        onClick={toggleExpanded}
        className="text-lg text-left py-2 px-2 rounded-md hover:bg-gray-300 w-full font-medium hover:text-purBlue"
      >
        {"- " + question}
      </button>
      {expanded && (
        <div className="bg-gray-100 text-[#4e4e4e] text-justify pt-1 pb-4 px-4 rounded-md">{answer}</div>
      )}
    </div>
  );
};

export default FaqItem