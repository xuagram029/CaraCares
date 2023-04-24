import { useState } from 'react'
import { Link } from 'react-router-dom'
import ','

function Navbar() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    
  return (
    <div className='h-24 bg-primary flex justify-between items-center border-black p-9 relative'>
        <div className="logo-container">
            <h1>CARACARES</h1>
        </div>
        <div className="ml-[10px] uppercase relative">
          {/* <Link to="/" className='ml-2 uppercase'>Home</Link>
            <a href="#help" className='ml-2 uppercase'>Pets</a>
            <Link to="/contact-us" className='ml-2 uppercase'>Contact Us</Link>
            <Link to="/" className='ml-2 uppercase'>Services</Link> */}
                <Link className='dropdown dropdown-btn ml-2 uppercase' onClick={handleClick}>About</Link>
                {open && (
                <div className='dropdown-content h-40 w-40 border border-yellow-200 flex flex-col absolute right-0 top-7 items-center'>
                    <Link to='https://react.dev/' className='dropdown-item border border-black p-3 w-40 text-center hover:bg-gray-500 hover:text-white' target='_blank'>REACT</Link>
                    <Link to='' className='dropdown-item border border-black p-3 w-40 text-center hover:bg-gray-500 hover:text-white'>SALSALLLL</Link>
                </div>
                )}
        </div>
    </div>
  )
}

export default Navbar