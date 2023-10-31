import '../styles/home.css'
import Image from 'next/image'
import Comments from '@components/Comments'
import Commentz from '@components/Commentz'

const Home = () => {
  return (
    <section className="home w-full flex-center flex-col">
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
    </section>
  )
}

export default Home