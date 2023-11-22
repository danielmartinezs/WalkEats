"use client";

import React, { useContext, useState } from "react";
import Modalz from '@components/Modalz';

import CartContext  from "@app/context/cartContext";
import Link from "next/link";

const Cart = () => {
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



  const { addItemToCart, deleteItemFromCart, cart, getTotal } = useContext(CartContext);
  const increaseQty = (item) => {
    const newQty = item?.qty + 1;
    const newItem = { ...item, qty: newQty };
    console.log("Increase!", JSON.stringify(item))

    addItemToCart(newItem);
  };

  const decreaseQty = (item) => {
    const newQty = item?.qty - 1;
    const newItem = { ...item, qty: newQty };

    if (newQty <= 0) return;

    addItemToCart(newItem);
  };

  return (
    <div className="">
            <div>
                <Modalz
                    id={modalPag}
                    modal={modalPago}
                    total={getTotal()}
                    />
            </div>
      <section className="py-5 sm:py-7 ">
        <div className="container text-center  max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-2">
            {cart?.items?.length || 0} Productos en el carrito
          </h2>
        </div>
      </section>

      {cart?.items?.length > 0 ? 
        <section className="py-10">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <main className="md:w-3/4">
                <article className="border-2  border-primary-orange  shadow-sm rounded mb-5 p-3 lg:p-5">
                  {cart?.items?.map((item) => (
                    <div key={item.id_item}>
                      <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                        <div className="w-full lg:w-2/5 xl:w-2/4">
                          <figure className="flex leading-5">
                            <div>
                              <div className="block w-16 h-16 rounded border bg-white border-primary-orange  overflow-hidden">
                              <img src={item.picture} alt={item.name} />  
                              </div>
                            </div>
                            <figcaption className="ml-3">
                              <p>
                                <a href="#" className="hover:text-blue-600">
                                  {item.name}
                                </a>
                              </p>
                              <p className="mt-1 text-gray-400">
                                {" "}
                                Vendedor: {item.store}
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="w-24">
                          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                              data-action="decrement"
                              className=" bg-primary-orange text-white hover:textwhite hover:bg-orange-400 h-full w-20 rounded-l cursor-pointer outline-none"
                              onClick={() => decreaseQty(item)}
                            >
                              <span className="m-auto text-2xl font-thin">
                                −
                              </span>
                            </button>
                            <input
                              type="number"
                              className="text-center w-full bg-orange-200 font-semibold text-md  md:text-basecursor-default flex items-center text-black outline-none custom-input-number"
                              name="custom-input-number"
                              value={item.qty}
                              readOnly
                            ></input>
                            <button
                              data-action="increment"
                              className="bg-primary-orange text-white hover:textwhite hover:bg-orange-400 h-full w-20 rounded-r cursor-pointer"
                              onClick={() => increaseQty(item)}
                            >
                              <span className="m-auto text-2xl font-thin">
                                +
                              </span>
                            </button>
                          </div>
                        </div>
                        <div>
                          <div className="leading-5">
                            <p className="font-semibold not-italic">
                              ${item.price * item.qty.toFixed(2)}
                            </p>
                            <small className="text-gray-400">
                              {" "}
                              ${item.price}  c / u{" "}
                            </small>
                          </div>
                        </div>
                        <div className="flex-auto">
                          <div className="float-right">
                            <a
                              className="px-4 py-2 inline-block hover:bg-emerald-400 text-white bg-primary-green shadow-sm border border-primary-green rounded-xl cursor-pointer"
                              onClick={() =>
                                deleteItemFromCart(item?.id_item)
                              }
                            >
                              Eliminar
                            </a>
                          </div>
                        </div>
                      </div>

                      <hr className="my-4 bg-primary-orange h-0.5 " />
                    </div>
                  ))}
                </article>
              </main>
              <aside className="md:w-1/4 flex flex-col justify-center items-center align-middle">
                <article className="border-2 border-primary-orange bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                  <ul className="mb-5">
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Servicio</span>
                      <span>$ 20</span>
                    </li>
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Productos:</span>
                      <span className="text-green-500">
                        {cart?.items?.reduce(
                          (acc, item) => acc + item.qty,
                          0
                        )}{" "}
                        (Productos)
                      </span>
                    </li>
                    <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                      <span>Precio Total:</span>
                      <span>${getTotal()}</span>
                    </li>
                  </ul>

                  <a onClick={() => { createModal() }} className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-primary-orange border border-transparent rounded-md hover:bg-orange-400 cursor-pointer">
                    Continuar
                  </a>

                  <Link
                    href="/store"
                    className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-primary-green bg-white shadow-sm border border-primary-green rounded-md hover:text-white hover:bg-primary-green"
                  >
                    Regresar a la tienda
                  </Link>
                </article>
              </aside>
            </div>
          </div>
        </section>
      : 
      <div className=" w-full flex flex-col justify-center items-center my-12">
          <button 
          className="w-1/5 h-10 text-white text-xl hover:bg-orange-400 bg-primary-orange rounded-xl ">
            Regresar a la tienda
          </button>
      </div>}
    </div>
  );
};

export default Cart;