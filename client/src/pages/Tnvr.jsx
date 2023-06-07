import tCat from '../assets/ui/CARA_PICTURES/logos/TNR.jpg'
import vilCats from '../assets/ui/CARA_PICTURES/logos/TNR-colony.jpg'
const Tnvr = () => {
  return (
    <div className='bg-primary m-10 p-5 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto'>
        <img src={tCat} alt="cat trap" className='m-auto'/>
        <p className='mx-20 my-6 indent-10 sm:indent-10 lg:indent-0'>More than thirty years of documented proof shows that trap-and-kill methods have no lasting effect on reducing feral cat populations. Trap and kill is simply ineffective, expensive and cruel. If all the cats are not caught, then the ones left behind over breed until the former population level is reached.</p>
        <p className='mx-20 my-6 indent-10 sm:indent-10 lg:indent-0'>Even if all the cats are removed, new un-neutered cats move in to take advantage of whatever food source is available. Once there, they breed prolifically, quickly populating a new colony with descendants that are more cautious and more disease-resistant. This “vacuum effect” is very well-documented. Therefore the trap/kill effort becomes increasingly unproductive in the effort to reduce numbers.</p>
        <p className='mx-20 my-6 indent-10 sm:indent-10 lg:indent-0'>Trap/Catch-Neuter-Vaccinate-Return, commonly referred to as “TNVR,” is the only method proven to be humane and effective at controlling the feral cat population. Using this technique, all the feral cats in a colony are trapped, neutered and then returned to their territory.</p>
        <p className='mx-20 my-6 indent-10 sm:indent-10 lg:indent-0'>A feral cat management plan, such as the one promoted by CARA, has a dramatic impact on solving neighborhood feral cat problems.</p>
        <p className='mx-20 my-6 indent-10 sm:indent-10 lg:indent-0'>The Trap/Catch-Neuter-Vaccinate-Return (TNVR) method has shown to be enormously successful in reducing cat populations, at the same time it also offers the cats peaceful lives in their territories. In the end, everyone benefits: cats, wildlife, and people. It is effective, responsible and humane. The breeding stops and populations are gradually reduced. Nuisance behaviors associated with mating and breeding, such as calling and fighting, are virtually eliminated.</p>
        <p className='mx-20 my-6 indent-10 sm:indent-10 lg:indent-0'>TNVR recognizes there is a balance in our urban society, one that includes feral cats. We would be overrun with rats and cockroaches if it wasn’t for the cats. TNVR is a movement that will hopefully continue to grow as more and more people see that it works.</p>

        <h1 className='mx-20 my-6 text-3xl font-medium text-center sm:text-center lg:text-left'>TNVR Program Implementation</h1>
        <p className='mx-20 my-6'>The places listed below are following the TNVR program.</p>
        <ul className='list-disc mx-32 my-4'>
            <li>Dasmarinas village</li>
            <li>Forbes Park village</li>
            <li>Bel Air village</li>
            <li>San Lorenzo village</li>
            <li>Fort Bonifacio Development</li>
            <li>Polo club Makati</li>
        </ul>
        <p className='mx-20 my-6 indent-10 sm:indent-10 lg:indent-0'>Here is an example of a healthy well maintained colony; this photo was taken at the Manila Polo Club. These cats are all spayed and neutered and are fed daily by a volunteer. They keep the rodent and roach situation under control and live peacefully alongside their fellow human beings.</p>
        <img src={vilCats} alt="cat trap" className='m-auto'/>
        <p className='mx-20 my-6 indent-10 sm:indent-10 lg:indent-0'>We encourage all villages, clubs and areas to use this humane approach to controlling their cat population. We hope to make this list a lot longer in years to come when people realize, there is a humane way to control the cat population.</p>

        <h1 className='mx-20 my-6 text-3xl font-medium text-center sm:text-center lg:text-left'>Setting UP TNVR in Your Area</h1>
        <p className='mx-20 my-6 indent-10 sm:indent-10 lg:indent-0 text-justify'>CARA is here to help support and guide you. But we MUST DO IT TOGETHER. To set up a Trap/Catch-Neuter-Vaccinate-Return (TNVR) of stray cats in your community, do the following first.</p>
        <ol className='list-decimal mx-32 my-4'>
            <li>Get support – try to form a TNVR group consisting of like-minded cat lovers; it is much easier working in a team. CARA can help you with the initial training and will always be on hand for advice.</li>
            <li>Associations backing – approach your association, show them this information and see if they are interested in financially backing the project. Unfortunately most associations do not see the long term benefits, they just see expenses.</li>
            <li>Costs – there are initial set up costs and ongoing running costs. You need to prepare for this.</li>
        </ol>

        <h1 className='mx-20 my-6 text-3xl font-medium text-center sm:text-center lg:text-left'>How to Set-Up Costs</h1>
        <p className='mx-20 my-6'>For TNVR you will need the following items:</p>
        <ul className='list-disc mx-32 my-4'>
            <li>Traps/Catch</li>
            <li>Recovery cages</li>
            <li>Bowls for food and water</li>
            <li>Old blankets/towels (to cover cages)</li>
        </ul>
        <p className='mx-20 my-6'>You must also take into account running costs:</p>
        <ul className='list-disc mx-32 my-4'>
            <li>Food for cats in recovery</li>
            <li>Spay and neuter fee (P800 for males & P1,000 for females at the CARA Clinic)</li>
            <li>Fundraising – Ideally the costs should be covered by the association. If the association will not help, then another source of funds has to be found. It is then time to get creative and think of ways to raise money.</li>
            <li>Approach residents – It is going to benefit them if you trap outside their houses, no more cats howling in the night. Hold a fund-raising event (e.g. hold a concert; organize a garage or bake sale; sell gift items and used books). Get sponsorship.</li>
            <li>Transport – You will need to be able to transport the cats to the CARA clinic for surgery and return them back. If you don’t live near the CARA clinic, we might be able to recommend a clinic near you who would offer discounted spay and neuter.</li>
            <li>Recovery area – There needs to be a quiet secure area where the cats can recover.</li>
        </ul>
        <p className='mx-20 my-6'>If you feel ready to get started, please contact <a href="mailto:clinic@caraphil.org">clinic@caraphil.org</a></p>
    </div>
  )
}

export default Tnvr