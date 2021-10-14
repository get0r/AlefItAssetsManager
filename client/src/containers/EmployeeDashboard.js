import React, { useState } from 'react'
import FloatingActionButton from '../components/Dashboard/FloatingActionButton';
import Modal from '../components/Modal';
import EmployeesContainer from './EmployeesContainer';
import EmployeeCreateModal from './EmployeeCreateModal';

import { ToastContainer, toast } from 'react-toastify'

const EmployeeDashboard = (props) => {

    const [isEmpCreateVisible, setIsEmpCreateVisible] = useState(false);

    const handleFloatingClick = e => {
        if (!isEmpCreateVisible)
            setIsEmpCreateVisible(true);
    };

    const handleModalClose = e => {
        if(isEmpCreateVisible)
            setIsEmpCreateVisible(false);
    };

    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <FloatingActionButton noTwoAction label='Add Employee' onClick={ handleFloatingClick } />
            <EmployeesContainer />
            <Modal show={isEmpCreateVisible} btnLabel='Close' handleClose={handleModalClose}>
                <EmployeeCreateModal onClick={handleModalClose} />
            </Modal>
        </main>

    );
};

export default EmployeeDashboard;
