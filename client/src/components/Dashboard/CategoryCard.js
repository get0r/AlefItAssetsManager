import React from 'react';

const CategoryCard = ({ category, onDelete }) => {

    return (
        <div className="max-w-3xl mx-auto z-auto">
            <div className="flex flex-col">
                <div className="bg-white border border-white shadow-lg m-4">
                    <div className="flex-none sm:flex">
                        <div className="flex-auto sm:ml-5 justify-evenly">
                            <div className="flex items-center justify-between sm:mt-2">
                                <div className="flex items-center justify-center">
                                    <div className="flex flex-row items-center justify-center">
                                        <div className="flex-auto text-gray-500 my-1">
                                            <span className="mr-3 ">{ category.name }</span><span className="mr-3 border-r border-gray-200  max-h-0"></span>
                                        </div>
                                        <div className="flex pt-2  text-sm text-gray-500">
                                            <button className="flex-no-shrink px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-none text-red-500 transition ease-in duration-300"
                                                onClick={ () => onDelete(category._id) }>DELETE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
