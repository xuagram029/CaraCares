import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='bg-slate-400 m-10 px-3 max-h-fit relative'>
        <div className=''>
            <p className='font-bold  text-center p-10 text-4xl sm:text-4xl md:text-5xl'>We would love to hear from you.</p>
            <p className='font-bold text-center my-5 text-2xl sm:text-2xl md:text-3xl'>Drop us a line or send us an email.</p>
            <div>
                <p className='text-center max-w-[50%] m-auto'>We welcome correspondence from fellow animal lovers and animal welfare supporters. We value your comments and suggestions. We will endeavor to answer all your inquiries within 2-3 working days.</p>
            </div>

            <div className='flex flex-col items-center mt-7'>
                <p className='text-center max-w-[50%] m-auto mt-4'>Got questions?</p>
                <Link className='text-center max-w-[50%] m-auto '>Check out our FAQs first.</Link>
            </div>


            <div className='bg-slate-800 p-4 flex flex-col sm:flex-col md:flex-row lg:flex-row mt-10 md:space-x-5 justify-around align-baseline space-y-5'>
                <div className=' bg-slate-200 mx-3 max-w-md p-2 justify-items-center sm:mx-auto md:mx-0'>
                    <p className='font-bold text-2xl text-center my-5'>Please Contact the Appropriate Department</p>
                    <ul className='text-center'>
                        <li className='underline
                        '>CARA Volunteer Registration – admin@caraphil.org</li>
                        <li className='underline
                        '>Interviews, Events / Media – events@caraphil.org</li>
                        <li className='underline
                        '>Donations – donate@caraphil.org</li>
                        <li className='underline
                        '>LPB Site Visits – volunteeratlpb@gmail.com</li>
                        <li className='underline
                        '>LPB Adoptions – adopt.a.lpb@gmail.com,</li>
                    </ul>
                </div>

                <div>
                    <div className=' bg-slate-200 mx-3 max-w-md p-2 sm:mx-auto md:mx-0'>
                        <p className='font-bold text-2xl text-center my-5'>Adoptions</p>
                        <p className='text-center'>Please note that we do not have a shelter, so we cannot take animals in. The animals we have up for adoption were all rescued by our members years ago.</p>
                    </div>
                </div>
                
            </div>

                <div className='p-5 bg-slate-300 text-center'>
                    <p>For TNVR concerns, Pet Boarding/Grooming Reservation, Clinic Adoptions: Kindly send an email to <b>admin@caraphil.org</b> and <b>clinic@caraphil.org.</b></p>
                </div>

                <div className='p-10 bg-red-200'>
                    <p className='font-semibold text-2xl text-center'>Where to Report Cruelty Cases</p>
                    <p className='text-center'>There is an Animal Welfare Act of 1998 in the Philippines that protects animals from cruelty and abuse. If you witness any cases, immediately proceed to the nearest police precinct to report the incident and bring a policeman with you to the scene – they have to help you by law! Don’t forget to take photographic evidence.</p>
                </div>
            
        </div>
    </div>
  )
}

export default Contact