import React from 'react';
import millify from 'millify';

import placeholderImage from '../../assets/images/background.svg';

const ItemCard = ({ item, onItemClick, onDelete }) => {

    return (
        <tr className="bg-gray-800">
            <td className="p-3">
                <div className="flex align-items-center">
                    <img className="rounded-full h-12 w-12  object-cover" src={ placeholderImage } alt="pimage" />
                    <div className="ml-3">
                        <div className="">{ item.name }</div>
                        <div className="text-gray-500">{ item.brand }</div>
                    </div>
                </div>
            </td>
            <td className="p-3">
                { item.serviceNo || '-'  }
            </td>
            <td className="p-3">
                { item.serialNo ? item.serialNo : item.imeiNo || '-'  }
            </td>
            <td className="p-3 font-bold">
                { item.model || '-' }
            </td>
            <td className="p-3 font-bold">
                { item.systemModel || '-'  }
            </td>
            <td className="p-3 font-bold">
                {  item.systemSKU || '-'  }
            </td>
            <td className="p-3 font-bold">
                { item.price ? `Br. ${millify(item.price.purchased)}` : item.accountNo || '-' }
            </td>
            <td className="p-3">
                <span className="bg-green-400 text-gray-50 rounded-md px-2">{ item.isFunctional ? 'Yes' : 'No' }</span>
            </td>
            <td className="p-3 ">
                <button className="text-gray-400 hover:text-gray-100 mx-2"
                    onClick={ (e) => onItemClick(item) } >
                    <i className="material-icons-outlined text-base">edit</i>
                </button>
                <button className="text-gray-400 hover:text-gray-100 ml-2"
                    onClick={ e => { e.stopPropagation(); onDelete(item._id); } } >
                    <i className="material-icons-round text-base hover:text-red-600">delete</i>
                </button>
            </td>
        </tr>

    );
};

export default ItemCard;
