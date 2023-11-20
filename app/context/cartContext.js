'use client'

import { useRouter } from 'next/navigation'
import {createContext, useState, useEffect} from 'react'
/*

*/
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const router = useRouter();

    const setCartItems = () =>{
        setCart(
            localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []
        )
    }
    const getItemQTY = (_item) =>{
        if(cart.length<=0) return 0
        const i = cart.items.filter(itm => {
            return itm.id_item === _item.id_item
          })
        console.log(_item.name, i[0]?.qty)
        if(i[0]?.qty){
           return i[0].qty
        }
        else{
            return 0
        }
    }
    const addItemToCart = async ({
        id_item,
        name,
        price,
        url,
        store,
        categories, 
        qty =1
    }) =>{
        console.log("Click!", name)
        const newItem = 
        {
            id_item, 
            name, 
            price, 
            url, 
            store, 
            categories, 
            qty
        }
        console.log("ContextCard")
        console.log(newItem)
        const itExists = cart?.items?.find(
            (i) => i.id_item === newItem.id_item 
        )

        console.log("itExists", itExists)
        let newCartItems;
        if(itExists){
            newCartItems = cart?.items?.map((it)=>
                it.id_item === itExists.id_item ? newItem : it
            )
        }else{
            newCartItems = [...(cart?.items) || [], newItem]
        }
        localStorage.setItem("cart", JSON.stringify({items: newCartItems}))
        console.log("newCartItems", JSON.stringify(newCartItems))
        setCartItems(newCartItems)
    }

    const deleteItemFromCart = (id) => {
        const newCartItems = cart?.items?.filter((i) => i.id_item !== id);
    
        localStorage.setItem("cart", JSON.stringify({ items: newCartItems }));
        setCartItems();
      };

    useEffect(() => {
      setCartItems()
    }, [])
    
    return (
        <CartContext.Provider
        value={
            {   cart, 
                addItemToCart,
                deleteItemFromCart,
                getItemQTY
            }
            }>
            {children}
        </CartContext.Provider>
    )
}   

export default CartContext;