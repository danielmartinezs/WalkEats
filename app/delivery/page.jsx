'use client';

import Map from '@components/Map'
import Modalz from '@components/Modalz';
import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import { Modal } from "flowbite"
import io from 'socket.io-client'

const page = () => {

    const { data: session, status } = useSession();
    const [deliveryData, setDeliveryData] = useState(null)
    const [documento, setDocumento] = useState(null)
    const [onDelivery, setOnDelivery] = useState(false)
    const [lookingForClient, setLookingForClient] = useState(false)
    const [location, setLocation] = useState()
    const [foundClient, setFoundClient] = useState(false)
    const [modalPedido, setModalPedido] = useState()
    let modalPed = 'modalPed'
    let $targetEl;
    let options;
    let modal;


    useEffect(() => {
        setDocumento(document)
    }, [])


    const handleBroadcastSubscription = () => {
        setLookingForClient(true)
        getCoordinates();
        setTimeout(() => {
            console.log(lookingForClient)
            const socket = io("http://localhost:3001")
            socket.on("pedido", (data, callback) => {
                setDeliveryData(data);
                callback("Pedido recibido")
                setFoundClient(true)
                setLookingForClient(false)
                createModal()
                console.log(modal)
            })
        }, 3000);
    }

    const createModal = () => {
        $targetEl = documento.getElementById(modalPed);
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
        setModalPedido(modal)
        modal.toggle()
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

    const toggleModal = () => {
        modalPedido.toggle()
    }

    return (
        /*MODAL*/
        <section className='w-full flex-center flex-col'>
            <div>
                <Modalz
                    id={modalPed}
                    modal={modalPedido}
                    datos={deliveryData} />
            </div>
            {onDelivery ?
                (
                    <div className='w-full bg-orange-200'>
                        <Map />
                    </div>
                ) : (
                    <div className='w-full bg-orange-200'>
                        {lookingForClient ? (
                            <div className='items-center justify-start'>
                                <div>
                                    <h1 className='text-center text-2xl font-extrabold leading-[1.15] text-black sm:text-3xl'>
                                        Buscando Pedidos...
                                    </h1>
                                    <span
                                        className="inline-block h-28 w-28 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-[#FFBF69] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                        role="status" />
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className='w-full p-4 text-center'>
                                    <h1>
                                        <span className='text-center mt-5 text-2xl font-extrabold leading-[1.15] text-black sm:text-3xl'>
                                            ¡Bienvenido {session?.user?.username}!
                                        </span>
                                    </h1>
                                    <button
                                        type="button"
                                        onClick={() => handleBroadcastSubscription()}
                                        className="rounded-full bg-primary-orange p-4 pb-2 pt-2.5 m-4 w-1/2 h-12 text-3x1 font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-orange-400 hover:shadow-orange-400 focus:bg-orange-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                        Buscar Pedido
                                    </button>
                                    <button
                                        type="button"
                                        onClick
                                        className="rounded-full bg-primary-orange p-4 pb-2 pt-2.5 m-4 w-1/2 h-12 text-3x1 font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-orange-400 hover:shadow-orange-400 focus:bg-orange-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                        Historial de viajes
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { createModal() }}
                                        className="rounded-full bg-primary-orange p-4 pb-2 pt-2.5 m-4 w-1/2 h-12 text-3x1 font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-orange-400 hover:shadow-orange-400 focus:bg-orange-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                        Filtrar restaurantes
                                    </button>
                                    {modalPedido &&
                                        <button
                                            type="button"
                                            onClick={() => { toggleModal() }}
                                            className="rounded-full bg-primary-orange p-4 pb-2 pt-2.5 m-4 w-1/2 h-12 text-3x1 font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-orange-400 hover:shadow-orange-400 focus:bg-orange-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                            Visualizar modal
                                        </button>}
                                </div>
                            </div>)}
                    </div>
                )
            }
        </section>
    )
}

export default page