import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryList = ({ categories, onDeleteClick }) => {
    const renderCats = () => {
        return categories.map(cat => (
            <CategoryCard onDelete={onDeleteClick} key={cat._id} category={ cat } />
        ));
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 w-full -my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                {
                    renderCats()
                }
            </div>
        </div>
    );
};

export default CategoryList;
