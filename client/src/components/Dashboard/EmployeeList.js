import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees }) => {
    const renderEmployees = () => {
        return employees.map(employee => (
            <EmployeeCard key={employee._id} employee={ employee } />
        ));
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full -my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                {
                    renderEmployees()
                }
            </div>
        </div>
    );
};

export default EmployeeList;
