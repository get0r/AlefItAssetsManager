import React, { useEffect, useState } from 'react';

import ItemList from '../components/Dashboard/ItemList';
import { deleteItem, loadItems } from '../redux/Items/actions';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import TileCardContainer from './TileCardContainer';
import ErrorMessage from '../components/Dashboard/ErrorMessage';
import Modal from '../components/Modal';
import ItemUpdateModal from './ItemUpdateModal';

const ItemsContainer = ({ items, error, loadItems, onDeleteItem }) => {

    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

    const [itemId, setItemId] = useState('');
    const [item, setItem] = useState('');

    useEffect(() => {
        if(items.length === 0)
            loadItems();

    }, [loadItems]);


    useEffect(() => {
        justCloseModal();
    }, [items])

    const deleteItem = (itemId) => {
        setItemId(itemId);
        if(isUpdateModalVisible) setIsUpdateModalVisible(false);
        if(!isDeleteModalVisible) setIsDeleteModalVisible(true);
    };

    const handleModalClose = () => {
        if(isDeleteModalVisible) {
            onDeleteItem(itemId);
        }
    };

    const justCloseModal = () => {
        if(isDeleteModalVisible)
            setIsDeleteModalVisible(false);
    };

    /**ON ITEM CLICK */

    const onItemClick = item => {
        setItem(item);
        if(!isUpdateModalVisible)
            setIsUpdateModalVisible(true);
    }

    const handleUpdateModalClose = () => {
        if(isUpdateModalVisible) {
            setIsUpdateModalVisible(false);
        }
    }
    return (
        <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
            <TileCardContainer />
            {
                items.length !== 0 ? <ItemList onItemClick={onItemClick} onDeleteClick={deleteItem} items={ items } /> :
                    !error ? <Loader /> : <ErrorMessage message={error} />
            }
            <Modal btnLabel="Yes" secondBtn show={isDeleteModalVisible}
                title='Warning' handleClose={handleModalClose} handleClose2={justCloseModal}>
                    <p>Are you sure you want to delete?</p>
            </Modal>
            <Modal show={isUpdateModalVisible} btnLabel='Close' handleClose={handleUpdateModalClose}>
                <ItemUpdateModal item={item} onClick={handleUpdateModalClose}/>
            </Modal>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        items: state.items.items,
        error: state.items.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadItems: () => dispatch(loadItems()),
        onDeleteItem: (id) => dispatch(deleteItem(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
