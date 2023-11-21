'use client';

import { BiCheckCircle } from 'react-icons/bi'
import { ImCross } from 'react-icons/im'
import { useContext, useState } from 'react';
import { Modal } from "flowbite"
import PaymentForm from '@components/PaymentForm'
import { useRouter } from 'next/navigation'
import CartContext  from "@app/context/cartContext";


function Modalz({ id, modal, datos, total, sendMap }) {

    const [showInput, setShowInput] = useState(false)
    const [showPayment, setShowPayment] = useState(false)
    const [cobro, setCobro] = useState(0);
    const [error, setError] = useState("");
    const router = useRouter();
    const { cart } = useContext(CartContext);

    const closeModal = () => {
        modal.hide()
        setShowInput(false)
        setError("")
        setShowPayment(false)
        setCobro(0)
    }
    const hasText = (job) => {
        if (job.length > 0)
            return 'bg-white  transform -translate-y-5 -translate-x-3  scale-75'
        else
            return ''
    }
    const handleMonto = (value) => {
        const re = /^[0-9\b]+$/;    
        if (value === '' || re.test(value)) {
            setCobro(value)
        }
    }

    const handleSubmmitMonto  = async() => {
        if (cobro < total) {
            return setError("El monto ingresado es menor al total del pedido");
        }
        console.log(cart)
        const response = await fetch('http://localhost:4000/api/pedidos/guardar', {
        method: "POST",
        body: JSON.stringify(cart),
        headers: {
          "Content-Type": "application/json"
        } });
        console.log(response)
        closeModal();
        if(response.status === 200)
            return router.push("/checkout");
        else{
            setError(response.error)
        }

    }
    return (
        <div>
            {
                id === 'modalPed' &&
                <div id={id} tabIndex="-1" aria-hidden="true" className=" fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden justify-center  overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative w-full max-w-2xl max-h-full">
                        <div className="relative bg-orange-200 rounded-lg shadow dark:bg-emerald-700">
                            <div className="flex items-start justify-between p-5 m-3 border-b border-primary-green rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold items-center text-gray-900 lg:text-2xl dark:text-white">
                                    Modal Pedido {id}
                                    {datos?.restaurant}
                                </h3>
                                <button type="button" onClick={() => closeModal()} className="text-primary-green bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">

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
                        <div className="relative bg-white rounded-lg shadow dark:bg-emerald-700">
                            <div className="flex items-start justify-between p-5 m-3 border-b border-primary-orange rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold items-center text-gray-900 lg:text-2xl dark:text-white">
                                    Método de Pago
                                </h3>
                                <button type="button" onClick={() => closeModal()} className="text-primary-green bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="flex flex-col w-full p-6 gap-2">
                                <span className=' text-center text-lg black font-semibold '>
                                    Total: ${total}
                                </span>
                                <div className='grid grid-cols-2'>
                                    <div className='col-span-1 p-6 w-full flex flex-col items-center justify-center align-middle'>
                                        <button type="button" onClick={() => { setShowPayment(!showPayment), setShowInput(false) }} className="text-white bg-primary-orange hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center focus:z-10 dark:bg-primary-green dark:hover:bg-emerald-700 dark:focus:ring-emerald-200">
                                            Pago en línea
                                        </button>
                                    </div>
                                    <div className='col-span-1 p-6 w-full flex flex-col items-center justify-center align-middle'>
                                        <button type="button" onClick={() => { setShowInput(!showInput), setShowPayment(false) }} className="text-white bg-primary-orange hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center focus:z-10 dark:bg-primary-green dark:hover:bg-emerald-700 dark:text-gray-300 dark:hover:text-white dark:border-gray-500">
                                            Pago en efectivo
                                        </button>
                                    </div>
                                </div>
                                {showPayment &&
                                    <div>
                                        <PaymentForm />
                                    </div>
                                }
                                {showInput &&
                                    <div className='flex flex-col justify-center align-middle items-center w-full m-4'>
                                        {error &&
                                            <div className='bg-red-500 text-white p-2 mb-2'>
                                                {error}
                                            </div>
                                        }
                                        <label className="relative mx-auto w-9/12 overflow-hidden">
                                            <input
                                                type="number"
                                                id="monto"
                                                name="telefono"
                                                className="my-2 h-10 w-full text-base rounded-lg border-primary-orange border-2 
                        focus:border-4 focus:border-primary-orange  focus:text-black transition duration-200 text-black px-3 bg-white"
                                                placeholder=""
                                                onChange={(e) => {handleMonto(e.target.value)}}
                                            />
                                            <span className={` text-xs sm:text-base longtxt rounded-lg text-black text-opacity-75 absolute left-0 top-3 px-3 
        transition duration-200 input-text pt-1 ${hasText(cobro)}`}>Ingresar monto a pagar</span>
                                        </label>

                                        <button onClick={handleSubmmitMonto} type='button' className=" mt-5 text-white w-1/3 bg-primary-orange hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5  text-center focus:z-10 dark:bg-primary-green dark:hover:bg-emerald-700 dark:text-gray-300 dark:hover:text-white dark:border-gray-500">
                                            Confirmar
                                        </button>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Modalz