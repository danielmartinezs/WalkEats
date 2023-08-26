"use client";

import { useState } from 'react';
import Image from 'next/image';
import  { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import '../styles/home.css';
import axios, { AxiosError } from 'axios';

const Form = () => {
    const [error, setError] = useState("");
    const [rol, setRol] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [mail, setMail] = useState("");
    const botones = [
        { rol: 'admin', name: 'Administrador', code: 1 },
        { rol: 'deliver', name: 'Repartidor', code: 2},
        { rol: 'comensal', name: 'Comensal', code: 3},
    ];
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(mail, username, password)
            const res = await axios.post('/api/auth/signup', {
                rol,
                username,
                mail,
                password
            })
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error);
                setError(error.response?.data.message)
            }
            console.log(error)
        }
    }

    return (
    <div>
        <section className='min-h-screen flex items-center justify-center'>
            <div className='bg-cyan-100 flex rounded-2xl shadow-lg max-w-3x1 p-5 items-center'>
                <div className='sm:w-1/2'>
                    {error &&
                    <div className='bg-red-500 text-white p-2 mb-2'>
                        {error}
                    </div>
                    }
                    <h1 className='font-bold text-2xl text-center'>Welcome to WalkEats</h1>
                    <br/>
                    <h2 className='font-bold text-2x1 text-center'>Rol</h2>
                    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                        <div className='flex justify-center bg-emerald-400 rounded-xl py-1 space-x-7 text-white focus:scale-125'>
                            {botones.map((botones, id) => (
                                <>
                                <button type='button' onClick={() => {setRol(botones.code)}} className='hover:text-orange-400 focus:font-bold focus:text-orange-400'>{botones.name}</button>    
                                </>
                            ))}
                        </div>
                        <input type='text' name='username' placeholder='Usuario' value={username} required onChange={(e) => {setUsername(e.target.value)}} className='p-2 mt-5 rounded-xl border'/>
                        <input type='text' name='email' placeholder='Email' value={mail} required onChange={(e) =>{setMail(e.target.value)}} className='p-2 mt-5 rounded-xl border'/>
                        <input type='password' name='password' placeholder='Password' value={password} required onChange={(e) => {setPassword(e.target.value)}} className='p-2 mt-5 rounded-xl border'/>
                        <button className='rounded-xl border bg-emerald-400 text-white py-2'>
                            Registrar
                        </button>
                    </form>
                </div>
                <div className='w-1/2'>
                    <img src='/assets/placeholder.jpg' alt='dummy' className='sm:block hidden rounded-2xl'/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Form