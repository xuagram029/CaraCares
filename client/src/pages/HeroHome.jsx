function HeroHome() {
  return (
    <div className='border-black flex flex-col justify-center items-center h-[530px] sm:h-[630px] md:h-[730px]'>
        <div className="text-center w-full max-w-md">
            <h1 className='mb-14 text-4xl sm:text-5xl md:text-6xl'>Our four-legged friends need your help.</h1>
            <p className='mb-14'>Quest for Paws Animal Rescue and Sanctuary</p>
            <button className='bg-button text-primary p-3 rounded-md hover:opacity-75 focus:opacity-75'>Sponsor a rescue today</button>
        </div>
    </div>
  )
}

export default HeroHome
