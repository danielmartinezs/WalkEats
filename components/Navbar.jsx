"use client";
import React from 'react'
import Link from 'next/link';
import Iamge from 'next/image';
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
            <p className='logo_text'>
                WalkEats
            </p>
            </Link>
            <p>
                {location?.longitude}
            </p>
            <p>
                {location?.latitutde}
            </p>
            <Link
            href="/login">
                <button
                type='button'
                className='login_btn'>
                    Log In
                </button>
            </Link>
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
                        {providers && Object.values(providers).map((provider) => (
                            <button
                            type='button'
                            key={provider.name}
                            onClick={() => {signIn(provider.id)}}
                            className='login_btn'>
                                Log In
                            </button>
                        ))}
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
                        {providers && Object.values(providers).map((provider) => (
                            <button
                            type='button'
                            key={provider.name}
                            onClick={() => {signIn(provider.id)}}
                            className='black_btn'>
                                Sign In
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar