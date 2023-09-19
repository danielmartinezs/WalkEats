"use client";

import { useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import '../styles/home.css';

const LoginForm = () => {
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [mail, setMail] = useState("");
    const router = useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await signIn('credentials', {
            email: mail,
            username: username,
            password: password,
            redirect: false,
        })
        if(res?.error){
            console.log("hay un error")
            return setError(res.error);
        }
        if(res?.ok){
            return router.push("/dashboard"); 
        }
        console.log(res);
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
                    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                        <input type='text' name='username' placeholder='Usuario' value={username} required onChange={(e) => {setUsername(e.target.value)}} className='p-2 mt-5 rounded-xl border'/>
                        <input type='text' name='email' placeholder='Email' value={mail} required onChange={(e) =>{setMail(e.target.value)}} className='p-2 mt-5 rounded-xl border'/>
                        <input type='password' name='password' placeholder='Password' value={password} required onChange={(e) => {setPassword(e.target.value)}} className='p-2 mt-5 rounded-xl border'/>
                        <button className='rounded-xl border bg-emerald-400 text-white py-2'>
                            Iniciar Sesión
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

export default LoginForm