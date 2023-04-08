import React from 'react'
import Navbar from '../components/Navbar'
import HeroHome from './HeroHome'
import HelpPage from './HelpPage'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <HeroHome />
        <HelpPage/>
        <Footer/> 
    </div>
   
  )
}

export default Home