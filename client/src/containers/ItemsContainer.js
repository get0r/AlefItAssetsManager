import React, { useEffect } from 'react';
import TileCardBar from '../components/Dashboard/TileCardBar';
import ItemList from '../components/Dashboard/ItemList';
import { loadItems } from '../redux/Items/actions';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import { ErrorMessage } from 'formik';

const ItemsContainer = ({ items, error, loadItems }) => {

    useEffect(() => {
        loadItems();

    }, [loadItems]);

    return (
        <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
            <TileCardBar />
            {
                items.length !== 0 ? <ItemList items={ items } /> :
                    !error ? <Loader /> : <ErrorMessage message={error} />
            }

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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
