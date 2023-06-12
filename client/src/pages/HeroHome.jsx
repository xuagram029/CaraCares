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
      <div class="grid grid-cols-4 mt-10">
</div>
      </div>
      
      <div className='w-1/2 m-auto items-center' >
        <img src={Homeimg} className='m-auto md:p-10 ' alt="" />
      </div>
    </div>
  )
}

export default HeroHome