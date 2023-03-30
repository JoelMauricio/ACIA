import { useState } from 'react';

const FaqItem = ({ question, answer }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
      setExpanded(!expanded);
    };

    return (
      <div className='mx-4'>
        <button
          onClick={toggleExpanded}
          className="text-lg font-semibold py-2 px-2 rounded-md hover:bg-gray-300"
        >
          {"- " + question}
        </button>
        {expanded && (
          <div className="bg-gray-100 text-[#4e4e4e] px-4 rounded-md">{answer}</div>
        )}
      </div>
    );
  };

  export default FaqItem