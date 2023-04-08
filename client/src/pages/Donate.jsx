import { Link } from 'react-router-dom'
import pet_donation from '../assets/ui/CARA_PICTURES/donation/pet_donation.png'
import paypal from '../assets/ui/CARA_PICTURES/donation/PayPal_logo.png'
import simplygiving from '../assets/ui/CARA_PICTURES/donation/SimplyGiving-lg.png'
import gcash from '../assets/ui/CARA_PICTURES/donation/GCash_Logo.png'
import bpi from '../assets/ui/CARA_PICTURES/donation/bpi-1@2x.png'


const Donate = () => {
  return (
      <div className='bg-slate-400 m-10 px-3 max-h-fit relative overflow-auto'>
        <div className='text-center text-2xl font-semibold bg-slate-300 p-5 my-3'> 
            <p>CARA appreciates all your help!</p>
        </div>
        <div className='flex flex-row bg-slate-800 p-10 gap-6 items-baseline'>
            <div className='bg-slate-300'><p className='leading-8'>Thank you for your on-going support and donations big and small that help the animals we help, big and small.  Every donation is important and appreciated by the staff and supporters, but most of all it makes a massive difference to the animals we rescue!</p></div>
            <div className='bg-slate-500'><img src={pet_donation} alt="" className='max-w-[400px] max-h-[300px] mt-10 inline-block' /></div>
        </div>

        <p>Please choose from any of the following Donation Channels:</p>
        <div className='p-20 flex bg-slate-500 my-5 gap-10 justify-between '>
            <div className='flex flex-col justify-center items-center'>
                <Link to='https://www.paypal.com/paypalme/carawelfareph/' target='_blank'><img src={paypal} alt="" className='max-w-[200px] max-h-[300px] mt-10 inline-block mb-5'/></Link>
                <Link to='https://www.paypal.com/paypalme/carawelfareph/'>paypal.com/paypalme/carawelfareph</Link>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Link to='https://www.simplygiving.com/nonprofit/CARA' target='_blank'><img src={simplygiving} alt="" className='max-w-[200px] max-h-[300px] mt-10 inline-block mb-5'/></Link>
                <Link to='https://www.simplygiving.com/nonprofit/CARA'>simplygiving.com/nonprofit/CARA</Link>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={gcash} alt="" className='max-w-[200px] max-h-[300px] mt-10 inline-block mb-5'/>
                <p>Send to 09274251052 Nancy C</p>
            </div>
        </div>

        <div className='p-20 flex bg-slate-500 my-5 justify-between '>
            <div className='flex flex-col justify-center items-center bg-slate-800 py-5 px-12'>
                <p>US Dollar (USD) Account</p>
                <ul className='list-disc'>
                    <li>BRANCH: Atrium, Makati</li>
                    <li>SWIFT#: bopiphmm</li>
                    <li>ACCOUNT#: 3124-0417-66</li>
                </ul>
            </div>
            <div className='flex flex-col justify-center items-center bg-slate-800 py-5 px-12'>
                <img src={bpi} alt="" className='max-w-[200px] max-h-[300px] mt-10 inline-block mb-5'/>
            </div>
            <div className='flex flex-col justify-center items-center bg-slate-800 py-5 px-12'>
                <p>US Dollar (USD) Account</p>
                <ul className='list-disc'>
                    <li>BRANCH: Atrium, Makati</li>
                    <li>SWIFT#: bopiphmm</li>
                    <li>ACCOUNT#: 3124-0417-66</li>
                </ul>
            </div>
        </div>

        <div className='flex flex-row justify-center items-center bg-slate-800 py-5 px-12 gap-10 my-5'>
            <div className=' bg-slate-300 p-14 flex flex-col gap-9'>
                <p>Become a CARA Ally: Give Monthly</p>
                <button className='border border-black p-3 rounded-md'>DONATE MONTHLY</button>
            </div>
            <div className=' bg-slate-300 p-14 flex flex-col gap-9'>
                <p>Become a CARA Ally: Give Monthly</p>
                <button className='border border-black p-3 rounded-md'>DONATE MONTHLY</button>
            </div>
        </div>


        <div className='flex flex-row justify-center items-center bg-slate-200 py-5 px-12 gap-10 my-5'>
            <div className=' bg-slate-300 p-14 max-h-72 flex flex-col gap-9 leading-3'>
                <p>OBM Dry Food</p>
                <p>SPECIAL DOG Wet Food</p>
                <p>CUTIES TUNA Dry Food</p>
                <p>FELINE GOURMET Wet Food</p>
                <p>KITTEN Wet and Dry Food</p>
            </div>
            <div className=' bg-slate-300 p-14 max-h-72 flex flex-col gap-9 leading-3'>
                <p>CARA Clinic – Mandaluyong</p>
                <p>175 Lopez Rizal Street(Corner of Samat Street)</p>
                <p>MANDALUYONG CITY</p>
                <p>Ph 02 532 3340  OR  0919 5790 047</p>
            </div>
        </div>
            <div className='text-center text-2xl font-semibold bg-slate-300 p-5 mb-3'>
                <p>On behalf of the animals, we Thank You!</p>
            </div>
    </div>
  )
}

export default Donate