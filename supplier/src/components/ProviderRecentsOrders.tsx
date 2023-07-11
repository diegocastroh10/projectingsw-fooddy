import React from 'react';
import { dataBars } from '@fooddy/contexts/dataBars';
import { FaShoppingBag } from 'react-icons/fa';

const ProviderRecentsOrders = () => {
    return (
        <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 bprder rounded-lg bg-white overflow-scroll'>
            <h1>Recents Orders</h1>
            <ul>
                {dataBars.map((order, id) => (
                    <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
                        <div className='bg-red-200 rounded-lg p-3'>
                            <FaShoppingBag className='text-red-600' />
                        </div>
                        <div className='pl-4 '>
                            <p className='text-gray-800 font-bold'>${order.total}</p>
                            <p className='text-gray-500 text-sm'>{order.name.first}</p>
                        </div>
                        <p className='lg:flex md:hidden absolute right-6 text-sm'>
                            {order.date}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProviderRecentsOrders;