import React from 'react';

const MenuItem = ({ label, active }) => {
    const baseClass = 'flex items-center mt-4 py-4 px-6 bg-opacity-25 text-gray-100';
    const menuClass = active ? `bg-gray-400 ${baseClass}` : baseClass;

    return (
        <a className={menuClass} href="/">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
            </svg>

            <span className="mx-3">{ label }</span>
        </a>
    );
};

export default MenuItem;
