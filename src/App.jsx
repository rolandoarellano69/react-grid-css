import ImgHero1 from './assets/images/desktop-image-hero-1.jpg'

import IconArrowShop from './components/icons/IconArrowShop'
import IconPrev from './components/icons/IconPrev'
import IconNext from './components/icons/IconNext'
import NavBar from './components/nav/NavBar'
import MainHome from './components/Home/MainHome'
const App = () => {
  return <div>
    <NavBar />
    <header className='grid grid-cols-3 grid-rows-[10fr_1.5fr_10fr]  lg:grid-cols-7 lg:grid-rows-[10fr_1.5fr]'>
      <img src={ImgHero1} alt="" className='lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3 w-full h-full  col-start-1 col-end-4 row-start-1 row-end-3' />
      <article className='lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 p-8 flex-col justify-center col-start-1 col-end-4  row-start-3 row-end-4 items-start lg:px-16'>
        <h1 className='font-bold text-5xl mb-10'>
          Discover innovative ways to decorate</h1>
        <p className='text-gray-600 mb-8 '> We provide unmatched quality, comfort, and style for property owners across the country.
          Our experts combine form and function in bringing your vision to life. Create a room in your
          own style with our collection and make your property a reflection of you and what you love.</p>
        <button className='flex items-center hover:fill-gray-400 fill-black'>
          <span className='font-bold text-base uppercase tracking-[1rem] hover:text-gray-400 '>shop now</span>
          <IconArrowShop />
        </button>
      </article>
      <div className='bg-black text-teal-50 flex lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3 col-start-3 col-end-4 row-start-2 row-end-3'>
        <button className='mx-auto'>
          <IconPrev />
        </button>
        <button className='mx-auto'>
          <IconNext />
        </button>
      </div>
    </header>
    <MainHome />
  </div>


}
export default App;