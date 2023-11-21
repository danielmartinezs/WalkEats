'use client'

import React from 'react'
import Mapa from '@components/Mapa'
import { MdCenterFocusStrong } from "react-icons/md";

function page() {
    return (
        <div>
            <section className="home w-full flex-center flex-col">
                <h1 className="text-center mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
                    ¡Gracias por comprar en
                    <br />
                    <span className='bg-gradient-to-r from-yellow-300 via-primary-orange to-orange-400 bg-clip-text text-transparent'>
                        WalkEats!
                    </span>
                </h1>
                <br />
            </section>
            <section>
                <div className='w-full bg-orange-200'>
                    <Mapa />
                </div>
            </section>
        </div>
    )
}

export default page