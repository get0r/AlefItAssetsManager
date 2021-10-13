import React, { useState } from 'react'
import FloatingActionButton from '../components/Dashboard/FloatingActionButton';
import ItemsContainer from './ItemsContainer';

const Dashboard = (props) => {
    const [isItemCreateVisible, setIsItemCreateVisible] = useState(false);

    const handleFloatingClick = e => {
        if (!isItemCreateVisible)
            setIsItemCreateVisible(true);
    };

    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <FloatingActionButton onClick={ handleFloatingClick } />
            <ItemsContainer />
        </main>

    );
};

export default Dashboard;
