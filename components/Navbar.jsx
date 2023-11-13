"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { TiLocation } from 'react-icons/ti';
import { usePathname } from 'next/navigation'
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import { fadeRevealText } from './Animations';

const Navbar = () => {
    const { data: session } = useSession();
    const [providers, setProviders] = useState();
    const [location, setLocation] = useState();
    const [locationName, setLocationName] = useState();
    const locationRef = useRef(null);
    const url = usePathname()

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    }, [])

    useEffect(() => {
        animation(locationRef)
    }, [locationName])

    const fetchData = async (latitude, longitude) => {
        /*const locData = await fetch('/api/utils', {
            method: "POST",
            body: JSON.stringify({
                latitude: latitude,
                longitude: longitude,
            }),
          });*/

        /*let info = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude}, ${longitude}&key=AIzaSyDbY20tuOJ2KCqdmgoGUYuZUBbqVSZe4Ss`
        ).then(async (resp) =>{
          console.log(await resp)
          let location = await resp.json()
          set_location_name(location.results[2].formatted_address)
        }).catch((err) =>{
          console.log(err)
        })*/
        setLocationName("Rectoria, Eje Metropolitano 6, Zona Valle Poniente, 66233 San Pedro Garza García, N.L.")
    }

    const getLocationJs = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                console.log(latitude, longitude)
                fetchData(latitude, longitude)
            })
            fadeRevealText(locationRef)
        }
        else {
            alert("Geolocation is not supported by this browser.")
        }
    }

    const animation = () => {
        fadeRevealText(locationRef)
    }

    return (
        <>
            {((url.indexOf("/login") !== -1) || (url.indexOf("/register") !== -1)) ?
                <>

                </> :

                <>
                    <nav className='h-32 bg-cyan-100 flex justify-between w-full pt-4 sm:flex-auto'>
                        <Link
                            href="/"
                            className='flex gap-3 flex-center'>
                            <Image
                                src="/assets/LogoNew.jpg"
                                alt="WalkEats logo"
                                width={140}
                                height={130} />
                        </Link>
                        <button
                            onClick={() => { getLocationJs() }}
                            className='rounded-full px-2 py-3.5'>
                            <TiLocation
                                color='orange'
                                size='0.5 rem' />
                        </button>
                        {location &&
                            <div ref={locationRef} className='relative top-[-50%] right-40'>
                                {locationName}
                            </div>
                        }
                        {/*DESKTOP NAVIGATION*/}
                        <div className='md:block hidden md:max-2xl:flex'>
                            {session?.user ? (
                                <div className=''>
                                    <Link
                                        href="/">
                                    </Link>
                                    <button
                                        type='button'
                                        onClick={signOut}
                                        className='rounded-full bg-primary-orange shadow-md shadow-orange-400 hover:bg-orange-400 px-5 py-3.5 mr-2.5 text-white text-sm font-inter items-center justify-center'>
                                        Sign Out
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <Link
                                        href="/login">
                                        <button
                                            type='button'
                                            className='rounded-full bg-primary-orange shadow-md shadow-orange-400 hover:bg-orange-400 px-5 py-3.5 mr-2.5 text-white text-sm font-inter items-center justify-center'>
                                            Log In
                                        </button>
                                    </Link>
                                    <Link
                                        href="/register">
                                        <button
                                            type='button'
                                            className='rounded-full bg-emerald-400 shadow-md shadow-emerald-400 hover:bg-primary-green px-5 py-3.5 mr-2.5 text-white text-sm font-inter items-center justify-center'>
                                            Register
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                        {/*MOBILE NAVIGATION*/}
                        <div className='sm:flex relative md:max-2xl:hidden sm:mr-5'>
                            {session?.user ? (
                                <div className='flex'>
                                    <Link
                                        href="/">
                                    </Link>
                                    <button
                                        type='button'
                                        onClick={signOut}
                                        className='rounded-full bg-primary-orange shadow-md shadow-orange-400 hover:bg-orange-400 px-5 py-3.5 mr-4.5 text-white text-sm font-inter items-center justify-center'>
                                        Sign Out
                                    </button>
                                </div>
                            ) : (
                                <div className='flex flex-col'>
                                    <Link
                                        href="/login">
                                        <button
                                            type='button'
                                            className='rounded-full border bg-primary-orange shadow-md shadow-orange-400 hover:bg-orange-400 px-5 py-5 mr-4.5 text-white text-sm font-inter items-center justify-center'>
                                            Log In
                                        </button>
                                    </Link>
                                    <Link
                                        href="/register">
                                        <button
                                            type='button'
                                            className='rounded-full border bg-emerald-400 shadow-md shadow-emerald-400 hover:bg-primary-green px-5 py-5 mr-4.5 text-white text-sm font-inter items-center justify-center'>
                                            Register
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </nav>
                </>}
        </>
    )
}

export default Navbar