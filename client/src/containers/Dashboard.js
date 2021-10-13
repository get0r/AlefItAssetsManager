import React, { useState } from 'react'
import FloatingActionButton from '../components/Dashboard/FloatingActionButton';
import Modal from '../components/Modal';
import ItemsContainer from './ItemsContainer';
import ItemCreateModal from './ItemCreateModal';
import CategoryCreateModal from './CategoryCreateModal';

const Dashboard = (props) => {
    const [isItemCreateVisible, setIsItemCreateVisible] = useState(false);
    const [isCatCreateVisible, setIsCatCreateVisible] = useState(false);

    const handleFloatingClick = e => {
        if (!isItemCreateVisible)
            setIsItemCreateVisible(true);
    };

    const handleFloatingClick2 = e => {
        if (!isCatCreateVisible)
            setIsCatCreateVisible(true);
    };

    const handleModalClose = e => {
        if(isItemCreateVisible) {
            setIsItemCreateVisible(false);
        } else if (isCatCreateVisible) {
            setIsCatCreateVisible(false);
        }
    }

    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <FloatingActionButton onClick={ handleFloatingClick } onClick2={ handleFloatingClick2 }/>
            <ItemsContainer />
            <Modal show={isItemCreateVisible} btnLabel='Close' handleClose={handleModalClose}>
                <ItemCreateModal onClick={handleModalClose}/>
            </Modal>
            <Modal show={isCatCreateVisible} btnLabel='Close' handleClose={handleModalClose}>
                <CategoryCreateModal onClick={handleModalClose}/>
            </Modal>
        </main>

    );
};

export default Dashboard;
