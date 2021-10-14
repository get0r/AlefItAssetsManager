import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ label, active, to, onClick }) => {
    const baseClass = 'flex items-center mt-4 py-4 px-6 bg-opacity-25 text-gray-100';
    const menuClass = active ? `bg-gray-400 ${baseClass}` : baseClass;

    return (
        <Link className={menuClass} to={to} onClick={onClick}>
            <span className="mx-3">{ label }</span>
        </Link>
    );
};

export default MenuItem;
