import React, { useState } from 'react'
import FloatingActionButton from '../components/Dashboard/FloatingActionButton';
import Modal from '../components/Modal';
import ItemsContainer from './ItemsContainer';
import ItemCreateModal from './ItemCreateModal';
import EmployeesContainer from './EmployeesContainer';

const EmployeeDashboard = (props) => {

    const [isEmpCreateVisible, setIsEmpCreateVisible] = useState(false);

    const handleFloatingClick = e => {
        if (!isEmpCreateVisible)
            setIsEmpCreateVisible(true);
    };

    const handleModalClose = e => {
        if(isEmpCreateVisible) {
            setIsEmpCreateVisible(false);
        } else if (isEmpCreateVisible) {
            setIsEmpCreateVisible(false);
        }
    };

    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <FloatingActionButton onClick={ handleFloatingClick } />
            <EmployeesContainer />
            <Modal show={isEmpCreateVisible} btnLabel='Close' handleClose={handleModalClose}>
                <ItemCreateModal onClick={handleModalClose} />
            </Modal>
        </main>

    );
};

export default EmployeeDashboard;
