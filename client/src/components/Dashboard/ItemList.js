import React from 'react';
import ItemCard from './ItemCard';

const ItemList = ({ items, onItemClick, onDeleteClick }) => {
    const renderItems = () => {
        return items.map(item => (
            <ItemCard onItemClick={onItemClick} onDelete={onDeleteClick} key={item._id} item={item} />
        ));
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full -my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                {
                    renderItems()
                }
            </div>
        </div>
    );
};

export default ItemList;
