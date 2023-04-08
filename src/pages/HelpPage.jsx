import React from 'react'
import img3 from '../assets/ui/CARA_PICTURES/dogs/dogs.jpg'

function HelpPage() {
  return (
    <div className='h-[100vh]' id='help'>
         <img src={img3} alt="Helpless Dogs" className='bg-contain bg-no-repeat bg-center top-0 h-max opacity-75'/>
        <div className=" flex flex-col justify-center items-center m-auto w-[60%]">
            <div className="text-center break-normal">
                <h1>Help Care for The Animals</h1>
                <p>There are countless ways you can help us in our quest for paws. <br/> You can make a donation (however big or small), join our <br/> fundraiser events, or volunteer your time and home as a foster parent.</p>
            </div>
            <div className="flex border items-center border-black max-w-[70%] gap-[15px]">
                <button>Donate</button>
                <button>Sponsor</button>
                <button>Foster</button>
            </div>
        </div>
    </div>
  )
}

export default HelpPage