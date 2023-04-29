import React from 'react';
import img3 from '../assets/ui/CARA_PICTURES/dogs/dogs.jpg';

function HelpPage() {
  return (
    <div className='h-[100vh] relative flex justify-center items-center' id='help'>
      <img
        src={img3}
        alt='Helpless Dogs'
        className='bg-contain bg-no-repeat bg-center top-0 h-[100vh] w-[100vw] opacity-75 absolute z-[-1]'
      />
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='text-center break-normal'>
          <p className='text-4xl font-semibold text-primary mb-5'>Help Care for The Animals</p>
          <p className='text-primary leading-7'>
            There are countless ways you can help us in our quest for paws. <br /> You can make a donation (however big
            or small), join our <br /> fundraiser events, or volunteer your time and home as a foster parent.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row justify-center gap-[15px] mt-5'>
          <button className='px-5 sm:px-10 py-2 bg-primary mb-3 sm:mb-0 sm:mr-3'>Donate</button>
          <button className='px-5 sm:px-10 py-2 bg-primary mb-3 sm:mb-0 sm:mr-3'>Sponsor</button>
          <button className='px-5 sm:px-10 py-2 bg-primary'>Foster</button>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;