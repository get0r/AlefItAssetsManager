import React, { useEffect, useState } from 'react'
import Logo from './Logo';
import MenuItem from './MenuItem';

const SideBar = () => {
    const [shouldRender, setShouldRender] = useState(false);

    const isHomeActive = window.location.pathname === '/' ? true : false;
    const isEmpActive = window.location.pathname === '/employees' ? true : false;

    const onMenuItemClick = e => {
        setShouldRender(!shouldRender);
    };

    return (
        <div className="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
            <Logo />
            <nav  className="mt-10">
                <MenuItem label="Home" active={isHomeActive} to="/" onClick={onMenuItemClick}/>
                <MenuItem label="Employee" active={isEmpActive} to="/employees" onClick={onMenuItemClick}/>
            </nav>
        </div>
    );
};

export default SideBar;
