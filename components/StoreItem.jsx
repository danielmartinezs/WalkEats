'use client'
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CartContext from "@app/context/cartContext";
const StoreItem = ({ _item }) => {
    const router = useRouter();
    const [item, set_item] = useState(null)
    const [qty, set_qty] = useState(0)
    const { addItemToCart, cart, getItemQTY } = useContext(CartContext);

    const handleClick = () => {
        if (!item) {
            return
        }
        let item_qty = qty
        if(item_qty<=0) item_qty=1
        addItemToCart({
            id_item: item.id_item,
            name: item.name,
            price: item.price,
            url: item.url,
            store: item.store,
            categories: item.categories,
            qty: item_qty
        })
    }
    const borderColor = () => {
        if (!item) {
            return
        }
        const found = cart?.items?.find((itm) => itm.id_item === item.id_item)
        if (found) {
            return `border-4 border-primary-orange `;
        }
        return 'border-2 border-black';
    }

    const increaseQty = () => {
        const newQty = qty + 1;
        const newItem = item;
        newItem.qty = newQty
        if (newQty <= 0) return;
        console.log("Increase!", newItem)
        addItemToCart(newItem);
        set_qty((qty) => qty + 1)
    };

    const decreaseQty = () => {
        const newQty = qty - 1;
        const newItem = item;
        newItem.qty = newQty
        if (newQty <= 0) return;
        console.log("Decrease!", newItem)
        addItemToCart(newItem);
        set_qty((qty) => qty - 1)
    };

    useEffect(() => {
        set_item(_item)
        set_qty(getItemQTY(_item))
    }, [handleClick])

    return (
        <div className={`w-9/12 mt-5 h-full flex flex-col  items-center p-4 rounded-lg bg-white  ${borderColor()}`} >
            <div
                className='flex flex-col items-center justify-center cursor-pointer' onClick={handleClick}>
                <img className="w-full" src="/assets/logodavilas.png" alt={`Imagen de ${item?.name}`} />
                <h1 className='mt-6 text-center md:text-3xl font-bold'>
                    {item?.name}
                </h1>
            </div>
            <div
                className={`flex flex-col items-center w-full  h-full cursor-pointer ${qty? 'justify-end':'justify-center'}`} onClick={handleClick}>
                <p className='text-2xl font-bold '>${item?.price}</p>
            </div>
            {qty ?
                <>
                    <div className="w-24 flex flex-col items-center justify-end h-full ">
                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                                data-action="decrement"
                                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                onClick={() => decreaseQty()}
                            >
                                <span className="m-auto text-2xl font-thin">
                                    −
                                </span>
                            </button>
                            <input
                                type="number"
                                className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
                                name="custom-input-number"
                                value={qty || 0}
                                readOnly
                            ></input>
                            <button
                                data-action="increment"
                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                onClick={() => increaseQty()}
                            >
                                <span className="m-auto text-2xl font-thin">
                                    +
                                </span>
                            </button>
                        </div>
                    </div>
                </> : <></>}

        </div>
    )
}

export default StoreItem