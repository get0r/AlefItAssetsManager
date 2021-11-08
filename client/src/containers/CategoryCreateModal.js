import React, { useEffect, useState } from 'react';
import Form from '../components/CustomForm';
import { Formik } from 'formik';
import { itemSchema } from '../helpers/FormikSchema';
import { addCategory } from '../redux/Categories/actions';
import { connect } from 'react-redux';
import Toast from 'tailwind-toast';

const CategoryCreateModal = ({ categories, error, onAddCategory, onClick }) => {

    const { toast } = Toast;
    const [errorL, setErrorL] = useState(null);

    useEffect(() => {
        if (error) {
            setErrorL(error);
        } else {
            onClick();
        }
    }, [categories, error]);

    const initialValues = {
        name: '',
    };

    const onSubmit = values => {
        onAddCategory(values);
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
            <Formik { ...{ initialValues, onSubmit, validationSchema: itemSchema } }>
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
            }
        </>
    );
};

const mapStateToProps = state => ({
    categories: state.categories.categories,
    error: state.categories.error,
});

const mapDispatchToProps = dispatch => ({
    onAddCategory: (category) => dispatch(addCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCreateModal);
