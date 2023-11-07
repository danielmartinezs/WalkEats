'use client'
import React from 'react'

const HelpForm = () => {
    /* Captcha */
    const [_captcha, set_captcha] = useState("")
    const [_error, set_error] = useState("")
    const [_eventos, set_eventos] = useState([])
    const router = useRouter();

    const [_formData, set_formData] = useState({ correo: "", msg: "" })


    const reRef = useRef();
    
    const hasText = (job) => {
        if (job.length > 0)
            return 'bg-white transform -translate-y-5 -translate-x-1 scale-75'
        else
            return ''
    }



    const onSubmit = async (event) => {
        event.preventDefault()
        const token = await reRef.current.executeAsync()
        reRef.current.reset();

        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: _formData
            })
            if (response.status === 201) { }

            const data = await response.json()
            if (data.error) {
                set_error(data.error);
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

    }, [])
    return (
        <div className='w-full  pt-6 flex flex-col justify-center'>
            <form className='flex flex-col justify-center w-9/12 mx-auto bg-white' onSubmit={onSubmit}>
                <label className="relative mx-auto w-9/12 overflow-hidden">
                    <input
                        type="text"
                        id="correo"
                        className="my-4 h-10 w-full text-base bg-white border-2 rounded-lg border-black border-opacity-50 outline-none
              focus:border-blue-500 focus:text-black transition duration-200 text-black px-3"
                        placeholder=""
                        onChange={(e) => { set_nombre(e.target.value); }}
                    />
                    <span className={` text-xs sm:text-base longtxt rounded-lg text-black text-opacity-75 absolute left-0 top-5 px-3 
        transition duration-200 input-text pt-1 ${hasText(_nombre)}`}>Nombre Completo</span>
                </label>
                <label className="relative mx-auto w-9/12 overflow-hidden">
                    <input
                        type="text"
                        className="my-4 h-10 w-full text-base bg-white border-2 rounded-lg border-black border-opacity-50 outline-none
              focus:border-blue-500 focus:text-black transition duration-200 text-black px-3"
                        placeholder=""
                        onChange={(e) => { set_nombre(e.target.value); }}
                    />
                    <span className={` text-xs sm:text-base longtxt rounded-lg text-black text-opacity-75 absolute left-0 top-5 px-3 
        transition duration-200 input-text pt-1 ${hasText(_nombre)}`}>Comentario</span>
                </label>

                {/* Captcha */}
                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_WEBKEY}
                    size="invisible"
                    ref={reRef}
                    onChange={set_captcha} />

                <div className='flex justify-end items-end w-full mt-7'>
                    <input type='submit' className=' rounded-md  border-blue-500 border-4 text-black bg-white
           mb-6 mx-7 hover:bg-blue-500 w-32 hover:text-white text-xl 
            '></input>
                </div>

            </form>
        </div>
    )
}

export default HelpForm