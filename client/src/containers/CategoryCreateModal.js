import React, { useEffect } from 'react';
import Form from '../components/CustomForm';
import { Formik } from 'formik';
import { itemSchema } from '../helpers/FormikSchema';
import { addCategory } from '../redux/Categories/actions';
import { connect } from 'react-redux';

const CategoryCreateModal = ({ categories, onAddCategory, onClick }) => {

    useEffect(() => {
        onClick();
    }, [categories]);

    const initialValues = {
        name: '',
    };

    const onSubmit = values => {
        onAddCategory(values);
    };


    return (
        <Formik {...{ initialValues, onSubmit, validationSchema: itemSchema }}>
            {
                () => (
                    <Form
                        fields={ [
                            { label: 'Name', type: 'text', name: 'name' },
                        ] }
                        submitBtn='Create'>
                    </Form>
                )
            }
        </Formik>
    );
};

const mapStateToProps = state => ({
    categories: state.categories.categories
});

const mapDispatchToProps = dispatch => ({
    onAddCategory: (category) => dispatch(addCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCreateModal);
