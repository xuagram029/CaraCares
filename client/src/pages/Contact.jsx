import React from 'react'
import { Link } from 'react-router-dom'
import caralocphoto from '../assets/ui/CARA_PICTURES/caraloc.png'
import emailicon from '../assets/ui/CARA_PICTURES/email.png'
import phoneincon from '../assets/ui/CARA_PICTURES/phone-call.png'
import fbicon from '../assets/ui/CARA_PICTURES/facebook-app-symbol.png'
import twittericon from '../assets/ui/CARA_PICTURES/twitter.png'
import instagramicon from '../assets/ui/CARA_PICTURES/instagram.png'
const Contact = () => {
  return (
    <div className=' max-h-fit  '>
        
        <div className="border-2 border-solid bg-heropattern grid grid-cols-1 py-[100px] md:py-[170px] gap-3 p-3 bg-cover bg-center md:mb-[440px] lg:mb-[420px] xl:mb-[300px]" >
               <h1 className='text-center text-white text-3xl md:text-6xl font-bold '>Get in touch</h1>
               <p className='text-center text-white  md:text-xl py-5'>We would love to hear from you. Heres how you can reach us</p>
               
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 md:absolute top-[425px]  gap-2  content-center px-[20%] border-3 border-solid border-black '>

            <div className='bg-white shadow-s border-3 border-solid border-black p-5'>
            <img className='w-[30px] md:w-[50px]  m-auto' src={emailicon} alt="" />
            <h1 className='text-center font-bold text-sm md:text-xl'>Send us an email</h1>
            <br />
            <p className='text-center  text-sm md:text-md font-bold text-gray-600'>Please contact the appropriate department</p>
            <p className='text-center  text-sm md:text-lg font-bold text-blue-900 mt-2'>CARA Volunteer Registration – admin@caraphil.org</p>
            <p className='text-center  text-sm md:text-lg font-bold text-blue-900 mt-2'>Interviews, Events / Media – events@caraphil.org</p>
            <p className='text-center  text-sm md:text-lg font-bold text-blue-900 mt-2'>LPB Site Visits – volunteeratlpb@gmail.com</p>
            <p className='text-center  text-sm md:text-lg font-bold text-blue-900 mt-2'>LPB Adoptions – adopt.a.lpb@gmail.com</p>
            <p className='text-center  text-sm md:text-lg font-bold text-blue-900 mt-2'>Donations – donate@caraphil.org</p>
            </div>
            <div className='bg-white shadow-s  border-3 border-solid border-black p-5'>
                <img className='w-[30px] md:w-[50px]  m-auto' src={phoneincon} alt="" />
                <br />
                <h1 className='text-center font-bold text-sm md:text-xl'>Talk to CARA</h1>
                <br />
                <p className='text-center text-sm md:text-md font-bold text-gray-600'>Get in touch with us today! Dial our number and connect with our team</p>
                <p className='text-center text-sm md:text-lg font-bold text-blue-900 mt-5'>8532.3340 | 8395.2170</p>
                <p className='text-center text-sm md:text-lg font-bold text-blue-900 mt-5'>+63 919.579.0047 | +63 905.253.0129</p>
                

            </div>
        </div>



        <div className=' grid grid-cols-1 md:grid-cols-2 md:mx-[200px]  bg-blue-900 mb-[50px] p-5 '>

        <div className='text-center md:text-left p-[10px] md:p-[20px] xl:p-[90px]'>
          <h1 className='text-white text-l md:text-xl xl:text-4xl font-bold'>CARA PHILIPPINES CLINIC</h1>
            <br />
            <p className='text-white text-sm font-bold'>Our mailing address is:</p>
            <p className='text-white text-sm font-bold'>75 Lopez Rizal St. cor. Samat St,<br/>Mandaluyong City</p>
            <p className='text-white text-sm font-bold mt-3'>Weekdays 8:00 AM to 5:00 PM  </p>
            <p className='text-white text-sm font-bold '>Weekends 8:00 AM to 12:00PM  </p>
            <br />

            <img className='min-w-[26px] inline' src={fbicon} alt="" />
            <img className='mind-w-[26px] inline ml-2 md:ml-5' src={twittericon} alt="" />
            <img className='mind-w-[26px] inline ml-2 md:ml-5' src={instagramicon} alt="" />
            <img className="mt-10 w-full" src={caralocphoto} alt="" />
        </div>

        <div  className='bg-white shadow-m  p-5'>
          <div className='grid grid-cols-2 gap-3 md:mt-10 '>
                <div>
                    <label > First Name </label>
                    <input placeholder="First Name" className="w-full p-2 py-2 border-gray-300 border rounded-md focus:outline-none focus:border-blue-500"/>
                </div>

                 <div>
                    <label > Last Name </label>
                  <input placeholder="Last Name" className="p-2 w-full py-2 border-gray-300 border rounded-md focus:outline-none focus:border-blue-500"/>
                </div>
         </div>
            <div className='mt-3 '>
            <label > Email </label>
            <input className=" w-full p-2 border-gray-300 border rounded-md focus:outline-none focus:border-blue-500  py-2" type="email" placeholder='Email Address' w-full />
            </div>
            <div className='mt-3 '>
            <label > Comment or Message</label>
            <textarea cols="20" rows="10" type='textarea' className='w-full  border-gray-300 border rounded-md focus:outline-none focus:border-blue-500  py-2'> </textarea>
            </div>
            
            <div className='text-center mt-3 md:mt-20'>
            <button className=' bg-blue-900 md:w-full text-white text-md md:-text-xl p-4 mb-0'>Send Message</button>
            </div>  
        </div>
            
        

       
      </div>


    </div>
  )
}

export default Contact