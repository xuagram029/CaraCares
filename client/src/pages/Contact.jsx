import { Link } from 'react-router-dom'
import { useState } from 'react';
const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    return (
        <div className='bg-slate-400 m-10 px-3 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto'>
            <p className='font-bold text-5xl text-center'>We would love to hear from you.</p>
            <p className='font-bold text-center my-5'>Drop us a line or send us an email.</p>
            <div>
                <p className='text-center max-w-[50%] m-auto'>We welcome correspondence from fellow animal lovers and animal welfare supporters. We value your comments and suggestions. We will endeavor to answer all your inquiries within 2-3 working days.</p>
            </div>

            <div className='flex flex-col items-center mt-7'>
                <p className='text-center max-w-[50%] m-auto mt-4'>Got questions?</p>
                <Link className='text-center max-w-[50%] m-auto '>Check out our FAQs first.</Link>
            </div>

            <div className='bg-slate-800 p-4 flex mt-10 flex-col sm:flex-row justify-around items-baseline'>
                <div className='bg-slate-200 my-4 mx-auto sm:mx-3 max-w-md p-2'>
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
                    <div className='bg-slate-200 my-4 mx-auto sm:mx-3 max-w-md p-2'>
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

            <div className='bg-slate-800 h-[100vh] w-[100] flex justify-center items-center gap-10'>
                <div className='bg-slate-100 h-[80%] w-[40%] p-5'>
                    <p className='text-3xl font-normal mb-2'>CARA Clinic</p>
                    <p className=''>175 Lopez Rizal St. cor. Samat St., Mandaluyong City</p>
                    <p className='text-2xl font-normal my-3'>8532.3340 | 8395.2170</p>
                    <p className='text-2xl font-normal my-3'>0919.579.0047 | 0905.253.0129</p>
                    <p className='text-2xl font-normal my-3'>clinic@caraphil.org</p>
                    <p className=''>CARA Clinic hours are from 8:00 AM to 5:00 PM (with reception cut-off at 4:30 PM), Mondays to Fridays. 8:00 AM to 12PM on Saturdays.</p>
                    <p className=''>Please call our hotline at 8532.3340 for inquiries or to set an appointment.</p>
                </div>

            <div className='bg-slate-100 h-[80%] w-[50%] p-5 flex justify-center items-center relative'>
                <form className="bg-white shadow-md rounded-lg p-8 h-[95%] w-[95%] absolute">
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block mb-1 font-medium"> First Name </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full px-3 py-2 border-gray-300 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block mb-1 font-medium">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full px-3 py-2 border-gray-300 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border-gray-300 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-1 font-medium">
                            Message or Comment
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-3 py-2 border-gray-300 border rounded-md focus:outline-none focus:border-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Contact