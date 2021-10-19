import React, { useState } from 'react';
import Dashboard from '../containers/Dashboard';
import NavBar from '../components/NavBar/NavBar';
import SideBar from '../components/SideBar/SideBar';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const onChangeSearchTerm = (term) =>{
        setSearchTerm(term);
    };

    return (
        <div className="flex h-screen bg-gray-200">
            <SideBar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <NavBar onChangeSearchTerm={onChangeSearchTerm} />
                <Dashboard searchTerm={searchTerm} />
            </div>
        </div>
    );
};

export default Home;
