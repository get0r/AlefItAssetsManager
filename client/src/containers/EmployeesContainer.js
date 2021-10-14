import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import Loader from '../components/Loader';
import EmployeeList from '../components/Dashboard/EmployeeList';
import ErrorMessage from '../components/Dashboard/ErrorMessage';

const EmployeesContainer = ({ employees, error, loadEmployees }) => {

    useEffect(() => {
        if(employees.length === 0)
            loadEmployees();

    }, [loadEmployees]);

    return (
        <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Employees</h3>
            {
                employees.length !== 0 ? <EmployeeList employees={ employees } /> :
                    !error ? <Loader /> : <ErrorMessage message={error} />
            }

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
        loadEmployees: () => dispatch(loadEmployees()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer);
