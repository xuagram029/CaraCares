import React from 'react'
import Navbar from '../components/Navbar'
import HeroHome from './HeroHome'
import HelpPage from './HelpPage'

import Footer from '../components/Footer'
import Bloghome3 from './bloghome3'


function Home() {
  return (
    <div className='home'>
        <Navbar />
        <HeroHome />
        <Bloghome3/>
        <HelpPage/>
        
        <Footer/> 
    </div>
   
  )
}

export default Home