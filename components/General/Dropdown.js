import React, { useState } from 'react';

function Dropdown({ options, selectedOption, onOptionSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(selectedOption);

    function handleOptionSelect(option) {
        setSelected(option);
        onOptionSelect(option);
        setIsOpen(false);

        console.log(selected);
    }

    return (
        <div className="relative w-[20rem]">
            <div
                className="bg-white border-2 border-mainBlack rounded-md p-2 cursor-pointer text-gray dark:bg-darkGrid dark:text-boneWhite dark:border-darkGrid dark:bg-opacity-80"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex justify-between items-center">
                    <span>{selected}</span>
                    <svg viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transform ${isOpen ? 'rotate-180' : ''
                            } transition-transform duration-200 fill-mainBlack dark:fill-boneWhite stroke-2`}>
                        <path fillRule="evenodd" d="M13.9393 16.2241C12.7426 17.8956 10.2574 17.8956 9.06068 16.2241L1.47458 5.62769C0.0532949 3.64242 1.47231 0.881347 3.9139 0.881347L19.0861 0.881347C21.5277 0.881347 22.9467 3.64241 21.5254 5.62769L13.9393 16.2241Z" clipRule="evenodd" />
                    </svg>

                </div>
            </div>
            {isOpen && (
                <ul className="absolute z-10 bg-boneWhite border-2 border-mainBlack rounded-md mt-1 text-mainBlack w-full dark:bg-neutral-400 dark:text-gray dark:border-darkGrid">
                    {options.map((option) => (
                        <li
                            key={option}
                            className={`py-1 cursor-pointer px-2 hover:bg-darkGrid ${option === selected ? 'font-semibold text-mainBlack dark:text-purBlue' : 'font-medium text-mainBlack'
                                }`}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;


