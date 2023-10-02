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
    const [_location_name, set_location_name] = useState("")
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
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude}, ${longitude}&key=${process.env.GOOGLE_MAPS_API_KEY}`
          ).then(async (resp) =>{
            console.log(await resp)
            let location = await resp.json()
            set_location_name(location.results[2].formatted_address)
          }).catch((err) =>{
            console.log(err)
          })*/
          set_location_name("Rectoria, Eje Metropolitano 6, Zona Valle Poniente, 66233 San Pedro Garza García, N.L.")

    }

    const getLocationJs = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            const{ latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            console.log(latitude, longitude)
            fetchData(latitude, longitude)
        })
    }

    return (
        <nav className='navbar flex justify-between w-full mb-2 pt-3 sm:flex-auto'>
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
                {_location_name}
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