import React from 'react'
import img3 from '../assets/ui/CARA_PICTURES/dogs/dogs.jpg'
import donateimg from '../assets/ui/CARA_PICTURES/donateimg.png'
import sponsorimg from '../assets/ui/CARA_PICTURES/sponsorimg.png'
import fosterimg from '../assets/ui/CARA_PICTURES/fosterimg.png'



function HelpPage() {
  return (
    <div className='text-center '>
 
          {/* <h1 className='text-xl md:text-3xl mt-[30px] font-bold xl:text-6xl '>
               Help A Pet
          </h1> */}
       



    
    <div className='grid grid-cols-1  md:grid-cols-3 z-2 s gap-2 md:gap-4 px-8  xl:px-[200px] 2xl:px-[300px] m-auto  w-full text-center mb-[10px] '>
      
      <div className='flex bg-donatecover5 m-auto p-5   mt-2 md:mt-5  w-full rounded-[13px] shadow-m'>
       
      <div  className='w-full text-center'>
        <h1 className='text-white text-2xl  font-bold xl:text-2xl '>
            Donate     
        </h1>
        <p className='text-lg font-bold text-left text-white mt-2 md:mt-2 2xl:mt-6'>
         
        Open your heart and give life and love to pets that needs you
        </p>

        <button className='bg-white 2xl:text-2xl xl:text-lg py-2 px-4 text-blue-900 font-bold lg:mt-2 xl:mt-4 2xl:mt-12 xl:px-8 mt-6'>Donate</button>
      </div>

      </div>
      


    
      <div className='flex bg-donatecover6 m-auto p-5   mt-2 md:mt-5  w-full rounded-[13px] shadow-m'>
       
       <div  className='w-full text-center'>
         <h1 className='text-white text-2xl  font-bold xl:text-2xl '>
         Sponsor     
         </h1>
         <p className='text-lg font-bold text-left text-white mt-2 md:mt-2 2xl:mt-6'>
          
         Open your heart and give life and love to pets that needs you
         </p>
 
         <button className='bg-white 2xl:text-2xl xl:text-lg py-2 px-4 text-blue-900 font-bold lg:mt-2 xl:mt-4 2xl:mt-12 xl:px-8 mt-6'>Sponsor</button>
       </div>
 
       </div>





       <div className='flex bg-donatecover7 m-auto p-5   mt-2 md:mt-5  w-full rounded-[13px] shadow-m'>
       
       <div  className='w-full text-center'>
         <h1 className='text-white text-2xl  font-bold xl:text-2xl '>
         Foster     
         </h1>
         <p className='text-lg font-bold text-left text-white mt-2 md:mt-2 2xl:mt-6'>
          
         Open your heart and give life and love to pets that needs you
         </p>
 
         <button className='bg-white 2xl:text-2xl xl:text-lg py-2 px-4 text-blue-900 font-bold lg:mt-2 xl:mt-4 2xl:mt-12 xl:px-8 mt-6'>Foster</button>
       </div>
 
       </div>






    </div>

   

  </div>
  
  )
}

export default HelpPage