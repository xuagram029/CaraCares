import React from 'react'
import Homeimg from "../assets/images/home.png";
import Adoptedimg from "../assets/images/animal-care.png";
import Fosteredimg from "../assets/images/house.png";
import Sponsoredimg from "../assets/images/donation.png";
import { Link } from 'react-router-dom';
function HeroHome() {
  return (
    <div className='flex px-5 shadow-l bg-neutral-100 '>

      <div className="w-1/2 lg:p-20 p-5 m-auto items-center  ">
      <h1 className='lg:text-7xl text-2xl font-bold font-[Courier] '>Your new <span className="text-rose-600">friend</span> awaits you</h1>
      <p className='mt-5 lg:text-xl '>Unlock a Lifetime of Love: Choose Adoption and Bring Home Your Perfect Pet Companion Today</p>
      <div className='mt-5'>
        <Link to="/adopt-a-pet"><button className='shadow-xxl bg-rose-600 text-white text-xs p-1 lg:w-[130px] w-[100px] rounded-[12px] border-2 border-solid border-rose-600 lg:text-lg'>Adopt A Pet</button></Link>
        <Link to="/sponsor-a-pet"><button className='shadow-xxl  sm:ml-5 bg-white text-rose-600 text-xs p-1 lg:w-[130px] w-[100px] rounded-[12px] border-2 border-solid border-rose-600 lg:text-lg'>Sponsor A Pet</button></Link>
      </div>
      {/* <div className='flex mt-5 md:mt-16 shadow-s py-5'>
        <div className='w-1/3 text-center text-rose-600 font-bold'>
        <img src={Adoptedimg} className="m-auto" alt="" />
            <p className='text-lg'>85</p>
            <p>Adopted Pets</p>
           
        </div>
        
        <div className='w-1/3 text-center text-rose-600 font-bold'>
        <img src={Fosteredimg} className="m-auto" alt="" />
            <p className='text-lg'>45</p>
            <p>Fostered Pets</p>
           
        </div>
        <div className='w-1/3 text-center text-rose-600 font-bold'>
        <img src={Sponsoredimg} className="m-auto" alt="" />
            <p className='text-lg'>258</p>
            <p>Sponsored Pets</p>
           
        </div>

      </div> */}
      <div class="grid grid-cols-4 mt-10">
  <div class="relative  px-3 lg:mb-0">
    <div class="mb-2 justify-center items-center text-center">
      <span class="text-primary">
      <img src={Adoptedimg} className="m-auto" alt="" />
      </span>
    
    <h5 class="mt-2 font-bold text-xl text-rose-600">103</h5>
    <h6 class="mb-0 text-xs lg:text-lg text-rose-600">Adopted Pets</h6>
    </div>
    <div
      class="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-neutral-400 opacity-25 dark:opacity-100 lg:block"></div>
  </div>
  
  <div class="relative  px-3 lg:mb-0">
    <div class="mb-2 justify-center items-center text-center">
      <span class="text-primary">
      <img src={Fosteredimg} className="m-auto" alt="" />
      </span>
    
    <h5 class="mt-2 font-bold text-xl text-rose-600">66</h5>
    <h6 class="mb-0 text-xs lg:text-lg text-rose-600">Fostered Pets</h6>
    </div>
    <div
      class="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-neutral-400 opacity-25 dark:opacity-100 lg:block"></div>
  </div>
  <div class="relative  px-3 lg:mb-0">
    <div class="mb-2 justify-center items-center text-center">
      <span class="text-primary">
      <img src={Sponsoredimg} className="m-auto" alt="" />
      </span>
    
    <h5 class="mt-2 font-bold text-xl text-rose-600">182</h5>
    <h6 class="mb-0 text-xs lg:text-lg text-rose-600">Sponsored Pets</h6>
    </div>
   
  </div>
</div>
      </div>
      
      <div className='w-1/2 m-auto items-center' >
        <img src={Homeimg} className='m-auto md:p-10 ' alt="" />
      </div>
    </div>
  )
}

export default HeroHome