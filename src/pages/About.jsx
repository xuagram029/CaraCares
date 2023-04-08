import {Link} from 'react-router-dom'
import cath from '../assets/ui/CARA_PICTURES/posters/Cath_Poster.jpg'
import miney from '../assets/ui/CARA_PICTURES/cats/MINEY.png'
import clinic from '../assets/ui/CARA_PICTURES/facilities/CARA-Clinic-outer-facade.jpg'

const About = () => {
  return (
    <div className='bg-slate-400 m-10 px-3 relative'>
        {/* about cara */}
        <section className='flex flex-col sm:flex-col sm:justify-center sm:items-center md:flex-col lg:flex-row'>
            <img src={cath} alt="" className='max-w-[400px] max-h-[300px] mt-10 inline-block mx-auto'/>
            <div className='flex flex-grow flex-wrap flex-col '>
                <div className='p-4 m-3'>
                    <h1 className='text-[30px] font-semibold text-center sm:text-center lg:text-left'>About CARA</h1>
                    <p className='text-justify break-words'>CARA was formed in the year 2000 by a dedicated group of animal lovers determined to help the plight of animals in the Philippines. We are a non-profit, non-government organization that receives no government funding; we rely solely on private donations.</p>
                </div>
                <div className='p-4 m-3'>
                    <h3 className='text-[30px] font-semibold mb-2 text-center sm:text-center lg:text-left'>Vision</h3>
                    <p className='text-justify break-words'>To make the Philippines a compassionate country where all cats and dogs have good homes.</p>
                </div>
                <div className='p-4 m-3'>
                    <h3 className='text-[30px] font-semibold mb-2 text-center sm:text-center lg:text-left'>Mission</h3>
                    <p className='text-justify break-words'>To promote animal welfare in the country through education, public awareness, affordable sterilization and veterinary care, and the rehabilitation and rehoming of cats and dogs in need</p>
                </div>
            </div>
        </section>
        {/* goals */}
        <section className='flex flex-col sm:flex-col sm:justify-center sm:items-center md:flex-col lg:flex-row'>
            <div className='flex flex-grow flex-wrap flex-col '>
                <div className='p-4 m-3'>
                    <h1 className='text-[30px] font-semibold mb-4 text-center sm:text-center lg:text-left' >Goals</h1>
                    <ul className='list-disc ml-10'>
                        <li className='text-justify break-words'>To provide veterinary consultations for low income pet owners through the CARA veterinary clinic</li>
                        <li className='text-justify break-words'>To promote Trap/Neuter/Return in barangays, villages and commercial establishments</li>
                        <li className='text-justify break-words'>To provide caring and responsible homes through our adoption program</li>
                        <li className='text-justify break-words'>To educate citizens about animal welfare and the stray animal population</li>
                        <li className='text-justify break-words'>To promote no-kill pounds and shelters</li>
                    </ul>
                </div>
            </div>
            <img src={miney} alt="" className='max-w-[300px] max-h-[300px] mt-10 inline-block mx-auto'/>
        </section>
        {/* note */}
        <section className='flex flex-row'>
            <div className='flex flex-grow flex-wrap flex-col '>
                <div className='p-4 m-3'>
                    <h1 className='text-[30px] font-semibold mb-4' >Please note: </h1>
                    <ul className='list-disc ml-10'>
                        <li className='text-justify break-words'>CARA does not run an animal shelter. We rely on the compassion of our friends and volunteers to foster our rescues. Exceptional cases are housed at the clinic awaiting adoption.</li>
                        <li className='text-justify break-words'>We are not a government agency. The advocacy is run by a few VOLUNTEERS and rely on DONATIONS to keep going.</li>
                        <li className='text-justify break-words'>We focus on educating the public about animal welfare, providing low-cost spay/neuter, conducting TNR, and promoting adoption over shopping for pets.</li>
                        <li className='text-justify break-words'>As we are volunteers with limited funds, our ability to accommodate requests depends on our availability and resources and YOUR WILLINGNESS to participate.</li>
                        <li className='text-justify break-words'>We receive dozens of rescue requests every week. Recently, these requests have become DEMANDS accompanied by insults and recriminations. As much as we want to help, we simply cannot help everyone and all animals in need.</li>
                        <li className='text-justify break-words'>Again, we remind everyone that CARA is run by volunteers. Please be respectful and considerate.</li>
                        <li className='text-justify break-words'>We encourage you to also take a proactive role in protecting animal rights in the country. In, this we shall always be willing to help guide you.</li>
                    </ul>
                </div>
                
                <div class="flex flex-col justify-center space-y-5  sm:space-y-5 lg:space-y-0 sm:flex-col sm:justify-center sm:items-center md:flex-col lg:flex-row  m-10">
                    <button class="underline hover:no-underline bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-2 px-6 rounded-lg mx-auto">Learn more about what we do in our FAQs.</button>
                    <button class="underline hover:no-underline bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-2 px-6 rounded-lg mx-auto">Learn more about becoming a CARA volunteer.</button>
                </div>
            </div>
        </section>

        {/* new clinic */}
        <section className=''>
            <img src={clinic} alt="" className='w-[550px] h-[450px] mt-10 m-auto'/>
            <div className=''>
                <div className='p-4 m-3'>
                    <p className='text-justify mb-7'>Thanks to a very generous benefactor, CARA opened its doors to their new premises in January 2015. The clinic is situated at Mandaluyong in Metro Manila.</p>
                    <p className='text-justify mb-7'>CARA’s goal is to make spay & neuter, as well as basic services, affordable to everyone from all walks in life.</p>
                    <p className='text-justify mb-7'>In making the spay & neuter procedures within people’s budgets, it will help towards curbing the over population, while preventing endless cruelty to unwanted offspring. It also stops the anti-social behavior that is associated with an unfixed animal. Our long term goal is to eventually own offer mobile spay & neuter services, to enable us to reach residents who are unable to afford the transport costs to travel to the clinic.</p>
                    <p className='text-justify mb-7'>If you would like more information on the benefits of spaying and neutering, please read  Why Spay & Neuter your furry friend will thank you.</p>
                    <p className='text-justify mb-7'>The work we do at the CARA clinic would not be possible without the dedication of our staff and vet who generously offer their time and services to help CARA achieve its mission: making spay/neuter the most effective and humane way to control the population of the street animals. With their help, we are also able to make spay/neuter available and affordable to lower income communities. We currently offer <Link className='underline font-semibold'>pet boarding</Link> and <Link className='underline font-semibold'>pet grooming</Link> services in our clinic.</p>
                </div>
            </div>

        </section>
    </div>
  )
}

export default About