'use client';

import { useState, useRef } from 'react'
import Image from 'next/image';
import items from '@components/items';

function CartCard({ number, completo, setPedidos, pedido }) {

    let refPed = useRef(completo)

    const deleteItem = (index) => {
        const modificacion = [...completo];
        modificacion.splice(index, 1)
        setPedidos(modificacion)
        console.log(refPed)
    }

    const undoDeleted = () => {
        
    }

    return (
        <div className='flex h-1/2 p-3 bg-orange-300 border border-spacing-3 border-primary-green rounded-2xl'>
            <Image
                src={pedido.picture}
                alt={pedido.name}
                width={180}
                height={180}
                className='sm:block flex' />
            <div className='flex items-center justify-between mb-3'>
                <h1 className='text-xl font-bold'>
                    {pedido.name}
                </h1>
                <span>
                    {pedido.details}
                </span>
                <h2>
                    ${pedido.price}
                </h2>
            </div>
            <button type="button" onClick={() => deleteItem(number)} className="text-primary-green bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg className="w-1 h-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
        </div>
    )
}

export default CartCard