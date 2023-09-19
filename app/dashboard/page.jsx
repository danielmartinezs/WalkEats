"use client";
import React from 'react'
import { useSession } from 'next-auth/react';

function Dashpage() {

    const {data: session, status} = useSession();

  return (
    <div>
        Dash
        {console.log(session, status)}
        <pre>
          {JSON.stringify({
            session,
            status
          },
          null,
          2)}
        </pre>
    </div>
  )
}

export default Dashpage