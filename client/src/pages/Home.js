import React from 'react'
import Navbar from './Navbar'
import HeroHome from './HeroHome'
import HelpPage from './HelpPage'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <HeroHome/>
        <HelpPage/>
    </div>
  )
}

export default Home