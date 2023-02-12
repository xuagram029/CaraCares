import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo-container">
            <h1>CARACARES</h1>
        </div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <a href="#help">Pets</a>
            <Link to="/">Contact Us</Link>
            <Link to="/">Services</Link>
            <Link to="/">About</Link>
        </div>
    </div>
  )
}

export default Navbar