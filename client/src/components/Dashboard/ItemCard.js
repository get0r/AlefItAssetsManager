import React from 'react';

import placeholderImage from '../../assets/images/background.svg';

const ItemCard = ({ item }) => {
    return (
        <div className="p-4 m-4 bg-white shadow-xl max-w-xl rounded-xl flex justify-start dark:bg-gray-800 md:flex-row flex-col gap-4">
            <div className="relative">
                <img src={placeholderImage} alt="" className="rounded-xl w-full md:w-auto md:max-h-40" />
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex items-start justify-between text-gray-700 dark:text-white my-2 md:m-0">
                    <p className="text-xl leading-5">
                        { item.name }
                    </p>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs my-2 md:m-0">
                    <svg width="10" height="10" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z">
                        </path>
                    </svg>
                    { item.model }
                    <svg width="10" height="10" fill="currentColor" className="ml-6 mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z">
                        </path>
                    </svg>
                    { item.serviceNo }
                </div>
                <div className="flex items-start my-2 md:m-0">
                    <div className="flex flex-col items-start justify-center ml-2">
                        <span className="text-gray-600 dark:text-gray-200 text-sm flex items-center">
                            { item.brand }
                        </span>
                        <span className="text-gray-400 text-xs">
                            { item.isFunctional }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;