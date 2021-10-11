import React from 'react';
import HamBurger from './HamBurger';
import SearchBar from './SearchBar';
import ProfileDropDown from './ProfileDropDown';

const NavBar = (props) => {
    return (
        <header  className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
            <div  className="flex items-center">
                <HamBurger />
                <SearchBar />
            </div>

            <div  className="flex items-center">
                <ProfileDropDown />
            </div>
        </header>

    );
};

export default NavBar;
