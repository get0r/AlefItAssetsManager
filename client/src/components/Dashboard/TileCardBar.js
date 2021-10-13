import React from 'react';
import TileCard from './TileCard';

const TileCardBar = () => {
    return (
            <div  className="mt-4">
                <div  className="flex flex-wrap -mx-6">
                    <TileCard number="234, 567" label="Available Categories" />
                    <TileCard number="256, 567" label="New Employees" />
                    <TileCard number="134, 567" label="It Items" />
                </div>
            </div>
    );
};

export default TileCardBar;
