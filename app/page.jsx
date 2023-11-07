'use client'
import '../styles/home.css'
import Image from 'next/image'
import Comments from '@components/comment/CommentBox'
import Commentz from '@components/Commentz'
import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
const Home = () => {

  return (
    <div className='scroll-container'>
      <section className='scroll-area flex flex-col mt-0'>
      <div className='w-full'>
        <Navbar />
      </div>
        <div className='grid grid-cols-2 w-full '>
          <div className='col-span-1 p-32 bg-slate-200'>
            <h1 className="text-center mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
              WalkEats
              <br />
              <span className='bg-gradient-to-r from-yellow-300 via-primary-orange to-orange-400 bg-clip-text text-transparent'>
                A Un Paso Cerca De Ti
              </span>
            </h1>
          </div>
          <div className='col-span-1 overflow-hidden w-full '>
            <Image
              src="/assets/_stock_delivery_man.jpg "
              alt="WalkEats logo"
              width={3500}
              height={3500}
              className=' LP_mainImage ' />
          </div>
          <div className='col-span-2  flex flex-col items-center justify-center'>
            <div className='grid grid-cols-2 mt-6'>
              <div className='col-span-1 flex flex-col items-center justify-center '> 
              <button
                type="button"
                onClick={() => { document.getElementById('reviews').scrollIntoView() }}
                className='rounded-full shadow-md shadow-green-600 px-5 py-3.5 text-white font-inter items-center justify-center bg-primary-green text-lg'>
                Pide comida</button>
              </div>
              <div className='col-span-1 flex flex-col items-center justify-center'> 
              <button
                type="button"
                onClick={() => { document.getElementById('walkies').scrollIntoView() }}
                className='rounded-full shadow-md shadow-green-600 px-5 py-3.5 text-white font-inter items-center justify-center bg-primary-green text-lg'>
                Conviertete en Walkie</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='grid grid-cols-2 w-full scroll-area' id="reviews">
        <div className='bg-slate-100 col-span-1 p-32'>
          <h1 className="text-center mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
            WalkEats
            <br />
            <span className='bg-gradient-to-r from-yellow-300 via-primary-orange to-orange-400 bg-clip-text text-transparent'>
              Cómo ordenar
            </span>
          </h1>
        </div>
      </section>

      <section className='grid grid-cols-2 w-full scroll-area' id="walkies">
        <div className='bg-slate-100 col-span-1 p-32'>
          <h1 className="text-center mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
            WalkEats
            <br />
            <span className='bg-gradient-to-r from-yellow-300 via-primary-orange to-orange-400 bg-clip-text text-transparent'>
              Conviertete en Walkie
            </span>
          </h1>
        </div>
      </section>

      <section className='grid grid-cols-2 w-full scroll-area' id="comentarios">
        <div className='bg-slate-100 col-span-1 p-32'>
          <h1 className="text-center mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
            WalkEats
            <br />
            <span className='bg-gradient-to-r from-yellow-300 via-primary-orange to-orange-400 bg-clip-text text-transparent'>
              Deja tus comentarios
            </span>
          </h1>
        </div>
        <div> <Footer /></div>
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