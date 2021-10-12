import { Formik } from 'formik';
import React from 'react';

import Form from '../components/CustomForm';
import { loginSchema } from '../helpers/FormikSchema';


const SignIn = () => {

    const initialValues = {
        username: '',
        password: ''
    };

    const onSubmit  = values => {
        console.log('here in submit')
        alert(JSON.stringify(values));
    };

    return (
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
    );
};

export default SignIn;
