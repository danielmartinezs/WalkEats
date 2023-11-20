"use client";
import React from 'react'
import { SessionProvider } from 'next-auth/react';
import { CartProvider } from '@app/context/cartContext';

const Provider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <CartProvider>
      {children}
      </CartProvider>
    </SessionProvider>
  )
}

export default Provider