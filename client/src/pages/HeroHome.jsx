import React from 'react'
import img7 from '../assets/ui/CARA_PICTURES/homepageimage.png'
function HeroHome() {
  return (
    <div className='grid grid-cols-1 md:p-10 shadow-xl md:grid-cols-2 mt-[22px] sm-max-w-xl  md:pb-[60px]'>
      
      <div className='bg-white p-7 m-auto text-center md:text-left'>
        <h1 className='sm:text-3xl md:text-4xl text-2xl font-bold xl:text-6xl '> <span className='text-rose-600'>Adopt</span> Your New Best Friend.</h1>
        <br /><p className='sm:text-2xl md:text-3xl text-xl pb-[15px]'>Find your new bestfriend and give them a forever home</p>
        <p className=' sm:text-l md:text-xl text-md'>Quest for Animal Rescue and Sanctuary</p>
        <button className='bg-rose-600 p-3 sm:text-xl md:text-2xl text-white text-md mt-[20px] hover:shadow-s'>Sponsor a rescue today</button>
      </div>

      <div className='bg-white  p-7  md:shadow-none '>
      <img className='object-cover w-[290px] sm:w-[400px] m-auto xl:w-[550px]'  src={img7} alt="" />
      </div>
    </div>
  )
}

export default HeroHome