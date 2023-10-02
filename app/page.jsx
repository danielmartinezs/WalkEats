import Comments from '@components/Comments'
const Home = () => {
  return (
    <section className="home w-full flex-center flex-col">
        <h1 className="head_text text-center">
          WalkEats
          <br className="max-md:hidden"/>
          <span className='orange_gradient'>
              Walk and Eat
          </span>
        </h1>
        <div className='w-full'>
          <Comments></Comments>
        </div>
    </section>
  )
}

export default Home