'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Modalz from '@components/Modalz';
import CartCard from '@components/CartCard';
import items from '@components/items';

function page() {

    const [pedidos, setPedidos] = useState(items);
    const [total, setTotal] = useState(0);
    const [modalPago, setModalPago] = useState()
    let modalPag = 'modalPag';
    let $targetEl;
    let options;
    let modal;

    const createModal = () => {
        $targetEl = document.getElementById(modalPag);
        options = {
            placement: 'middle-center',
            backdrop: 'dynamic',
            backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-5',
            closable: true,
            onHide: () => {
                console.log('modal is hidden');
            },
            onShow: () => {
                console.log('modal is shown');
            },
            onToggle: () => {
                console.log('modal has been toggled');
            }
        };
        modal = new Modal($targetEl, options)
        setModalPago(modal)
        modal.toggle()
    }

    const sendCheckout = () => {
        alert('Mi loco nos vamos al checkout')
    }

    return (
        <section className='w-full flex flex-col justify-center items-center bg-orange-200'>
            <div>
                <Modalz
                    id={modalPag}
                    modal={modalPago} />
            </div>
            <div className='sm:col-span-3 w-full text-center items-center justify-center bg-primary-orange'>
                Carrito
                {pedidos.map((pedido, i) => {
                    return (
                        <div key={i}>
                            <CartCard
                            pedido={pedido}
                            completo = {pedidos}
                            setPedidos = {setPedidos}
                            number={i} />
                        </div>
                    )
                })}
            </div>
            <div className='sm:col-span-1 w-full text-center items-center justify-center bg-emerald-200'>
                Pago
                <div>
                    <span>
                        Subtotal de {items.lenght}
                    </span>
                    <span>
                        ${total}
                    </span>
                </div>
                <br />
                <button
                    onClick={() => { createModal() }}
                    className='bg-primary-orange text-white p-4 m-4 rounded-full shadow transition duration-150 ease-in-out hover:bg-orange-400 hover:shadow-orange-400'>
                    Método de pago
                </button>
            </div>
            <button
                type="button"
                onClick={() => { sendCheckout() }}
                className="rounded-full bg-primary-orange p-4 pb-2 pt-2.5 m-4 w-1/2 h-12 text-3x1 font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-orange-400 hover:shadow-orange-400 focus:bg-orange-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                Checkout
            </button>
        </section>
    )
}

export default page