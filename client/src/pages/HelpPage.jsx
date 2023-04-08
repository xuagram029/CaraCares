import React from 'react'
import img3 from '../assets/ui/CARA_PICTURES/dogs/dogs.jpg'
import donateimg from '../assets/ui/CARA_PICTURES/donationdog.png'
import sponsorimg from '../assets/ui/CARA_PICTURES/sponsordog.png'
import fosterimg from '../assets/ui/CARA_PICTURES/png-clipart-the-waving-cat-cats-paw-cat-removebg-preview.png'
function HelpPage() {
  return (
    <div className='grid grid-cols-1 z-2  md:grid-cols-3  gap-2 md:gap-4 xl:gap-[0px] px-6  m-auto md:top-[670px] xl:top-[850px] w-full text-center'>

      <div className='bg-white md:shadow-m rounded-full m-auto p-5  shadow-m mt-2 md:mt-5'>

        <div>
        <img src={donateimg} alt="" className='w-[200px] md:w-[300px]  xl:w-[400px]'/>
        </div>

        <div className='mt-3 text-center'>
        <button className='bg-rose-600 text-white md:p-5 p-3 mx-auto'>DONATE</button>
        </div>

      </div>
      <div className='bg-white md:shadow-m rounded-full m-auto p-5 shadow-m mt-5'>

        <div>
        <img src={sponsorimg} alt="" className='w-[200px] md:w-[300px] xl:w-[400px]'/>
        </div>

        <div className='mt-3 text-center'>
        <button className='bg-rose-600 text-white md:p-5 p-3 mx-auto'>DONATE</button>
        </div>

      </div>
      <div className='bg-white md:shadow-m rounded-full m-auto p-5 shadow-m mt-5'>

        <div>
        <img src={fosterimg} alt="" className='w-[200px] md:w-[300px]  xl:w-[400px]'/>
        </div>

        <div className='mt-3 text-center'>
        <button className='bg-rose-600 text-white md:p-5 p-3 mx-auto'>DONATE</button>
        </div>

      </div>
      
     

    </div>
  )
}

export default HelpPage