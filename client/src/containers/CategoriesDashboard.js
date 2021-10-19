import React from 'react'
import CategoriesContainer from './CategoriesContainer';

const CategoriesDashboard = ({ searchTerm }) => {

    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <CategoriesContainer searchTerm={searchTerm} />
        </main>

    );
};

export default CategoriesDashboard;
