'use client'
import React from 'react'
import Item from './StoreItem'
import { useState, useEffect, useContext } from 'react'
import CartContext from "@app/context/cartContext";

const StoreList = ({ data, loading }) => {
    const [_selected, set_selected] = useState(null)
    const toggle = (i) => {
        if (_selected === i) {
            return set_selected(null)
        }
        set_selected(i)
    }
    const isValid = arrayOfArray => arrayOfArray.every(arr => Array.isArray(arr) && arr.length === 0)
    return (
        <>
            {data.error ?
                <>
                    <Error
                        msg={data.error}
                    />
                </> :
                <>
                    {data.length <= 0 ?
                        <>
                            <div
                                className="inline-block h-64 w-64 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-[#FFBF69] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                                <span
                                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                >Loading...</span>
                            </div>
                        </> :
                        <>
                            {isValid(data) ?
                                <>
                                <div className='flex flex-col justify-center items-center mb-6'>
                                <h1 className='text-3xl'>No hay productos que coincidan con esa búsqueda</h1>
                                    <h1 className='text-xl mt-3'>Intenta bucando con otro nombre</h1>
                                </div>
                                </>
                                : <>
                                    <div className='w-full accordion'>
                                        {data.map((sto, i) => (
                                            <div key={i}>
                                                {sto.length >= 1 ?
                                                    <>
                                                        <div className='w-full store_accordion'>

                                                            <div className='store_accordion_title' onClick={() => toggle(i)}>
                                                                <p >{sto[0]?.store}</p>
                                                                <span>{_selected === i ? '-' : '+'}</span>
                                                            </div>
                                                            <div>
                                                                <div
                                                                    className={` ${_selected === i ? 'store_accordion_content show' : 'store_accordion_content'}`}>
                                                                    {sto.map((item, i) => (
                                                                        <div className='col-span-1 store_Card flex flex-col justify-center items-center m-auto w-full' key={item.id_item}>
                                                                            <Item
                                                                                _item={item}
                                                                            />
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </> :
                                                    <>
                                                    </>}
                                            </div>
                                        ))}
                                    </div>
                                </>}

                        </>
                    }
                </>}
        </>

    );
}

export default StoreList