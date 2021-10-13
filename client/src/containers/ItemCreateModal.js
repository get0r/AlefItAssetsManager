import React, { useEffect } from 'react';
import Form from '../components/CustomForm';
import { Formik } from 'formik';
import { itemSchema } from '../helpers/FormikSchema';
import { addItem } from '../redux/Items/actions';
import { connect } from 'react-redux';

const ItemCreateModal = ({ items, onAddItem, onClick }) => {

    useEffect(() => {
        onClick();
    }, [items]);

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
    };

    const onSubmit = values => {
        onAddItem(values);
    };


    return (
        <Formik {...{ initialValues, onSubmit, validationSchema: itemSchema }}>
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
                        ] }
                        submitBtn='Create'>
                    </Form>
                )
            }
        </Formik>
    );
};


const mapStateToProps = state => ({
    items: state.items.items
});

const mapDispatchToProps = dispatch => ({
    onAddItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreateModal);
