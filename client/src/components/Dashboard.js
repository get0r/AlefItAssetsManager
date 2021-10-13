import React, { useState } from 'react'
import SideBar from './SideBar/SideBar';
import NavBar from './NavBar/NavBar';
import TileCardBar from './TileCardBar';
import ItemList from './ItemList';
import FloatingActionButton from './FloatingActionButton';

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
                    <div className="container mx-auto px-6 py-8">
                        <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
                        <TileCardBar />
                        <ItemList />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
