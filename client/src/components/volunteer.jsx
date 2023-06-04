import React from 'react'
import volunteericon from "../assets/images/volunteer.png";
import fosterparenticon from "../assets/images/pet-house.png";
const volunteer = () => {
  return (
    <div className='bg-rose-600 flex'>
        <div className='w-1/2 p-10 text-center text-lg font-bold text-white m-auto'>Making the World a Better Place, One Pawprint at a Time: Pet Volunteers in Action</div>
        <div className='w-1/2 flex gap-2 p-10 text-center text-lg font-bold text-white m-auto '>
          <div className='w-1/2 h-full flex items-center justify-center gap-2 '>
            <img className="w-[45px] " src={volunteericon} alt="" />
           <h1 className='cursor-pointer'>Be a Volunteer</h1>
       
          </div>
          <div
             class="inline-block  w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
         <div className='w-1/2 h-full flex items-center justify-center gap-2 '>
            <img className="w-[45px] " src={fosterparenticon} alt="" />
           <h1 className='cursor-pointer'>Become a Foster Parent</h1>
       
          </div>
        </div>
    </div>
  )
}

export default volunteer