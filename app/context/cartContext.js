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

    const getTotal = () =>{
    let totalCost = 0;
    cart?.items?.forEach(item => {
        console.log("total", item.price + " " + item.qty)
        totalCost += item.price * item.qty;
    });
    return totalCost +20;
    }

    const addItemToCart = async ({
        id_item,
        name,
        price,
        picture,
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
            picture, 
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
        console.log("Delete cuz 0 id",id)
        const newCartItems = cart?.items?.filter((i) => i.id_item !== id);
        console.log("newCartItems cuz 0",JSON.stringify(newCartItems))
        localStorage.setItem("cart", JSON.stringify({ items: newCartItems }));
        setCartItems();
      };
      const getStores = () =>{
        let stores = [];
        cart?.items?.forEach(item => {
            if(stores[item.store])
                console.log("store", [item.store]) 
        });
       return  stores 
    }
    useEffect(() => {
      setCartItems()
    }, [])
    
    return (
        <CartContext.Provider
        value={
            {   cart, 
                addItemToCart,
                deleteItemFromCart,
                getItemQTY,
                getTotal,
                getStores
            }
            }>
            {children}
        </CartContext.Provider>
    )
}   

export default CartContext;