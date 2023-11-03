"use client";

import { useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';

const RegisterForm = () => {
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const signUpRes = await axios.post('/api/auth/signup', {
                username,
                mail,
                password,
                confpassword
            })

            const res = await signIn('credentials', {
                email: mail,
                username: username,
                password: password,
                redirect: false,
            })
            if (res?.ok)
                return router.push("/dashboard");
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error);
                setError(error.response?.data.message)
            }
            console.log(error)
        }
    }

    return (
        <div>
            <section class="bg-cyan-100 dark:bg-gray-900 rounded-2xl py-3 shadow-md">
                <div class="sm:flex flex-col items-center justify-center px-6 py-8 mx-auto max-h-fit lg:py-0">
                    {error &&
                        <div className='bg-red-500 text-white p-2 mb-2'>
                            {error}
                        </div>
                    }
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Bienvenido a
                                <span className='text-2xl bg-gradient-to-r from-orange-400 via-primary-orange to-yellow-300 bg-clip-text text-transparent font-extrabold'>
                                    WalkEats
                                </span>
                            </h1>
                            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                                    <input type="text" name="username" placeholder="Escribe el nombre de usuario" value={username} required onChange={(e) => { setUsername(e.target.value) }} class="bg-gray-50 border border-orange-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" placeholder="name@company.com" value={mail} required onChange={(e) => { setMail(e.target.value) }} class="bg-gray-50 border border-orange-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                    <input type="password" name="password" placeholder="••••••••" value={password} required onChange={(e) => { setPassword(e.target.value) }} class="bg-gray-50 border border-orange-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar Contraseña</label>
                                    <input type="confirm-password" name="confirm-password" placeholder="Al menos 8 caracteres" value={confpassword} required onChange={(e) => { setConfPassword(e.target.value) }} class="bg-gray-50 border border-orange-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-orange-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">He leído y acepto los <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Términos y Condiciones</a></label>
                                    </div>
                                </div>
                                <button type="submit" class="w-full text-white bg-emerald-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Crear cuenta</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    ¿Ya tienes una cuenta? <a href="login" class="font-medium text-emerald-300 hover:underline dark:text-emerald-300">Inicia sesión aquí</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RegisterForm