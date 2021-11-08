import React, { useEffect, useState } from 'react';
import Form from '../components/CustomForm';
import Toast from 'tailwind-toast';

import { Formik } from 'formik';
import { employeeSchema } from '../helpers/FormikSchema';
import { connect } from 'react-redux';
import { addEmployee } from '../redux/Employees/actions';

const EmployeeCreateModal = ({ employees, error, onAddEmployee, onClick }) => {

    const [errorL, setErrorL] = useState(null);
    const { toast } = Toast;

    useEffect(() => {
        if (error) {
            setErrorL(error);
        } else {
            onClick();
        }
    }, [employees, error]);

const initialValues = {
    empId: '',
    fname: '',
    lname: '',
    jobTitle: '',
    dept: ''
};

const onSubmit = values => {
    onAddEmployee(values);
};


return (
    <>
        {
            errorL !== null ? toast()
                .warning('Error!', errorL.length > 0 ? errorL : 'There was a minor error!')
                .with({
                    shape: 'pill',
                    duration: 4000,
                    speed: 1000,
                    positionX: 'end',
                    positionY: 'top',
                    color: 'bg-blue-800',
                    fontColor: 'blue',
                    fontTone: 200
                }).show() :
                <Formik { ...{ initialValues, onSubmit, validationSchema: employeeSchema } }>
                    {
                        () => (
                            <Form
                                fields={ [
                                    { label: 'First Name', type: 'text', name: 'fname' },
                                    { label: 'Last Name', type: 'text', name: 'lname' },
                                    { label: 'Job Title', type: 'text', name: 'jobTitle' },
                                    { label: 'Department', type: 'text', name: 'dept' },
                                    { label: 'Employee Id', type: 'text', name: 'empId' },
                                ] }
                                submitBtn='Add Employee'>
                            </Form>
                        )
                    }
                </Formik>
        }
    </>
);
};

const mapStateToProps = state => ({
    employees: state.employees.employees,
    error: state.employees.error
});

const mapDispatchToProps = dispatch => ({
    onAddEmployee: (employee) => dispatch(addEmployee(employee)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreateModal);
