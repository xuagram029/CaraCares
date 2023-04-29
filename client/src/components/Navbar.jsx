import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img4 from '../assets/images/image4.png'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


function Navbar() {
  // flag if true or false
  const [menuOpen, setMenuOpen] = useState(false); 
// taga set ng boolean to true or false depende sa value
  function toggleMenu() {
    setMenuOpen(!menuOpen);
    let list = document.querySelector('ul')
    if(!menuOpen){
      list.classList.add('opacity-100'),
      list.classList.add('top-[98px]'),
      list.classList.add('shadow-l')
    }else{
      list.classList.remove('opacity-100'),
      list.classList.remove('top-[98px]'),
      list.classList.remove('shadow-l')
    }
  }

  const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
  return (
    <nav className='px-5 bg-white shadow-xl md:flex md:items-center md:justify-between'>
      <div className='flex justify-between items-center'>
        <span className='pl-[10px] text-2xl font-[Lato] cursor-pointer w-16'>
          <img src={img4} alt='' />
          CARA
        </span>

        <span
          className='text-3xl cursor-pointer md:hidden block'
          onClick={toggleMenu}
        >
          {/* lalabas yung icon depende sa condition */}
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </span>
      

      </div>
    
      <ul className='md:flex md:items-center r  z-1  md:z-auto md:static absolute bg-white w-2/5 left-0 md:w-auto md:py-0  md:pl-0  md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 mt-[0px] pl-[0px] py-[0px] '>
       <div className='mx-4 hover:md:mx-4 hover:md:pl-3 hover:mx-0 hover:pl-7 my-4 md:my-0  hover:shadow-s duration-500  hover:bg-blue-900 text-xl p-3 uppercase bg-rose-white text-blue-900 hover:text-white hover:border-blue-900'>
        <li>
        <Link to="/" className=''>Home </Link>
        </li>
      </div>

      <div className='mx-4 hover:md:mx-4 hover:md:pl-3 hover:mx-0 hover:pl-7 my-4 md:my-0  hover:shadow-s duration-500  hover:bg-blue-900 text-xl p-3 uppercase bg-rose-white text-blue-900 hover:text-white hover:border-blue-900'>
        <li className=''>
          <a href="#help " className=''>
          PETS
          </a>
        </li>
      </div>

      <div className='mx-4 hover:md:mx-4 hover:md:pl-3 hover:mx-0 hover:pl-7 my-4 md:my-0  hover:shadow-s duration-500  hover:bg-blue-900 text-xl p-3 uppercase bg-rose-white text-blue-900 hover:text-white hover:border-blue-900'>
        <li className=''>
        <Link to="/contact-us">Contact Us</Link>
        </li>
      </div>
      
      <div className='mx-4 hover:md:mx-4 hover:md:pl-3 hover:mx-0 hover:pl-7 my-4 md:my-0  hover:shadow-s duration-500  hover:bg-blue-900 text-xl p-3 uppercase bg-rose-white text-blue-900 hover:text-white hover:border-blue-900'>
        <li className=''>
          <Link to="/">Services</Link>
        </li>
       
     </div>
       
        
    <div className='mx-4 hover:md:mx-4 hover:md:pl-3 hover:mx-0 hover:pl-7 my-4 md:my-0  hover:shadow-s duration-500  hover:bg-blue-900 text-xl p-3 uppercase bg-rose-white text-blue-900 hover:text-white hover:border-blue-900'>
         <li className=''>
         
               <Link onClick={handleClick} >About</Link>
                {open && (
                <div className='z-5 dropdown-content h-40 w-40 border border-white bg-white text-blue-900 flex flex-col absolute right-0 top-[287px] left-[272px] md:left-[1022px] md:top-[92px] items-center'>
                    <Link to='https://react.dev/' className='dropdown-item border border-neutral-300 p-3 w-40 text-center hover:bg-blue-900 hover:text-white' target='_blank'>REACT</Link>
                    <Link to='' className='dropdown-item border border-neutral-300 p-3 w-40 text-center hover:bg-blue-900 hover:text-white'>SALSALLLL</Link>
                </div>
                )}  


         </li>
    </div>
        
       
      </ul>
      
    </nav>
       
       )
      
    
       
   

     
}

export default Navbar
