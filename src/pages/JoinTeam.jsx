import {useState} from 'react'

const JoinTeam = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");
  return (
    <div className='bg-slate-400 m-10 p-5 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto'>
        <div className='flex flex-col items-center sm:flex-col sm:items-center lg:flex-row lg:justify-evenly h-fit bg-slate-600'>
            <div className='bg-slate-200 h-fit w-[75%] sm:w-[75%] md:w-[80%] lg:w-[45%] p-5 my-10 '>
                <div className='bg-slate-400 px-14 pt-5 text-center'>
                    <p className='indent-10 text-justify'>“Never doubt that a small, group of thoughtful, committed citizens can change the world. Indeed, it is the only thing that ever has.”</p>
                    <br />
                    <p>— Margaret Mead</p>
                </div>

                <div className='bg-slate-300  px-8 pt-5 my-10'>
                    <p className='py-4 indent-10 text-justify'>CARA continues to thrive with the help of dedicated animal lovers who generously volunteer their time each week. From fostering kittens to computer work; our members improve the quality of life for so many pets.</p>
                    <p className='py-4 indent-10 text-justify'>Commitment and communication are the keys to a successful group of people who are all here for the same reason: because they love animals.</p>
                </div>

                <div className='bg-slate-300 px-8 pt-5 my-10'>
                    <h1 className='text-4xl font-medium mb-5'>How To Volunteer</h1>
                    <ul class="list-disc ml-10">
                        <li className='mb-1'>Fill out and submit the <b>Volunteer Registration Form.</b></li>
                        <li className='mb-1'>Attend the CARA volunteer orientation. You will be notified of the date and time thru your contact details.</li>
                        <li className='mb-1'>Senior volunteers regularly call out for volunteers for various activities.</li>
                        <li className='mb-1'>Stay tuned to CARA’s activities and events thru the social media platforms. This way, you can inform us immediately if you are interested in helping out on particular events and activities.</li>
                    </ul>
                </div>
            </div>

            <div className='bg-slate-200 h-fit w-[75%] sm:w-[75%] md:w-[80%] lg:w-[45%] p-5 mt-10'>
                <div className="bg-slate-400 p-5 mb-5">
                    <h1 className='text-4xl font-medium text-center mb-5'>Why Become a Volunteer</h1>
                    <ul className="list-disc ml-10">
                        <li className='mb-1'>Meet like-minded people who share your enthusiasm for animal welfare</li>
                        <li className='mb-1'>Support a cause you believe in</li>
                        <li className='mb-1'>Get a rewarding and satisfying experience</li>
                        <li className='mb-1'>Build your confidence and self-esteem</li>
                        <li className='mb-1'>Learn new skills or develop existing ones</li>
                        <li className='mb-1'>Use your mind and body in a worthwhile way</li>
                        <li className='mb-1'>Spend time doing something you really care about</li>
                        <li className='mb-1'>Feel like you’re part of a community</li>
                    </ul>
                    <p className='mt-10'>But most of all, the animals of the Philippines need you!</p>
                </div>

                <div className="bg-slate-300 p-5 leading-8">
                    <h1 className='text-3xl mb-5'>Volunteer Teams</h1>
                    <p><b className='font-medium'>ADOPTION:</b> Home Visits*, Follow-ups, Turn-over </p>
                    <p><b className='font-medium'>MEDIA:</b> Bloggers, Graphic Artists, Photographers, Videographers, Social Media Managers, Website Managers </p>
                    <p><b className='font-medium'>EDUCATOR:</b> Talks & Workshops, Volunteer Orientation, School & Community Visits* </p>
                    <p><b className='font-medium'>EVENTS:</b>  Event Management, Event Staff </p>
                    <p>*These are suspended at the moment.</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center sm:flex-col sm:items-center lg:flex-row lg:justify-evenly h-fit bg-slate-600'>
            <div className='bg-slate-200 h-fit w-[75%] sm:w-[75%] md:w-[80%] lg:w-[45%] p-5 m-10'>
                <h1 className='text-4xl font-medium text-center mb-5'>Volunteer Requirements</h1>
                <ul class="list-disc ml-10">
                    <li className='mb-1'>Time commitment – 20 hours of volunteer work per quarter.</li>
                    <li className='mb-1'>Participation in a committee. Every member is required to join a committee. There are various committees so we are sure you will find one that interests you. Committees are listed below.</li>
                    <li className='mb-1'>Attendance of 50% of CARA general meetings – normally once a month(alternate methods may be used during this time). This does not count towards the volunteer hours.</li>
                    <li className='mb-1'>A member must be over 18 years of age.</li>
                    <li className='mb-1'>Full support of CARA’s policies and philosophy.</li>
                    <li className='mb-1'>Proactive team players. Animal welfare in the Philippines needs more people to pull together to achieve our common goal.</li>
                    <li className='mb-1'>Members are required to keep abreast of events through the CARA Facebook group. Regular internet access is very important.</li>
                    <li className='mb-1'>If you wish to represent CARA at external events, you will be required to wear the official CARA t-shirt. The t-shirt can be purchased at the CARA clinic. </li>
                </ul>
            </div>

            <div className='bg-slate-200 h-fit w-[75%] sm:w-[75%] md:w-[80%] lg:w-[45%] p-5 m-10 relative md:block'>
                    <form className="bg-white shadow-md rounded-lg p-8 w-full left-[1px]  md:static">
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
                            <label htmlFor="mobile" className="block mb-1 font-medium">
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                id="mobile"
                                name="mobile"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                className="w-full px-3 py-2 border-gray-300 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block mb-1 font-medium">
                                Address *
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full px-3 py-2 border-gray-300 border rounded-md focus:outline-none focus:border-blue-500"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-1 font-medium">
                                How would you like to help CARA? 
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

export default JoinTeam