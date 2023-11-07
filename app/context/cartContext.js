'use client'

import { useRouter } from 'next/navigation'
import {createContext, useState, useEffect} from 'react'

const CartContext = createContext();

const cartProvider = ({ children }) =>{
    const [cart, setCart] = useState([]);
    const router = useRouter();
    return (
        <CartContext.Provider
        value={
            {cart, }
            }>
            {children}
        </CartContext.Provider>
    )
}   

export default cartProvider;