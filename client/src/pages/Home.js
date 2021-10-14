import React from 'react';
import Dashboard from '../containers/Dashboard';
import NavBar from '../components/NavBar/NavBar';
import SideBar from '../components/SideBar/SideBar';

const Home = () => {
    return (
        <div className="flex h-screen bg-gray-200">
            <SideBar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <NavBar />
                <Dashboard />
            </div>
        </div>
    );
};

export default Home;
