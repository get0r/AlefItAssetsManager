import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import Loader from '../components/Loader';
import EmployeeList from '../components/Dashboard/EmployeeList';
import ErrorMessage from '../components/Dashboard/ErrorMessage';
import { deleteEmployee, loadEmployees } from '../redux/Employees/actions';
import Modal from '../components/Modal';

const EmployeesContainer = ({ employees, error, onLoadEmployees, onDeleteEmployee }) => {

    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [empId, setEmpId] = useState('');

    useEffect(() => {
        onLoadEmployees();

    }, [onLoadEmployees]);

    useEffect(() => {
        justCloseModal();
    }, [employees])

    const deleteEmployee = (employeeId) => {
        setEmpId(employeeId);
        if(!isDeleteModalVisible) setIsDeleteModalVisible(true);
    };

    const handleModalClose = () => {
        if(isDeleteModalVisible) {
            onDeleteEmployee(empId);
        }
    };

    const justCloseModal = () => {
        if(isDeleteModalVisible)
            setIsDeleteModalVisible(false);
    };

    return (
        <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Employees</h3>
            {
                employees.length !== 0 ? <EmployeeList onDeleteClick={deleteEmployee} employees={ employees } /> :
                    !error ? <Loader /> : <ErrorMessage message={error} />
            }
            <Modal btnLabel="Yes" secondBtn show={isDeleteModalVisible}
                title='Warning' handleClose={handleModalClose} handleClose2={justCloseModal}>
                    <p>Are you sure you want to delete?</p>
            </Modal>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        employees: state.employees.employees,
        error: state.employees.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadEmployees: () => dispatch(loadEmployees()),
        onDeleteEmployee: (id) => dispatch(deleteEmployee(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer);
