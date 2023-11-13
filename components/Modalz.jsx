'use client';

import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'
import { ImCross } from 'react-icons/im'
import { useRef, useState } from 'react';
import { Modal } from "flowbite"

function Modalz({ id, modal, datos, sendMap }) {

    const closeModal = () => {
        modal.hide()
    }

    return (
        <div>
        {
            id === 'modalPed' &&
            <div id={id} tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden justify-center  overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    <div className="relative bg-orange-200 rounded-lg shadow dark:bg-emerald-700">
                        <div className="flex items-start justify-between p-5 m-3 border-b border-primary-green rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold items-center text-gray-900 lg:text-2xl dark:text-white">
                                Modal Pedido {id}
                                {datos?.restaurant}
                            </h3>
                            <button type="button" onClick={() => closeModal()} className="text-primary-green bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    {ImCross}
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className='absolute justify-center z-1 opacity-10'>
                                <BiCheckCircle />
                            </div>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Pedido de: {datos?.name}
                            </p>
                        </div>
                        <div className="flex justify-center p-3 m-3 space-x-2 border-t border-orange-200 rounded-b dark:border-gray-600">
                            <button type="button" onClick={() => sendMap()} className="text-white bg-primary-orange hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:z-10 dark:bg-primary-green dark:hover:bg-emerald-700 dark:focus:ring-emerald-200">
                                Aceptar Pedido
                            </button>
                            <button type="button" onClick={() => closeModal()} className="text-white bg-primary-orange hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:z-10 dark:bg-primary-green dark:hover:bg-emerald-700 dark:text-gray-300 dark:hover:text-white dark:border-gray-500">
                                Rechazar Pedido
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        }
        {
        id === 'modalPag' &&
            <div id={id} tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden justify-center  overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    <div className="relative bg-orange-200 rounded-lg shadow dark:bg-emerald-700">
                        <div className="flex items-start justify-between p-5 m-3 border-b border-primary-green rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold items-center text-gray-900 lg:text-2xl dark:text-white">
                                Método de Pago
                            </h3>
                            <button type="button" onClick={() => closeModal()} className="text-primary-green bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    {ImCross}
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="flex flex-col justify-center items-center p-6">
                            <button type="button" onClick={() => sendMap()} className="text-white bg-primary-orange hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center focus:z-10 dark:bg-primary-green dark:hover:bg-emerald-700 dark:focus:ring-emerald-200">
                                Pago en línea
                            </button>
                            {}
                            <button type="button" onClick={() => closeModal()} className="text-white bg-primary-orange hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center focus:z-10 dark:bg-primary-green dark:hover:bg-emerald-700 dark:text-gray-300 dark:hover:text-white dark:border-gray-500">
                                Pago en efectivo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

export default Modalz