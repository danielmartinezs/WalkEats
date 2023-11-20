'use client'
import '../styles/home.css'
import Image from 'next/image'
import bg from '../public/assets/_stock_hamburger-49470.jpg'
import Comments from '@components/comment/CommentBox'
import Commentz from '@components/Commentz'
import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
import { useRouter } from 'next/navigation';
import HelpForm from '@components/HelpForm'

const Home = () => {
  const router = useRouter();

  return (
    <div className='scroll-container bg-black '>
      <section className=' scroll-area flex flex-col mt-0  '>
        <div className='w-full '>
          <Navbar />
        </div>
        <div className='flex flex-col justify-center sm:grid sm:grid-cols-2 sm:grid-rows-4 w-full h-full demo-wrap'>
          <img
            className="demo-bg"
            src="/assets/_stock_hamburger-49470.jpg"
            alt="Imágen de fondo de una haburguesa"
          />
          <div className='sm:col-span-1 p-3 w-full sm:row-span-2 align-bottom mx-auto mt-auto pb-6 demo-content'>
            <h1
              className="text-center mt-5 text-8xl font-extrabold leading-[1.15] tracking-tight">
              <span className='orange-gradient bg-gradient-to-r bg-clip-text text-transparent shadow-orange-600'>
                WalkEats
              </span>
            </h1>
            <h1 className='text-center text-4xl font-bold  leading-[1.15] '>
              <span className='text-green-300'>
                A Un Paso Cerca De Ti
              </span>
            </h1>
          </div>

          <div className='sm:col-span-2 sm:row-span-1 w-6/12 flex flex-col items-center justify-center demo-content'>
            <div className='grid grid-cols-2 align-bottom mx-auto mt-auto'>
              <div className='col-span-1 flex flex-col py-3 pr-2'>
                <button
                  type="button"
                  onClick={() => { router.push('/store') }}
                  className='rounded-full shadow-md shadow-orange-600 px-5 py-3.5 text-white font-inter items-center justify-center bg-primary-orange text-lg'>
                  Pide comida</button>
              </div>
              <div className='col-span-1 flex flex-col py-3 pr-2'>
                <button
                  type="button"
                  onClick={() => { router.push('/register') }}
                  className='rounded-full shadow-md shadow-green-600 px-5 py-3.5 text-white font-inter items-center justify-center bg-primary-green text-lg'>
                  Conviertete en Walkie</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='grid grid-cols-2 grid-rows-2 w-full scroll-area bg-primary-green' id="walkies">
        <div className='grid grid-rows-6 p-12 bg-white col-span-2 row-span-1 sm:row-span-2  sm:col-span-1  w-full'>
          <div className='flex flex-col justify-center align-middle items-center row-span-5'>
          <h1 className=" text-left text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
            WalkEats
            <br />
            <span className='bg-gradient-to-r orange-gradient bg-clip-text text-transparent'>
              Tus locales favoritos a un paso cerca de ti
            </span>
          </h1>
          <p className='mt-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita adipisci optio illum exercitationem beatae ad velit consequuntur possimus quas id repellendus pariatur facere, aspernatur, vitae ipsam? Pariatur dolore necessitatibus expedita!</p>
          </div>
          <div className='row-span-1 align-bottom'>
          <button
                  type="button"
                  onClick={() => { router.push('/store') }}
                  className='rounded-full shadow-md shadow-orange-600 px-5 py-3.5 text-white font-inter items-center justify-center bg-primary-orange text-lg'>
                  Pide comida</button>
          </div>
          
        </div>
        {/*------------------------- */}
        <div className='sm:col-span-1 col-span-2 h-full'>
          <div className=''>
            <div className='w-full relative overflow-hidden h-full'>
              <img
                className=" asolute left-0 top-0 h-screen scale-x-150 translate-x-24"
                src="/assets/_sotck_repartidor-sacando-paquete-su-entrega.jpg"
                alt="Imagen de un walkie entregando comida"
                styles={{}}
              />
            </div>
          </div>
        </div>
        {/*----------------------------
          */}
      </section>
      <section className='w-full scroll-area flex flex-col justify-center align-middle items-center bg-slate-300 h-screen' id="restaurantes">
        <div className='bg-slate-300 w-full sm:grid sm:grid-rows-2 '>
          <div className='row-span-1 m-auto -mt-5'>
            <h1 className="text-center m-auto text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
              <span className='text-slate-600'>
                Locales participantes
              </span>
            </h1>
          </div>
          <div className='w-full grid grid-cols-2 row-span-1'>
            <div className='col-span-1 flex flex-col items-center'>
              <Image
                src="/assets/logodavilas.png"
                alt="WalkEats logo"
                width={450}
                height={450}
                className='rounded-2xl border-cyan-200' />
            </div>
            <div className='col-span-1 flex flex-col items-center pt-12'>
              <Image
                src="/assets/Tim_Hortons_Logo.png"
                alt="WalkEats logo"
                width={450}
                height={450}
                className='rounded-2xl border-cyan-200' />
            </div>
          </div>
        </div>
      </section>


      <section className='w-full scroll-area flex flex-col bg-primary-orange h-full' id="comentarios">
        <div className='grid grid-cols-2 grid-rows-2 w-full h-full '>
        <div className='flex flex-col justify-center align-middle items-center p-12 bg-white col-span-2 row-span-1 sm:row-span-2  sm:col-span-1  w-full'>
          <h1 className=" text-left text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
            <span className='bg-gradient-to-r orange-gradient bg-clip-text text-transparent'>
              Déjanos tus comentarios
            </span>
          </h1>
          <p className='mt-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita adipisci optio illum exercitationem beatae ad velit consequuntur possimus quas id repellendus pariatur facere, aspernatur, vitae ipsam? Pariatur dolore necessitatibus expedita!</p>

        </div>
          {/*------------------------- */}
          <div className='sm:col-span-1 col-span-2 flex flex-col  h-full'>
            <div className='flex flex-col w-full '>
              <HelpForm />
            </div>
          </div>
        {/*------------------------- */}
        <div className="w-full mt-auto col-span-2">
          <Footer />
        </div>
        </div>

      </section>



      {/*--------------------------- */}

      {/* <section className="home w-full flex-center flex-col">
     <h1 className="text-center mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
       WalkEats
       <br />
       <span className='bg-gradient-to-r from-yellow-300 via-primary-orange to-orange-400 bg-clip-text text-transparent'>
         A Un Paso Cerca De Ti
       </span>
     </h1>
     <br />
     <div className='bg-orange-200 w-full md:max-2xl:flex p-4 items-center'>
       <div className='sm:w-full md:max-xl:w-1/2 items-center justify-center'>
         <h1 className='text-center mt-5 text-2l p-3 w-full space-x-2'>
           <span className='bg-gradient-to-r from-orange-400 via-primary-orange to-yellow-300 bg-clip-text text-transparent text-2xl font-extrabold'>
             ¿Cuál es nuestro objetivo?
           </span>
           <br />
           <p>
             Crear una comunidad dentro de la universidad en la que se facilite el proceso de compra para los alumnos atendiendo su mayor necesidad. Se ofrecerá una plataforma en la que podrás gestionar la entrega de tus productos, además un colaborador te hará llegar tu pedido en el lugar que indiques. Ofreciendo beneficios para los estudiantes de la Universidad.
           </p>
         </h1>
         <div className='flex items-center justify-center'>
           <Image
             src="/assets/LogoNew.jpg"
             alt="WalkEats logo"
             width={250}
             height={250}
             className='sm:block hidden rounded-2xl border-cyan-200' />
         </div>
       </div>
       <div className='w-full items-center justify-center overflow-y-hidden overflow-x-hidden sm:block hidden'>
         <Comments />
       </div>
       <div className='w-full sm:max-2xl:hidden items-center justify-center overflow-x-hidden overflow-y-hidden'>
         <Commentz />
       </div>
     </div>
   </section>*/}
    </div>
  )
}

export default Home