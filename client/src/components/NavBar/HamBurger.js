import React from 'react';

const HamBurger = (props) => {
    return (
        <button click="sidebarOpen = true" className="text-gray-500 focus:outline-none lg:hidden">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"></path>
            </svg>
        </button>
    );
};

export default HamBurger;
