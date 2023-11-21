'use client'
import React from 'react'
import { useState, useRef, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha'


const HelpForm = () => {
    /* Captcha */
    const [_captcha, set_captcha] = useState("")
    const [_error, set_error] = useState("")
    const router = useRouter();

    const [_formData, set_formData] = useState({ nombre: "", telefono: "", correo: "", msg: "" })


    const reRef = useRef();
    
    const hasText = (job) => {
        if (job.length > 0)
            return 'bg-primary-orange  transform -translate-y-5 -translate-x-1 scale-75'
        else
            return ''
    }

    const handleChange = (e) =>{
        set_formData({
            ..._formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        const token = await reRef.current.executeAsync()
        reRef.current.reset();
        const response = await fetch('/api/auth/captcha', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                token: token,
            })
        })
        console.log(response)
        if (response.status === 201) {

        }
    }

    return (
        <div className='w-full pt-6 px-6 h-full align-middle mb-6 flex' >
            <form className='flex flex-col justify-center w-full mx-auto bg-primary-orange  border-white border-2 rounded-lg' onSubmit={onSubmit}>
               <label className="relative mx-auto w-9/12 overflow-hidden mt-3">
                    <input
                        type="text"
                        id="correo"
                        name="correo"
                        className=" my-2 h-10 w-full text-base rounded-lg border-white border-2 
              focus:border-4 focus:border-white  focus:text-white transition duration-200 text-white px-3 bg-primary-orange "
                        placeholder=""
                        onChange={handleChange}
                    />
                    <span className={` text-xs sm:text-base longtxt rounded-lg text-white text-opacity-75 absolute left-0 top-3 px-3 
        transition duration-200 input-text pt-1 ${hasText(_formData.correo)}`}>Email</span>
                </label>


                <label className="relative mx-auto w-9/12 overflow-hidden">
                    <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        className="my-2 h-10 w-full text-base rounded-lg border-white border-2 
                        focus:border-4 focus:border-white  focus:text-white transition duration-200 text-white px-3 bg-primary-orange"
                        placeholder=""
                        onChange={handleChange}
                    />
                    <span className={` text-xs sm:text-base longtxt rounded-lg text-white text-opacity-75 absolute left-0 top-3 px-3 
        transition duration-200 input-text pt-1 ${hasText(_formData.telefono)}`}>Celular</span>
                </label>


                <label className="relative mx-auto w-9/12 overflow-hidden">
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="my-2 h-10 w-full text-base rounded-lg border-white border-2 
                        focus:border-4 focus:border-white  focus:text-white transition duration-200 text-white px-3 bg-primary-orange"
                        placeholder=""
                        onChange={handleChange}
                    />
                    <span className={` text-xs sm:text-base longtxt rounded-lg text-white text-opacity-75 absolute left-0 top-3 px-3 
        transition duration-200 input-text pt-1 ${hasText(_formData.nombre)}`}>Nombre</span>
                </label>


                <label className="relative mx-auto w-9/12 overflow-hidden">
                    <textarea
                        type="textarea"
                        id="msg"
                        name="msg"
                        rows={7}
                        className="my-2 w-full text-base rounded-lg border-white border-2 
                        focus:border-4 focus:border-white  focus:text-white transition duration-200 text-white px-3 bg-primary-orange"
                        placeholder=""
                        onChange={handleChange}
                    />
                    <span className={` text-xs sm:text-base longtxt rounded-lg text-white text-opacity-75 absolute left-0 top-3 px-3 
        transition duration-200 input-text pt-1 ${hasText(_formData.msg)}`}>Comentario</span>
                </label>



                {/* Captcha */}
                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_WEBKEY}
                    size="invisible"
                    ref={reRef}
                    onChange={set_captcha} />

                <div className=' w-9/12 mt-7 mb-4 mx-auto'>
                    <input type='submit' className=' rounded-full shadow-green-600 border-primary-green border-4 text-white bg-green-300
            hover:bg-primary-green w-32 hover:text-white text-xl 
            '></input>
                </div>

            </form>
        </div>
    )
}

export default HelpForm