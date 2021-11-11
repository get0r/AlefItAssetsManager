import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import Loader from '../components/Loader';
import ErrorMessage from '../components/Dashboard/ErrorMessage';
import Modal from '../components/Modal';
import { deleteCategory, loadCategories } from '../redux/Categories/actions';
import CategoryList from '../components/Dashboard/CategoryList';
import Toast from 'tailwind-toast';

const CategoriesContainer = ({ searchTerm, categories, error, onLoadCategories, onDeleteCategories }) => {

    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [catId, setCatId] = useState('');
    const [currentCats, setCurrentCats] = useState([]);
    const { toast } = Toast;

    useEffect(() => {
        if (categories.length === 0) {
            onLoadCategories();
        } else {
            const displayCats = categories.filter(cat => cat.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setCurrentCats(displayCats);
        }
    }, [onLoadCategories, searchTerm]);

    useEffect(() => {
        justCloseModal();
        if(error) {
            toast()
                    .warning('Error!', error)
                    .with({
                        duration: 4000,
                        speed: 1000,
                        positionX: 'end',
                        positionY: 'top',
                        color: 'bg-red-800',
                        fontColor: 'red',
                        fontTone: 200
                    }).show()
        }
        if(currentCats.length === 0) setCurrentCats(categories);
        else {
            const displayCats = categories.filter(cat => cat.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setCurrentCats(displayCats);
        }
    }, [categories, error])

    const deleteCategory = (employeeId) => {
        setCatId(employeeId);
        if (!isDeleteModalVisible) setIsDeleteModalVisible(true);
    };

    const handleModalClose = () => {
        if (isDeleteModalVisible) {
            onDeleteCategories(catId);
        }
    };

    const justCloseModal = () => {
        if (isDeleteModalVisible)
            setIsDeleteModalVisible(false);
    };

    return (
        <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Categories</h3>
            {
                categories.length !== 0 ? <CategoryList onDeleteClick={ deleteCategory } categories={ currentCats } /> :
                    !error ? <Loader /> : <ErrorMessage message={ error } />
            }
            <Modal btnLabel="Yes" secondBtn show={ isDeleteModalVisible }
                title='Warning' handleClose={ handleModalClose } handleClose2={ justCloseModal }>
                <p>Are you sure you want to delete?</p>
            </Modal>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        categories: state.categories.categories,
        error: state.categories.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadCategories: () => dispatch(loadCategories()),
        onDeleteCategories: (id) => dispatch(deleteCategory(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
