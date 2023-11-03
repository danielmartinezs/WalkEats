"use client";

import { useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

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
        if (res?.error) {
            console.log("hay un error")
            return setError(res.error);
        }
        if (res?.ok) {
            return router.push("/delivery");
        }
        console.log(res);
    }

    return (
        <div>
            <section className=" bg-cyan-100 dark:bg-gray-900 rounded-2xl py-3 shadow-md">
                <div className="flex items-center justify-center px-6 py-8 mx-auto max-h-fit lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            {error &&
                                <div className='bg-red-500 text-white p-2 mb-2'>
                                    {error}
                                </div>
                            }
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Bienvenido a
                                <span className='text-2xl font-extrabold bg-gradient-to-r from-orange-400 via-primary-orange to-yellow-300 bg-clip-text text-transparent'>
                                    WalkEats
                                </span>
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                                    <input type='text' name='username' placeholder='Usuario' value={username} required onChange={(e) => { setUsername(e.target.value) }} className="bg-gray-50 border border-orange-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name='email' placeholder='Email' value={mail} required onChange={(e) => { setMail(e.target.value) }} className="bg-gray-50 border border-orange-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                    <input type="password" name='password' placeholder='Password' value={password} required onChange={(e) => { setPassword(e.target.value) }} className="bg-gray-50 border border-orange-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <button type="submit" className="w-full text-white bg-emerald-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Iniciar sesión</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    ¿Aún no tienes una cuenta? <a href="register" className="font-medium text-emerald-300 hover:underline dark:text-emerald-300">Regístrate aquí</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginForm