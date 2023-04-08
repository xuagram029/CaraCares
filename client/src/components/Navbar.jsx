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
      <ul className='md:flex md:items-center   z-1  md:z-auto md:static absolute bg-white w-2/5 left-0 md:w-auto md:py-0  md:pl-0  md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 mt-[0px] pl-[0px] py-[0px] '>
        <li className='mx-4 my-6 md:my-0'>
        <Link to="/" className='text-xl p-3 uppercase rounded-[12px] bg-rose-white text-rose-600 hover:text duration-500 hover:bg-rose-600 hover:text-white hover:shadow-s'>Home </Link>
          
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <a href="#help " className='text-xl p-3 uppercase rounded-[12px] bg-rose-white text-rose-600 hover:text duration-500 hover:bg-rose-600 hover:text-white hover:shadow-s'>
          PETS
          </a>
        </li>
        <li className='mx-4 my-6 md:my-0'>
        <Link to="/contact-us" className='text-xl p-3 uppercase rounded-[12px] bg-rose-white text-rose-600 hover:text duration-500 hover:bg-rose-600 hover:text-white hover:shadow-s'>Contact Us</Link>
        
        </li>
        <li className='mx-4 my-6 md:my-0'>
        <Link to="/" className='text-xl p-3 uppercase rounded-[12px] bg-rose-white text-rose-600 hover:text duration-500 hover:bg-rose-600 hover:text-white hover:shadow-s'>Services</Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
        
        <Link to="/about" className='text-xl p-3 uppercase rounded-[12px] bg-rose-white text-rose-600 hover:text duration-500 hover:bg-rose-600 hover:text-white hover:shadow-s'>About</Link>
         
      
         
        </li>
      </ul>
      
    </nav>
       
       )
      
    
       
   

     
}

export default Navbar
