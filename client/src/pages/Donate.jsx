import { Link } from 'react-router-dom'
import pet_donation from '../assets/ui/CARA_PICTURES/donation/pet_donation.png'
import paypal from '../assets/ui/CARA_PICTURES/donation/PayPal_logo.png'
import simplygiving from '../assets/ui/CARA_PICTURES/donation/SimplyGiving-lg.png'
import gcash from '../assets/ui/CARA_PICTURES/donation/GCash_Logo.png'
import bpi from '../assets/ui/CARA_PICTURES/donation/bpi-1@2x.png'


const Donate = () => {
  return (
      <div className='bg-neutral-100 text-rose-600 px-3 max-h-fit overflow-auto shadow-l'>
        <div className='text-center text-3xl font-semibold bg-neutral-100 p-5 my-3'> 
            <p>CARA appreciates all your help!</p>
        </div>
        <div className='flex flex-col sm:flex-col sm:justify-center sm:items-center md:flex-row xl:flex-row bg-neutral-100 p-10 gap-6 items-center'>
            <div className='bg-neutral-100 sm:w-[350px] md:w-1/2 text-md font-bold bg-rose-600 text-white p-8 rounded-full'>
                <p className='leading-8'>Thank you for your on-going support and donations big and small that help the animals we help, big and small.  Every donation is important and appreciated by the staff and supporters, but most of all it makes a massive difference to the animals we rescue!</p>
            </div>
            <div className='bg-neutral-100'>
                <img src={pet_donation} alt="" className='w-[300px] h-[250px] sm:w-[300px] sm:h-[250px] md:h-[300px] md:w-[400px] mx-auto inline-block' />
            </div>
        </div>

        <p className='font-semibold text-center sm:text-lg pt-5'>Please choose from any of the following Donation Channels:</p>
        <div className=' flex bg-neutral-100 px-48 my-5 mx-24 justify-between flex-col sm:flex-col lg:flex-row'>
            <div className='flex flex-col justify-center items-center shadow-m p-5 rounded-[12px] bg-rose-600'>
                <Link to='https://www.paypal.com/paypalme/carawelfareph/' target='_blank'><img src={paypal} alt="" className='max-w-[200px] max-h-[300px] mt-10 inline-block mb-5'/></Link>
                <Link to='https://www.paypal.com/paypalme/carawelfareph/'><p className='text-md font-bold text-white'>paypal.com/paypalme/carawelfareph</p></Link>
            </div>
            <div className='flex flex-col justify-center items-center shadow-m p-5 rounded-[12px] bg-rose-600'>
                <Link to='https://www.simplygiving.com/nonprofit/CARA' target='_blank'><img src={simplygiving} alt="" className='max-w-[200px] max-h-[300px] mt-10 inline-block mb-5'/></Link>
                <Link to='https://www.simplygiving.com/nonprofit/CARA'><p className='text-md font-bold text-white'>simplygiving.com/nonprofit/CARA</p></Link>
            </div>
            <div className='flex flex-col justify-center items-center shadow-m p-5 rounded-[12px] bg-rose-600'>
                <img src={gcash} alt="" className='max-w-[200px] max-h-[300px] mt-10 inline-block mb-5'/>
                <p className='text-md font-bold text-white'>Send to 09274251052 Nancy C</p>
            </div>
        </div>

        <div className='mx-48 mt-16 flex flex-col bg-neutral-100 my-5 justify-center sm:flex-col md:flex-row lg:flex-row gap-4 shadow-m  rounded-[12px]  '>
          <div className='flex flex-col justify-center items-center bg-neutral-100 '>
                <img src={bpi} alt="" className='max-w-[200px] max-h-[300px] mt-10 inline-block mb-5'/>
            </div>
            <div className='flex flex-col justify-center items-center  py-5 px-12 text-rose-600 font-bold bg-neutral-100  '>
                <div className=''>
                    <p className='cursor-pointer peer text-left'>Peso (PHP) Account</p>
                    <div className='hidden peer-hover:flex hover:flex'>
                    <ul className='list-disc'>
                        <li>BRANCH: Libertad-Mandaluyong</li>
                        <li>NAME: CARA Welfare Philippines Inc</li>
                        <li>ACCOUNT#: 3911- 0049- 75</li>
                    </ul>
                    </div>                
                </div>

                <div className=''>
                    <p className='cursor-pointer peer text-left'>US Dollar (USD) Account</p>
                    <div className='hidden peer-hover:flex hover:flex'>
                    <ul className='list-disc'>
                        <li>BRANCH: Atrium, Makati</li>
                        <li>SWIFT#:  bopiphmm</li>
                        <li>ACCOUNT#: 3124-0417-66</li>
                    </ul>
                    </div>                
                </div>
                
            </div>
           
           
        </div>

     

       
            <div className='text-center text-3xl font-semibold bg-neutral-100 mt-16 p-5 mb-3'>
                <p>On behalf of the animals, we Thank You!</p>
            </div>
    </div>
  )
}

export default Donate