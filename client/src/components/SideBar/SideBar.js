import React from 'react'
import Logo from './Logo';
import MenuItem from './MenuItem';

const SideBar = (props) => {
    const isHomeActive = window.location.pathname === '/' ? true : false;
    const isEmpActive = window.location.pathname === '/employees' ? true : false;

    return (
        <div className="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
            <Logo />
            <nav  className="mt-10">
                <MenuItem label="Home" active={isHomeActive}/>
                <MenuItem label="Employee" active={isEmpActive} />
            </nav>
        </div>
    );
};

export default SideBar;
