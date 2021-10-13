import React, { useEffect } from 'react';
import TileCard from '../components/Dashboard/TileCard';
import { loadItemCount } from '../redux/Items/actions';
import { connect } from 'react-redux';
import { loadCategoryCount } from '../redux/Categories/actions';

const TileCardContainer = ({ items, categories, onLoadItemCount, onLoadCategoryCount }) => {

    useEffect(() => {
        onLoadItemCount();
        onLoadCategoryCount()
    }, []);

    return (
        <div className="mt-4">
            <div className="flex flex-wrap -mx-6">
                <TileCard number={categories} label="Categories" />
                <TileCard number="200" label="Employees" />
                <TileCard number={items} label="Items" />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    items: state.items.itemCount,
    categories: state.categories.categoryCount
});

const mapDispatchToProps = dispatch => ({
    onLoadItemCount: () => dispatch(loadItemCount()),
    onLoadCategoryCount: () => dispatch(loadCategoryCount()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TileCardContainer);
