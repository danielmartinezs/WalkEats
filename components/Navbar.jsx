"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import '../styles/navbar.css'

const Navbar = () => {
    const { data:session } = useSession();
    const [providers, setProviders] = useState();
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [location, setLocation] = useState();

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
        getLocationJs();
    }, [])

    const getLocationJs = () => {
        {navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            const{ latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
        })}
    }

    return (
        <nav className='navbar flex justify-between w-full mb-2 pt-3'>
            <Link 
            href="/"
            className='flex gap-3 flex-center'>
                <Image 
                src="/assets/Logo.svg"
                alt="WalkEats logo"
                width={100}
                height={100}/>
            </Link>
            <p>
                {location?.longitude}
            </p>
            <p>
                {location?.latitutde}
            </p>
            {/*DESKTOP NAVIGATION*/}
            <div className='sm:flex hidden '>
                {session?.user ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link
                        href="/">
                        </Link>
                        <button
                        type='button'
                        onClick={signOut}
                        className='outline_btn'>
                        Sign Out
                        </button>
                    </div>
                ) : (
                    <div>
                        <Link
                        href="/login">
                            <button
                            type='button'
                            className='login_btn'>
                                Log In
                            </button>
                        </Link>
                    </div>
                ) }
            </div>
            {/*MOBILE NAVIGATION*/}
            <div className='sm:hidden flex relative'>
                {session?.user ? (
                    <div className='flex'>

                    </div>
                ):(
                    <div>
                        <Link
                        href="/login">
                            <button
                            type='button'
                            className='login_btn'>
                                Log In
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar