import { Formik } from 'formik';
import React from 'react';

import Form from '../components/CustomForm';
import { SignUpSchema } from '../helpers/FormikSchema';


const SignUp = () => {

    const initialValues = {
        fullName: '',
        username: '',
        password: ''
    };

    const onSubmit  = values => {
        alert(JSON.stringify(values));
    };

    return (
        <Formik {...{ initialValues, onSubmit, validationSchema: SignUpSchema} }>
            {
                () => (
                    <Form fields={[
                        { label: 'Full Name', type: 'text', placeholder: 'Ex. Abebe Kebede', name: 'fullName'},
                        { label: 'Username', type: 'text', placeholder: 'Ex. admin', name: 'username'},
                        { label: 'Password', type: 'password', placeholder: 'Enter a password', name: 'password'}
                        ]}
                        submitBtn='Setup Admin Account'>
                    </Form>
                )
            }
        </Formik>
    );
};

export default SignUp;
