import ImgAbout1 from '../../assets/images/image-about-dark.jpg'
import ImgAbout2 from '../../assets/images/image-about-light.jpg'

const MainHome = () => {
  return (
    <main className='grid grid-cols-1 lg:grid-cols-7'>
      <img src={ImgAbout1} alt="" className='lg:col-span-2 w-full h-full' />
      <section className='p-8 lg:col-span-3 lg:px-16 flex flex-col justify-center'>
        <h2 className=' mb-6 px-8 font-bold
        text-lg uppercase tracking-[0.5rem]  '>
          About our furniture
        </h2>
        <p className='text-gray-600 p-8'>Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.</p>

      </section>

      <img src={ImgAbout2} alt="" className='lg:col-span-2 w-full h-full' />
    </main>
  )
}
export default MainHome;