import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }

    const [openServices, setServices] = useState(false)
    const handleClickServices = () => {
        setServices(!openServices)
    }

    const [openContact, setContact] = useState(false)
    const handleClickContact = () => {
        setContact(!openContact)
    }

    const [openPet, setPet] = useState(false)
    const handleClickPet = () => {
        setPet(!openPet)
    }

  return (
    <div className='h-24 bg-primary flex justify-between items-center border-black p-9 relative'>
        <div className="logo-container">
            <h1>CARACARES</h1>
        </div>
        <div className="ml-[10px] uppercase relative">
          <Link to="/" className='ml-2 uppercase'>Home</Link>


            <Link className='ml-2 uppercase' onClick={handleClickPet}>Pets</Link>
            {openPet && (
                <div className='dropdown-content h-40 w-40 flex flex-col absolute right-42 top-7 items-center transition-opacity'>
                    <Link to='/adopt-a-pet' className='dropdown-item border border-black p-3 w-40 text-center hover:bg-gray-500 hover:text-white'>Adopt a Pet</Link>
                    <Link to='/sponsor-a-pet' className='dropdown-item border border-black p-3 w-40 text-center hover:bg-gray-500 hover:text-white'>Sponsor a Pet</Link>
                    <Link to='/foster-a-pet' className='dropdown-item border border-black p-3 w-40 text-center hover:bg-gray-500 hover:text-white'>Foster a Pet</Link>
                </div>
                )}

            <Link className='ml-2 uppercase ' onClick={handleClickContact}>Contact</Link>
            {openContact && (
                <div className='dropdown-content h-40 w-40 flex flex-col absolute right-24 top-7 items-center'>
                    <Link to='/contact-us' className='dropdown-item border border-black p-3 w-40 text-center hover:bg-gray-500 hover:text-white' >Contact Us</Link>
                    <Link to='/join-team' className='dropdown-item border border-black p-3 w-40 text-center hover:bg-gray-500 hover:text-white' >Join Our Team</Link>
                </div>
                )}


            <Link className='ml-2 uppercase' onClick={handleClickServices}>Services</Link>
            {openServices && (
                <div className='dropdown-content h-40 w-40 flex flex-col absolute right-4 top-7 items-center'>
                    <Link to='/donate' className='dropdown-item border border-black p-3 w-40 text-center hover:bg-gray-500 hover:text-white' >Donate</Link>
                    <Link to='' className='dropdown-item border border-black p-3 w-40 text-center hover:bg-gray-500 hover:text-white' >zxczxc</Link>
                </div>
                )}


                <Link className='dropdown-btn ml-2 uppercase' onClick={handleClick}>About</Link>
                {open && (
                <div className='dropdown-content h-40 w-40 flex flex-col absolute right-0 top-7 items-center'>
                    <Link to='/about' className='dropdown-item border border-black p-3 w-40 text-center hover:bg-gray-500 hover:text-white' >About CARA</Link>
                    <Link to='/humane-education' className='dropdown-item border border-black p-3 w-40 text-center hover:bg-gray-500 hover:text-white'>Humane Education</Link>
                    <Link to='/laguna-pitbulls' className='dropdown-item border border-black p-3 w-40 text-center hover:bg-gray-500 hover:text-white' >Laguna Pitbulls</Link>
                    <Link to='/tnvr' className='dropdown-item border border-black p-3 w-40 text-center hover:bg-gray-500 hover:text-white' >TNVR</Link>
                </div>
                )}
        </div>
    </div>
  )
}

export default Navbar