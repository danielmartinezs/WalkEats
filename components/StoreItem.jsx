'use client'
import { useContext, useEffect, useState  } from "react";
import CartContext from "@app/context/cartContext";
const StoreItem = ({ _item }) => {
    const [item, set_item] = useState(null)
    const [qty, set_qty] = useState(0)
    const { addItemToCart, cart, getItemQTY, deleteItemFromCart } = useContext(CartContext);
    const [fontSize, setFontSize] = useState(200);

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
            picture: item.picture,
            store: item.store,
            categories: item.categories,
            qty: item_qty
        })
    }

    const TextSize = () => {
        const determineSize = () => {
          const textLength = _item.name.length;
      
          if (textLength < 10) {
            return '24px';
          } else if (textLength < 20) {
            return '36px';
          } else {
            return '48px';
          }
        };
    }

    const borderColor = () => {
        if (!item) {
            return
        }
        const found = cart?.items?.find((itm) => itm.id_item === item.id_item)
        if (found && qty>0) {
            return `border-2 border-primary-orange `;
        }
        return 'border-2 border-black';
    }

    const increaseQty = () => {
        const newQty = qty + 1;
        const newItem = item;
        newItem.qty = newQty
        if (newQty <= 0) 
            return;
        console.log("Increase!", newItem)
        addItemToCart(newItem);
        set_qty((qty) => qty + 1)
    };

    const decreaseQty = () => {
        const newQty = qty - 1;
        const newItem = item;
        newItem.qty = newQty
        if (newQty < 0) 
            return;
        if(newQty === 0){
            console.log("Delete cuz 0")
            deleteItemFromCart(_item.id_item) 
            return;    
        }
        console.log("Decrease!", newItem)
        addItemToCart(newItem);
        set_qty((qty) => qty - 1)
    };

    useEffect(() => {
        set_item(_item)
        set_qty(getItemQTY(_item))
    }, [handleClick])

    return (
        <div className={`w-full my-5 h-full flex flex-col items-center p-4 rounded-lg bg-white  hover:scale-105  ${borderColor()}`} >
            <div
                className='grid grid-rows-6 w-full cursor-pointer  h-full'>
                <div className="w-full row-span-3 overflow-hidden rouded-xl justify-center" onClick={handleClick}>
                <img className="w-full h-full  " src={_item.picture} alt={`Imagen de ${item?.name}`} />
                </div>
                <div className=" row-span-1 "  onClick={handleClick}>
                <h1 className='mt-6 text-center justify-center items-center font-bold ' style={{"fontSize": `${TextSize()}`}}>
                    {item?.name}
                </h1>
                </div>
                <div
                className={`flex flex-col items-center row-span-1 w-full cursor-pointer justify-center`} onClick={handleClick}>
                <p className='text-2xl font-bold '>${item?.price}</p>
            </div>
            {qty ?
                <>
                    <div className="row-span-1 flex flex-col items-center justify-end w-full ">
                        <div className=" flex flex-row h-10 w-8/12 rounded-lg relative bg-transparent mt-1">
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
                </> : <><div className="row-span-1 flex flex-col items-center justify-end w-full" onClick={handleClick}> </div></>}
            </div>
        </div>
    )
}

export default StoreItem