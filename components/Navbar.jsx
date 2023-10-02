"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const { data:session } = useSession();
    const [providers, setProviders] = useState();
    const [location, setLocation] = useState();
    const [locationName, setLocationName] = useState();

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
        getLocationJs();
    }, [])

    const  fetchData = async (latitude, longitude) =>{
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
        {navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            const{ latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            console.log(latitude, longitude)
            fetchData(latitude, longitude)
        })}
    }

    return (
        <nav className='h-32 bg-cyan-100 flex justify-between w-full mb-2 pt-3 sm:flex-auto'>
            <Link 
            href="/"
            className='flex gap-3 flex-center'>
                <Image 
                src="/assets/LogoNew.jpg"
                alt="WalkEats logo"
                width={140}
                height={130}/>
            </Link>
            <p>
                {locationName}
            </p>
            {/*DESKTOP NAVIGATION*/}
            <div className='sm:flex hidden '>
                {session?.user ? (
                    <div className=''>
                        <Link
                        href="/">
                        </Link>
                        <button
                        type='button'
                        onClick={signOut}
                        className='rounded-full border border-black bg-orange-400 shadow-md shadow-orange-400 py-2.5 px-5 text-white text-sm font-inter flex items-center justify-center'>
                        Sign Out
                        </button>
                    </div>
                ) : (
                    <div>
                        <Link
                        href="/login">
                            <button
                            type='button'
                            className='rounded-full border border-black bg-orange-400 shadow-md shadow-orange-400 py-2.5 px-5 text-white text-sm font-inter flex items-center justify-center'>
                                Log In
                            </button>
                        </Link>
                        <Link
                        href="/register">
                            <button
                            type='button'
                            className='rounded-full border border-black bg-emerald-400 shadow-md shadow-orange-400 py-2.5 px-5 text-white text-sm font-inter flex items-center justify-center'>
                                Register
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
                    <div className='flex flex-col'>
                        <Link
                        href="/login">
                            <button
                            type='button'
                            className='rounded-full border border-black bg-orange-400 shadow-md shadow-orange-400 px-5 py-5 text-white text-sm font-inter flex items-center justify-center'>
                                Log In
                            </button>
                        </Link>
                        <Link
                        href="/register">
                            <button
                            type='button'
                            className='rounded-full border border-black bg-emerald-400 shadow-md shadow-orange-400 px-5 py-5 text-white text-sm font-inter flex items-center justify-center'>
                                Register
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar