

import IconArrowShop from '../icons/IconArrowShop'

const ArticHome = ({hero}) => {
  return(
    <>
     <img src={hero.img} alt="" className='lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3 w-full h-full  col-start-1 col-end-4 row-start-1 row-end-3' />
      <article className='lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 p-8 flex-col justify-center col-start-1 col-end-4  row-start-3 row-end-4 items-start lg:px-16'>
        <h1 className='font-bold text-5xl mb-10'>
          {hero.title}
        </h1>
        <p className='text-gray-600 mb-8 '>
          {hero.description}
        </p>
        <button className='flex items-center hover:fill-gray-400 fill-black'>
          <span className='font-bold text-base uppercase tracking-[1rem] hover:text-gray-400 '>shop now</span>
          <IconArrowShop />
        </button>
      </article>
    </>
  )
 }

 export default ArticHome;