"use client";
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import io from 'socket.io-client'

function Dashpage() {

    const {data: session, status} = useSession();
    const [message, setMessage] =  useState("Sin pedidos");

    useEffect(() => {
      const socket = io("http://localhost:3001")
      socket.on("pedido", (data, callback) => {
        setMessage(data);
        callback("Pedido recibido")
      })
    }, [])

    const socketInitializer = async () => {
      await fetch('/api/socket')
      let socket = io("http://localhost:3001")

      socket.on('connect', () => {
        console.log('connected!')
      })
    }

  return (
    <div>
        Dash
        <pre>
          {/* {JSON.stringify({
            session,
            status
          },
          null,
          2)} */}
          {JSON.stringify(message, 2)}
        </pre>
    </div>
  )
}

export default Dashpage