import { Formik } from 'formik';
import React, { useState } from 'react';

import Form from '../components/CustomForm';
import { loginSchema } from '../helpers/FormikSchema';
import { AdminSignIn } from '../redux/Admin/actions';
import { connect } from 'react-redux';
import Modal from '../components/Modal';
import { Redirect } from 'react-router';


const SignIn = ({ id, error, onSignIn }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSetupClicked, setIsSetupClicked] = useState(false);

    const initialValues = {
        username: '',
        password: ''
    };

    const onSubmit  = values => {
        onSignIn(values);
        if(!isSetupClicked) setIsSetupClicked(true);
    };

    const handleModalClose = () => {
        if (isModalVisible) {
            setIsModalVisible(false);
        }
    };

    if (error && !isModalVisible && isSetupClicked) {
        setIsModalVisible(true);
        setIsSetupClicked(false);
    } else if(id) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <Modal show={ isModalVisible } title='Sign Up Error' handleClose={handleModalClose}>
                <p class="text-sm text-gray-500">
                    { error }
                </p>
            </Modal>
            <Formik {...{ initialValues, onSubmit , validationSchema: loginSchema } }>
            {
                () => (
                    <Form fields={[
                        { label: 'Username', type: 'text', placeholder: 'Enter your Username', name: 'username'},
                        { label: 'Password', type: 'password', placeholder: 'Enter your password', name: 'password'}
                        ]}
                        submitBtn='Sign In'>
                    </Form>
                )
            }
        </Formik>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSignIn: (admin) => dispatch(AdminSignIn(admin)),
    };
};

const mapStateToProps = state => {
    return {
        id: state.admin._id,
        error: state.admin.error,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
