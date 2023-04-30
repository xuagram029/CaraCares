import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-24 bg-primary flex justify-between items-center border-black p-9'>
        <div className="logo-container">
            <h1>CARACARES</h1>
        </div>
        <div className="ml-[10px] uppercase">
          <Link to="/" className='ml-2 uppercase'>Home</Link>
            <a href="#help" className='ml-2 uppercase'>Pets</a>
            <Link to="/contact-us" className='ml-2 uppercase'>Contact Us</Link>
            <Link to="/" className='ml-2 uppercase'>Services</Link>
            <Link to="/about" className='ml-2 uppercase'>About</Link>
        </div>
    </div>
  )
}

export default Navbar