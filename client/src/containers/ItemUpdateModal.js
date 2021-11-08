import React, { useEffect, useState } from 'react';

import { Form, Formik, Field } from 'formik';
import { updateItem } from '../redux/Items/actions';
import { connect } from 'react-redux';
import { loadEmployee } from '../redux/Employees/actions';
import Toast from 'tailwind-toast';

const ItemUpdateModal = ({ item, error, employees, items, onClick, onUpdateItem, onLoadEmployee }) => {
    const [employee, setEmployee] = useState('');
    const [errorL, setErrorL] = useState(null);
    const { toast } = Toast;

    useEffect(() => {
        if (item.takerId) {
            onLoadEmployee(item.takerId);
        }
    }, [item]);

    useEffect(() => {
        if (error) {
            setErrorL(error);
        } else {
            onClick();
        }
    }, [items, error]);

    const initialValues = {
        takerId: '',
        returned: 'Yes'
    };

    const onSubmit = values => {
        if (!item.takerId && item.takerId instanceof Number) {
            onUpdateItem(item._id, { ...values, isTaken: true });
        } else {
            onUpdateItem(item._id, { isTaken: values.returned === 'Yes' ? false : true });
        }
    };

    if (employees.length !== 0) {
        if (employee.length === 0) {
            const exactEmp = employees.find(emp => emp.empId === item.takerId);
            if (exactEmp)
                setEmployee(`${exactEmp.fname} ${exactEmp.lname}`);
        }
    }
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
                    <Formik { ...{ initialValues, onSubmit } }>
                        {
                            () => (
                                <Form>
                                    <label className="block text-gray-700">{ item.isTaken ? `Item taken by: ${employee} --- Returned?` : 'Item Not Taken, set taken below' }</label>
                                    {
                                        item.isTaken ? <Field className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                            type='text'
                                            as='select'
                                            name="returned">
                                            <option>Yes</option>
                                        </Field> :
                                            <Field className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                                type='text'
                                                placeholder='Employee Id'
                                                name="takerId"
                                            />
                                    }
                                    <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Update</button>
                                </Form>
                            )
                        }
                    </Formik>
            }
        </>
    );
};

const mapStateToProps = state => ({
    items: state.items.items,
    employees: state.employees.employees,
    error: state.items.error,
});

const mapDispatchToProps = dispatch => ({
    onUpdateItem: (id, newObj) => dispatch(updateItem(id, newObj)),
    onLoadEmployee: (empId) => dispatch(loadEmployee(empId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemUpdateModal);
