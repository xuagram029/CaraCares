import lagunaPit from '../assets/ui/CARA_PICTURES/logos/LPB1-1.jpg'
import { Link } from 'react-router-dom'


const LagunaPit = () => {
  return (
    <div className='bg-neutral-100 shadow-l m-6 p-5 '>
        <img src={lagunaPit} alt="" className='max-w-full lg:mx-auto h-auto mt-10 lg:max-w-[70%] lg:max-h-[600px] lg:mt-0 lg:flex-none '/>
        <p className='mx-20 mt-8 indent-10'>In 2012, the biggest raid of the country’s most infamous dogfighting operations took place in Laguna. We found over 260 pit bulls and mixed-breed dogs in horrible conditions. They were malnourished, heavily scarred, and living in steel drums. But beneath the physical scars ran deeper ailments, most notably vast deficiencies in their immune systems.</p>
        <p className='mx-20 my-8 indent-10'>With the success of shutting down of such a horrible enterprise, there came to light another challenge: these dogs needed care and a home, and they needed them fast.  CARA eventually took the lead in the care and rehabilitation of these poor dogs.</p>

        <h1 className='mx-20 my-8 text-xl font-semibold text-center sm:text-center lg:text-left'>Can we visit the Laguna Pit Bulls?</h1>
        <p className='mx-20 my-6 text-center sm:text-center lg:text-left'>Yes, we welcome visitors and volunteers who will help us take care of our beloved dogs.</p>
        <p className='mx-20 my-6 indent-10'>At present, there are still over 70 pit bulls at the sanctuary. Most are ready for adoption. We welcome volunteers and visitors to interact with them by walking and bathing them.</p>
        <p className='mx-20 my-6 indent-10'>Our sanctuary is located 3 hours away from Manila, in a lush forested area. Individuals, families, and corporations will find our sanctuary ideal for bonding and team-building activities.</p>
        <p className='mx-20 my-6 text-center sm:text-center lg:text-left'><b>To visit the Laguna Pit Bull Sanctuary, send an email to <a href="mailto: volunteeratlpb@gmail.com" className='underline'>  volunteeratlpb@gmail.com</a> and then we will get back to you immediately to arrange a visit.</b></p>

        <h1 className='mx-20 my-8 text-xl font-semibold text-center sm:text-center lg:text-left'>Do we need to pay to visit the Laguna Pit Bulls Sanctuary?</h1>
        <p className='mx-20 my-3'>At present, no. But we require that visitors would at least help with the sanctuary’s needs through one of the following:</p>
        <ul className="list-disc mx-32 my-4">
            <li className='pb-5'>bringing at least two sacks of OPTIMA BEEF MEAL MAINTENANCE (29 kilos per sack, green and white sack, low protein)</li>
            <li className='pb-5'>donating PHP 250 per person as their participation to the 250 for a Pittie campaign.</li>
        </ul>
        
        <h1 className='mx-20 my-8 text-xl font-semibold text-center sm:text-center lg:text-left'>How can I donate to the 250 for a Pittie Campaign?</h1>
        <p className='mx-20 my-3 text-center sm:text-center lg:text-left'>Thank you so much! You can register as a monthly giver on <Link to='https://lpb.helixpay.ph/' className='underline'>https://lpb.helixpay.ph/</Link> or deposit to BPI #3121-1984-86. Kindly send the proof of deposit (screenshot or scanned) to secretary@caraphil.org.</p>
    </div>
  )
}

export default LagunaPit