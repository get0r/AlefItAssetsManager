import React from 'react';
import Dashboard from '../containers/Dashboard';
import SideBar from '../components/SideBar/SideBar';
import NavBar from '../components/NavBar/NavBar';

const Home = (props) => {
    return (
        <div>
            <div className="flex h-screen bg-gray-200">
                <SideBar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <NavBar />
                    <Dashboard />
                </div>
            </div>
        </div>
    );
};

export default Home;
