import React from 'react'
import Nav3 from '../pages/Nav3';
import HeroHome from './HeroHome'
import HelpPage from './HelpPage'
import Whyadopt from './whyadopt'
function Home() {
  return (
    <div className='home'>
        <Nav3/>
        <HeroHome/>
        <HelpPage/>
        <Whyadopt/>
    </div>
  )
}

export default Home