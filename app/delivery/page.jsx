'use client';

import Map from '@components/Map'
import { useEffect, useRef, useState } from 'react';
import { prueba } from '@components/Animations';
import { Modal } from "flowbite"
import io from 'socket.io-client'

const page = () => {

    const [deliveryData, setDeliveryData] = useState(null)
    const [documento, setDocumento] = useState(null)
    const [onDelivery, setOnDelivery] = useState(false)
    const [lookingForClient, setLookingForClient] = useState(false)
    const [location, setLocation] = useState()
    const [foundClient, setFoundClient] = useState(false)
    const [modalPedido, setModalPedido] = useState()
    let $targetEl;
    let options;
    let modal;


    useEffect(() => {
        setDocumento(document)
        getCoordinates();
    }, [])


    const handleBroadcastSubscription = () => {
        setLookingForClient(true)
        //setFoundClient(true)
        setTimeout(() => {
            console.log(lookingForClient)
            const socket = io("http://localhost:3001")
            socket.on("pedido", (data, callback) => {
                setDeliveryData(data);
                callback("Pedido recibido")
                $targetEl = documento.getElementById('modalEl');
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
                modal = new Modal($targetEl, options);
                setModalPedido(modal)
                setFoundClient(true)
                setLookingForClient(false)
                console.log(modal)
                modal.toggle()
            })
        }, 3000);
    }

    const getCoordinates = () => {
        if (!navigator.geolocation) {
            alert("Coordenadas no disponibles")
        }
        const idPosition = navigator.geolocation.watchPosition((position) => {
            console.log(position)
            const { accuracy, latitude, longitude, altitude, heading, speed } = position.coords;
            //const{ latitude, longitude } = position.coords;
            setLocation({ accuracy, latitude, longitude });
        })
    }

    const sendMap = () => {
        setOnDelivery(true)
        modalPedido.hide()
    }

    const startDelivery = () => {
        setTimeout(() => {
            setOnDelivery(true)
            setLookingForClient(false)
        }, 3000);
    }

    const closeModal = () => {
        modalPedido.hide()
    }

    return (
        /*MODAL*/
        <div className='relative w-full flex-center z-5'>
            {/*------------------------------------------------------------------- */}
            <div>
                <div id="modalEl" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden justify-center  overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                                    {deliveryData?.restaurant}
                                </h3>
                                <button type="button" onClick={() => closeModal()} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">

                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                </p>
                            </div>
                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button type="button" onClick={() => sendMap()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Accept</button>
                                <button type="button" onClick={() => closeModal()} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*------------------------------------------------------------------- */}

            {onDelivery ?
                (
                    <div>
                        <Map />
                    </div>
                ) : (
                    <div>
                        {lookingForClient ? (
                            <div>
                                <div
                                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-[#FFBF69] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status">
                                    <span
                                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                    >Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <div className='flex items-center justify-center mt-5'>
                                <button
                                    type="button"
                                    onClick={() => handleBroadcastSubscription()}
                                    className=" rounded bg-primary-orange px-6 pb-2 pt-2.5 w-1/2 h-12 text-3x1 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-orange-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                    Buscar pedido
                                </button>
                                <br/>
                                <br/>
                                {JSON.stringify({location})}
                            </div>)}
                    </div>
                )
            }
        </div>
    )
}

export default page