import React from 'react';

import placeholderImage from '../../assets/images/background.svg';

const ItemCard = ({ item, onItemClick, onDelete }) => {
    return (
        <div className="bg-white hover:shadow-xl shadow-md h-96 mx-3 my-4 rounded-xl flex flex-col justify-around items-center overflow-hidden sm:flex-row sm:h-52 sm:w-3/5 md:w-11/12"
            onClick={(e) => onItemClick(item)}>
            <img className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
                src={placeholderImage}
                alt="" />
            <div className="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 pl-6 sm:h-full sm:items-baseline sm:w-1/2">
                <div className="flex flex-col justify-start items-baseline">
                    <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                        {item.name}
                    </h1>
                    <span className="text-xs text-indigo-300 mt-0">Brand: {item.brand}</span>
                    <span className="text-xs text-indigo-300 mt-0">Model: {item.model}</span>
                    <span className="text-xs text-indigo-300 mt-0">Service No: {item.serviceNo}</span>
                </div>
                <p className="text-xs text-gray-500 w-4/5">
                    { item.serialNo ? `Serial No: ${item.serialNo}` :
                        item.imeiNo ? `IMEI No: ${item.imeiNo}` :
                            item.systemModel ? `System Model: ${item.systemModel}` : null
                    }
                </p>
                <div className="w-full flex items-center">
                    <p className="text-gray-500">{item.isFunctional ? `Functional` : `Not Functional`}</p>

                    <button className="flex-no-shrink bg-red-500 hover:bg-red-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider hover:border-red-500 text-white rounded-full transition ease-in duration-300"
                            onClick={e => { e.stopPropagation(); onDelete(item._id); }}>DELETE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
