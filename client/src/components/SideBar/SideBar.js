import React from 'react'
import Logo from './Logo';
import MenuItem from './MenuItem';

const SideBar = (props) => {
    return (
        <div  className="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"  className="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
            <Logo />
            <nav  className="mt-10">
                <MenuItem label="Home" />
                <MenuItem label="Employee" />
            </nav>
        </div>
    );
};

export default SideBar;
