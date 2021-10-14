import React from 'react';

const Logo = (props) => {
    return (
        <div className="flex items-center justify-center mt-8 py-3 border-b-2 font-mono border-gray-300">
            <div className="flex items-center">
                <span className="text-white text-3xl mx-2 px-3 font-extrabold">Alef</span>
                <span className="text-2xl font-semibold text-white">It Assets Manager <span className="text-base font-light">v1.0.0</span></span>
            </div>
        </div>
    );
};

export default Logo;
