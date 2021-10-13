import React, { useState } from 'react'
import SideBar from '../components/SideBar/SideBar';
import NavBar from '../components/NavBar/NavBar';
import FloatingActionButton from '../components/Dashboard/FloatingActionButton';
import ItemsContainer from './ItemsContainer';

const Dashboard = (props) => {
    const [isItemCreateVisible, setIsItemCreateVisible] = useState(false);

    const handleFloatingClick = e => {
        if(!isItemCreateVisible)
            setIsItemCreateVisible(true);
    };

    return (
        <div className="flex h-screen bg-gray-200">
            <SideBar />
            <FloatingActionButton onClick={handleFloatingClick}/>
            <div className="flex-1 flex flex-col overflow-hidden">
                <NavBar />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <ItemsContainer />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
