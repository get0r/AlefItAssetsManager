import React, { useEffect } from 'react';
import TileCard from '../components/Dashboard/TileCard';
import { loadItemCount } from '../redux/Items/actions';
import { connect } from 'react-redux';
import { loadCategoryCount } from '../redux/Categories/actions';
import { loadEmployeeCount } from '../redux/Employees/actions';

const TileCardContainer = ({ items, categories, employees, onLoadEmployeeCount, onLoadItemCount, onLoadCategoryCount }) => {

    useEffect(() => {
        onLoadItemCount();
        onLoadCategoryCount();
        onLoadEmployeeCount();
    }, []);

    return (
        <div className="mt-4">
            <div className="flex flex-wrap -mx-6">
                <TileCard number={categories} label="Categories" />
                <TileCard number={employees} label="Employees" />
                <TileCard number={items} label="Items" />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    items: state.items.itemCount,
    categories: state.categories.categoryCount,
    employees: state.employees.employeeCount,
});

const mapDispatchToProps = dispatch => ({
    onLoadItemCount: () => dispatch(loadItemCount()),
    onLoadCategoryCount: () => dispatch(loadCategoryCount()),
    onLoadEmployeeCount: () => dispatch(loadEmployeeCount()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TileCardContainer);
