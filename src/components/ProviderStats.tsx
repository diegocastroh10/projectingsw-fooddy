import React from 'react';

const ProviderStats = () => {
    return (
        <div className='space-y-6'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
                <div className='col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                    <div className='flex flex-col w-full pb-4'>
                        <p className='text-2xl font-bold'>$108.990</p>
                        <p className='text-gray-600'>Ingreso diario</p>
                    </div>      
                    <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                        <span className='text-green-700 text-lg'>+3%</span>
                    </p>
                </div>

                <div className='col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                    <div className='flex flex-col w-full pb-4'>
                        <p className='text-2xl font-bold'>$508.990</p>
                        <p className='text-gray-600'>Ingreso semanal</p>
                    </div>
                    <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                        <span className='text-green-700 text-lg'>+9%</span>
                    </p>
                </div>

                <div className='col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                    <div className='flex flex-col w-full pb-4'>
                        <p className='text-2xl font-bold'>45</p>
                        <p className='text-gray-600'>Clientes</p>
                    </div>
                    <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                        <span className='text-green-700 text-lg'>+10%</span>
                    </p>
                </div>
            </div>
        </div>
    );
};


export default ProviderStats;