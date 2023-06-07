import React from 'react'
import Nav3 from '../pages/Nav3';
import HeroHome from './HeroHome'
import HelpPage from './HelpPage'
import Whyadopt from './whyadopt'
import Bloghome3 from './bloghome3'
import { AuthContext } from "../context/AuthContext"
import { useContext } from 'react'
import Footer from '../components/Footer';
// import ActDate from './ActivitiesDate'

function Home() {


  const { user } = useContext(AuthContext);
  console.log(user?.resp[0]?.role);

  return (
    <div className='home'>

        <Nav3/>
        <HeroHome/>
        <HelpPage/>
        <Whyadopt/>
        {/* <Bloghome3/> */}
        <Footer/>
        {/* <ActDate/> */}
    </div>
  )
}

export default Home