import { Formik } from 'formik';
import React, { useState } from 'react';

import Form from '../components/CustomForm';
import { SignUpSchema } from '../helpers/FormikSchema';
import { setUpAdminAccount } from '../redux/Admin/actions';
import { connect } from 'react-redux';
import Modal from '../components/Modal';
import { Redirect } from 'react-router';


const SignUp = ({ onSignUp, username, error }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSetupClicked, setIsSetupClicked] = useState(false);

    const initialValues = {
        fullName: '',
        username: '',
        password: ''
    };

    const onSubmit = values => {
        const { fullName, username, password } = values;

        onSignUp({ fname: fullName.split(' ')[0], lname: fullName.split(' ')[1], username, password});
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
    } else if(username.length > 0) {
        return <Redirect to='/signIn' />
    }

    return (
        <div>
            <Modal show={ isModalVisible } title='Sign Up Error' handleClose={handleModalClose}>
                <p class="text-sm text-gray-500">
                    { error }
                </p>
            </Modal>
            <Formik { ...{ initialValues, onSubmit, validationSchema: SignUpSchema } }>
                {
                    () => (
                        <Form fields={ [
                            { label: 'Full Name', type: 'text', placeholder: 'Ex. Abebe Kebede', name: 'fullName' },
                            { label: 'Username', type: 'text', placeholder: 'Ex. admin', name: 'username' },
                            { label: 'Password', type: 'password', placeholder: 'Enter a password', name: 'password' }
                        ] }
                            submitBtn='Setup Admin Account'>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        username: state.admin.username,
        error: state.admin.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (admin) => dispatch(setUpAdminAccount(admin)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
