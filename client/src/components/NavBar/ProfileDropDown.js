import React, { useState } from 'react';
import { AdminSignOut } from '../../redux/Admin/actions';
import { connect } from 'react-redux';

const ProfileDropDown = ({ onSignOut }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const baseClass = 'absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none';
    const dropDownClass = isDropdownOpen ? baseClass : `hidden ${baseClass}`;

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        onSignOut();
    };


    return (
            <div className="relative inline-block">
                <div>
                    <button type="button" className="relative block h-8 w-8 rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        onClick={handleDropdownClick}>
                        <img className="h-full w-full object-cover"
                            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                            alt="avatar" />
                    </button>
                </div>

                <div className={dropDownClass}>
                    <div className="py-1" role="none">
                        <button className="text-gray-700 block px-4 py-2 text-sm hover:text-gray-300">Change Password</button>
                        <button onClick={handleLogout} className="text-gray-700 block px-4 py-2 text-sm hover:text-gray-300">Sign Out</button>
                    </div>
                </div>
            </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSignOut: () => dispatch(AdminSignOut()),
    };
};

export default connect(null, mapDispatchToProps)(ProfileDropDown);
