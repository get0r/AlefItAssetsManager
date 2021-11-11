import React, { useEffect, useState } from 'react';
import Form from '../components/CustomForm';
import { Field, Formik } from 'formik';
import { itemSchema } from '../helpers/FormikSchema';
import { addItem } from '../redux/Items/actions';
import { connect } from 'react-redux';
import { loadCategories } from '../redux/Categories/actions';
import Toast from 'tailwind-toast';

const ItemCreateModal = ({ items, error, categories, onAddItem, onClick, onLoadCategories }) => {

    const [errorL, setErrorL] = useState(null);
    const { toast } = Toast;

    useEffect(() => {
        if (categories.length === 0) {
            onLoadCategories();
        }
    }, []);

    useEffect(() => {
        if (error) {
            setErrorL(error);
        } else {
            onClick();
        }
    }, [items, error]);

    const initialValues = {
        name: '',
        brand: '',
        serviceNo: '',
        imeiNo: '',
        serialNo: '',
        price: '',
        model: '',
        accountNo: '',
        package: '',
        systemModel: '',
        systemSKU: '',
        categoryId: 'test'
    };

    const onSubmit = values => {
        onAddItem(values);
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
                                        { label: 'Brand', type: 'text', name: 'brand' },
                                        { label: 'Service Number', type: 'text', name: 'serviceNo' },
                                        { label: 'Imei Number', type: 'text', name: 'imeiNo' },
                                        { label: 'Serial Number', type: 'text', name: 'serialNo' },
                                        { label: 'Model', type: 'text', name: 'model' },
                                        { label: 'Price / Monthly Fee', type: 'text', name: 'price' },
                                        { label: 'Account Number', type: 'text', name: 'accountNo' },
                                        { label: 'Package', type: 'text', name: 'package' },
                                        { label: 'System Model', type: 'text', name: 'systemModel' },
                                        { label: 'System SKU', type: 'text', name: 'systemSKU' },
                                        { label: 'Category', type: 'select', name: 'categoryId', options: ['Select Category', ...categories] },
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
    items: state.items.items,
    categories: state.categories.categories,
    error: state.items.error,
});

const mapDispatchToProps = dispatch => ({
    onAddItem: (item) => dispatch(addItem(item)),
    onLoadCategories: () => dispatch(loadCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreateModal);
