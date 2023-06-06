import React from 'react'
import Nav3 from '../pages/Nav3';
import HeroHome from './HeroHome'
import HelpPage from './HelpPage'
import Whyadopt from './whyadopt'
import Bloghome3 from './bloghome3'
import ActDate from './ActivitiesDate'
import Footer from '../components/Footer'
function Home() {
  return (
    <div className='home'>
        <Nav3/>
        <HeroHome/>
        <HelpPage/>
        <Whyadopt/>
        <Bloghome3/>
        <Footer/>
        {/* <ActDate/> */}
    </div>
  )
}

export default Home