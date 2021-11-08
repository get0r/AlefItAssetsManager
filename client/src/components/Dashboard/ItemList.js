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
                <div>
                <table class="table w-full text-gray-400 border-separate space-y-6 text-sm">
                    <thead class="w-full bg-gray-800 text-gray-500">
                        <tr>
                            <th class="p-3">Name</th>
                            <th class="p-3 text-left">Service No</th>
                            <th class="p-3 text-left">Imei/Serial No</th>
                            <th class="p-3 text-left">Model</th>
                            <th class="p-3 text-left">System Model</th>
                            <th class="p-3 text-left">System SKU</th>
                            <th class="p-3 text-left">Price/Acc. No</th>
                            <th class="p-3 text-left">Functional</th>
                            <th class="p-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            renderItems()
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ItemList;
