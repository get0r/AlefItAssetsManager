import React, { useEffect } from 'react';
import Form from '../components/CustomForm';
import { Formik } from 'formik';
import { employeeSchema } from '../helpers/FormikSchema';
import { addCategory } from '../redux/Categories/actions';
import { connect } from 'react-redux';
import { addEmployee } from '../redux/Employees/actions';

const EmployeeCreateModal = ({ employees, onAddEmployee, onClick }) => {

    useEffect(() => {
        onClick();
    }, [employees]);

    const initialValues = {
        empId: '',
        fname: '',
        lname: '',
        jobTitle: '',
        dept: ''
    };

    const onSubmit = values => {
        console.log('Employees submitting...')
        onAddEmployee(values);
    };


    return (
        <Formik {...{ initialValues, onSubmit, validationSchema: employeeSchema }}>
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
    );
};

const mapStateToProps = state => ({
    employees: state.employees.employees
});

const mapDispatchToProps = dispatch => ({
    onAddEmployee: (employee) => dispatch(addEmployee(employee)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreateModal);
