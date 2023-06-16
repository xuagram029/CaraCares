import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Adopter from "../assets/images/adopter.jpg"
import Admin from "../assets/images/admin.jpg"
import Logo from "../assets/images/image4.png"

const SwitchLogin = () => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate("/")
  }

  return (
    <div className='bg-black h-screen w-full'>
      <div className='absolute flex items-center'>
        <img src={Logo} alt="MC Logo" className='lg:w-18 sm:w-16 rounded-full p-2 m-3' style={{filter: "invert(1)"}}/>
        <p className='text-white text-xl'>CaraCares</p>
      </div>
      <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='text-3xl text-white font-medium font-Nunito'>Who is Logging In?</h1>
        <div className='flex items-center lg:gap-x-24 sm:gap-x-8 justify-center pt-24 w-full font-Nunito'>
            <Link to="/user-login" className='relative group transition duration-300'>
              <img src={Adopter} alt="patient" className='rounded-[50px] group-hover:blur w-[205px] h-[195px]' />
              <span className='absolute scale-0 inset-10 ml-2 font-pop text-xl font-bold text-black  group-hover:scale-100 transition-all duration-300'>Pet Adopter</span>
              <p className='text-center font-pop text-white pt-4 font-semibold group-hover:scale-0 transition-all duration-300'>Pet Adopter</p>
            </Link>
            <Link to="/admin-login" className='relative group transition duration-300'>
              <img src={Admin} alt="dentist" className='rounded-[50px] group-hover:blur w-[205px] h-[195px]' />
              <span className='absolute scale-0 inset-10 ml-6 font-pop text-2xl font-bold text-black  group-hover:scale-100 transition-all duration-300'>Admin</span>
              <p className='text-center font-pop text-white pt-4 font-semibold group-hover:scale-0 transition-all duration-300'>Admin</p>
            </Link>
        </div>
        <button onClick={handleBack} className='border-2 border-white text-white font-pop text-lg font-medium px-8 py-2 mt-8 rounded-3xl uppercase hover:bg-white hover:text-black' >Go Back</button>
      </div>
    </div>
  )
}

export default SwitchLogin