import React from 'react'
import SideBar from './SideBar/SideBar';
import NavBar from './NavBar/NavBar';
import TileCardBar from './TileCardBar';

const Dashboard = (props) => {
    return (
        <div className="flex h-screen bg-gray-200">
            <SideBar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <NavBar />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto px-6 py-8">
                        <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
                        <TileCardBar />
                        <div className="flex flex-col mt-8">
                            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                    { }
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
