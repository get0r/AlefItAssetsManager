import React, { useState } from 'react';
import EmployeeDashboard from '../containers/EmployeeDashboard';
import NavBar from '../components/NavBar/NavBar';
import SideBar from '../components/SideBar/SideBar';
import CategoriesDashboard from '../containers/CategoriesDashboard';

const Categories = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onChangeSearchTerm = (term) =>{
        setSearchTerm(term);
    };

    return (
        <div>
            <div className="flex h-screen bg-gray-200">
                <SideBar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <NavBar onChangeSearchTerm={onChangeSearchTerm} />
                    <CategoriesDashboard searchTerm={searchTerm} />
                </div>
            </div>
        </div>
    );
};

export default Categories;
