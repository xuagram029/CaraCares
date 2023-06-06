import {Link} from 'react-router-dom'
import cath from '../assets/ui/CARA_PICTURES/posters/Cath_Poster.jpg'
import miney from '../assets/ui/CARA_PICTURES/cats/MINEY.png'
import clinic from '../assets/ui/CARA_PICTURES/facilities/CARA-Clinic-outer-facade.jpg'
import goalsimg from "../assets/images/target.png";
import vissionimg from "../assets/images/vision.png";
import missionimg from "../assets/images/goal.png";
const About = () => {
  return (
    <div className='bg-neutral-100 shadow-l pt-10 w-full'>
        {/* about cara */}
        <section className=''>
        <h1 className='text-3xl font-bold mb-1 text-center text-black'>About</h1>
        <h1 className='text-3xl font-bold text-rose-600 text-center text-black mb-16'>CARA WELFARE PHILIPPINES</h1>
            <img src={cath} alt="" className='w-2/6 h-[500px] shadow-m m-auto'/>
            <div className='flex flex-grow flex-wrap flex-col mt-5 text-center '>
                <div className='p-16 text-white m-3 bg-rose-600'>
                    <h1 className='text-[30px] font-semibold text-center '>About CARA</h1>
                    <p className='text-center m-auto w-1/3'>CARA was formed in the year 2000 by a dedicated group of animal lovers determined to help the plight of animals in the Philippines. We are a non-profit, non-government organization that receives no government funding; we rely solely on private donations.</p>
                </div>
                
                
            </div>
            <h1 className='text-3xl font-bold text-rose-600 text-center p-24'>CARA'S CORE FOUNDATION</h1>
            <div class="flex items-center justify-center px-64 text-center text-black mt-12">
                <div className='items-center justify-center'>
                    <img className="fill-cyan-500 hover:fill-cyan-700 p-7 m-auto shadow-s rounded-full" src={goalsimg} alt="" />
                    <h1 className='mt-7 text-3xl font-bold mb-1 text-rose-600'>Goals</h1>

                    <div className='flex items-center justify-center'>
                    <p className="text-gray-500 dark:text-gray-400"></p>
                    <hr className="w-24 h-1  my-4 bg-neutral-400 border-0 md:my-10 bg-neutral-400"/>
                    <p class="text-gray-500 dark:text-gray-400"></p>
                    </div>
                    <p className='m-auto text-center text-neutral-400 w-full text-[18px]'>CARA veterinary clinic provides veterinary consultations for low-income pet owners and promotes Trap/Neuter/Return programs. We find caring homes through our adoption program and educate citizens about animal welfare. Our goal is to establish no-kill pounds and shelters for the compassionate treatment of animals.</p>
                </div>
                
                    
                <div className='items-center justify-center'>
                    <img className="fill-cyan-500 hover:fill-cyan-700 p-7 m-auto shadow-s rounded-full" src={vissionimg} alt="" />
                    <h1 className='mt-7 text-3xl font-bold mb-1 text-rose-600'>Vision</h1>

                    <div className='flex items-center justify-center'>
                    <p className="text-gray-500 dark:text-gray-400"></p>
                    <hr className="w-24 h-1  my-4 bg-neutral-400 border-0 md:my-10 bg-neutral-400"/>
                    <p class="text-gray-500 dark:text-gray-400"></p>
                    </div>
                    <p className='m-auto text-center text-neutral-400  w-full text-[18px]'>
CARA veterinary clinic aims to make the Philippines a compassionate country for cats and dogs with good homes. Through veterinary consultations, responsible ownership promotion, and collaboration, we strive to create a society that values and protects the well-being of our furry companions, providing them safe and nurturing environments.</p>
                </div>


                <div className='items-center justify-center'>
                    <img className="fill-cyan-500 hover:fill-cyan-700 p-7 m-auto shadow-s rounded-full" src={missionimg} alt="" />
                    <h1 className='mt-7 text-3xl font-bold mb-1 text-rose-600'>Mission</h1>

                    <div className='flex items-center justify-center'>
                    <p className="text-gray-500 dark:text-gray-400"></p>
                    <hr className="w-24 h-1  my-4 bg-neutral-400 border-0 md:my-10 bg-neutral-400"/>
                    <p class="text-gray-500 dark:text-gray-400"></p>
                    </div>
                    <p className='m-auto text-center text-neutral-400  w-full text-[18px]'>
CARA veterinary clinic aims to make the Philippines a compassionate country for cats and dogs with good homes. Through veterinary consultations, responsible ownership promotion, and collaboration, we strive to create a society that values and protects the well-being of our furry companions, providing them safe and nurturing environments.</p>
                </div>
         
        </div>
          
            
        </section>
        {/* goals */}
       
    </div>
  )
}

export default About