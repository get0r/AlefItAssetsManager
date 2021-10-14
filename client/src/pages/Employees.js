import React from 'react';
import EmployeeDashboard from '../containers/EmployeeDashboard';
import NavBar from '../components/NavBar/NavBar';
import SideBar from '../components/SideBar/SideBar';

const Employees = (props) => {
    return (
        <div>
            <div className="flex h-screen bg-gray-200">
                <SideBar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <NavBar />
                    <EmployeeDashboard />
                </div>
            </div>
        </div>
    );
};

export default Employees;
