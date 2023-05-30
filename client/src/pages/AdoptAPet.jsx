import { Link } from 'react-router-dom'
import adoption_process from '../assets/ui/CARA_PICTURES/posters/adoption_process.jpg'
const AdoptAPet = () => {
  return (
    <div className='bg-slate-400 m-10 px-3 max-h-fit'>
        <section>
            <div className='p-5'>
                <h1 className='font-bold text-center text-2xl p-3 sm:text-2xl md:text-4xl'>Is there a place in your heart for one of our delightful, rescued pets?</h1>
                <h2 className='font-normal text-center p-3'>Before deciding to adopt, learn more about pet adoption.</h2>
            </div>
            <div className='p-5'>
                <div className="flex justify-center gap-10 mb-4 ">
                <Link to="/pets-for-adoption"><button className='border rounded-l border-black p-2'>View our gallery of Pets for Adoption</button></Link>
                <Link to="/adoption-pdf"><button className='border rounded-l border-black p-2'>Fill up our Pet Adoption Form</button></Link>
                </div>
                    <ul className='m-auto'>
                        <Link className='list-disc underline block text-center mb-1'>Why Adopt a Pet Instead of Buying?</Link>
                        <Link className='list-disc underline block text-center mb-1'>5 Reasons to Adopt a Pet Rather Than Buy</Link>
                        <Link className='list-disc underline block text-center mb-1'>5 Things to Consider Before Adopting a Pet</Link>
                        <Link className='list-disc underline block text-center mb-1'>Health Benefits of Having Pets</Link>
                        <Link className='list-disc underline block text-center mb-1'>Why You Should Totally Adopt a Cat</Link>
                        <Link className='list-disc underline block text-center mb-1'>5 Reasons for Adopting an Older Cat</Link>
                    </ul>
            </div>
        </section>



        <section>
            <img src={adoption_process} alt="" className='m-auto my-3'/>
            <p className='text-center'>CARA Adoption Process</p>
            <p className='text-justify mt-3 m-7'>Please read our adoption polices carefully. We want to ensure our rescued animals go to a loving and safe environment. If you are 100% sure you are ready to be a pet owner and can meet our adoption requirements, please read on.</p>

            <div>
                <p className='text-center font-semibold mt-10'>The Adoption Process</p>
                <ol className='list-decimal p-10 mx-5  leading-7'>
                  <li>Select an animal/s from the CARA Animals “Adopt Me” album or visit our Facebook page.</li>
                  <li>Visit the CARA Clinic in Mandaluyong to meet our pets for adoption. We require at least 1 visit for cats and 2 visits for dogs.</li>
                  <li>Download the CARA Adoption Form.</li>
                  <li>Email the completed adoption form to adoption@caraphil.org.</li>
                  <li>After we have gone over your application, we will schedule a home visit for you with one of our volunteers to ensure that your home environment is safe for our rescue/s and to make the necessary recommendations.</li>
                  <li>Once approved, you may come and pick up the animal/s and pay the adoption fee (PHP1,000/cat; PHP1,500/dog).</li>  
                </ol>
                <p className='text-center'>We will make at least one follow up visit to ensure that everybody is happy. CARA reserves the right to refuse adoption to any individual who we feel is not suitable.</p>
            </div>
                <div className="flex justify-center gap-10 my-4 ">
                    <Link to="/pets-for-adoption"><button className='border rounded-l border-black p-2'>View our gallery of Pets for Adoption</button></Link>
                    <Link to="/adoption-pdf"><button className='border rounded-l border-black p-2'>Fill up our Pet Adoption Form</button></Link>
                </div>
        </section>

        <section className=' mt-10'>
            <p className='text-center font-bold text-[50px]'>CARA Adoption Policies</p>
            <div className="flex flex-col sm:flex-col sm:justify-center md:flex-row xl:flex-row max-w-[100%] ">
                <div>
                    <p className='font-medium text-[20px] text-center my-5'>CARA Adoption Policy for Cats</p>
                    <ol className='list-decimal leading-7 max-w-[80%] m-auto'>
                        <li>Cats adopted from CARA must be kept indoors. Doors/gates leading outside should be kept closed and windows must be fitted with fly screens to prevent the cat going outside. In specific cases, cats may be approved to go to an indoor/outdoor home.</li>
                        <li>Cats should be provided with a litter box (cleaned daily).</li>
                        <li>Cats must not be declawed for any reason. This is considered animal cruelty.</li>
                        <li>The animal must be provided with fresh water at all times and good quality food twice daily.</li>
                        <li>Veterinary treatment must be provided when necessary for the continued health and well-being of the animal. Vaccines should be kept up-to-date yearly.</li>
                        <li>CARA’s animals, if over 6 months of age, are spayed/neutered before adoption. If the chosen pet is under 6 months of age, therefore not yet neutered, an advanced payment should be given to CARA for the operation. The animal has to be brought to the CARA clinic to the prearranged appointment for neutering. Why Spay & Neuter?</li>  
                        <li>If for whatever reason you cannot keep the adopted animal, you must notify CARA and return the animal to CARA.</li>
                        <li>The adoptive family agrees to give CARA visiting rights to ensure the terms of the adoption agreement are being followed. Failure to follow the agreement will result in the animal being reclaimed by CARA.</li>
                        <li>Cats adopted will be picked up and transported by the adopter to their new home in a carrier approved by CARA.</li>
                        <li>The adoption fee is non-refundable.</li>
                    </ol>
                </div>

                <div>
                    <p className='font-medium text-[20px] text-center my-5'>CARA Adoption Policy for Dogs</p>
                    <ol className='list-decimal leading-7 max-w-[80%] m-auto'>
                        <li>Dogs must be able to roam freely in a fenced or secure area inside the adopter’s house or compound.  This can be indoors or outdoors, provided there is adequate shelter.</li>
                        <li>Dogs should be walked twice daily in a responsible manner.</li>
                        <li>They must not be debarked. This is considered animal cruelty.</li>
                        <li>The animal must be provided with fresh water at all times and good quality food twice daily.</li>
                        <li>Veterinary treatment must be provided when necessary for the continued health and well-being of the animal. Vaccines should be kept up-to-date yearly.</li>
                        <li>CARA’s animals, if over 6 months of age, are spayed/neutered before adoption. If the chosen pet is under 6 months of age, therefore not yet neutered, an advanced payment should be given to CARA for the operation. The animal has to be brought to the CARA clinic to the prearranged appointment for neutering. Why Spay & Neuter?</li>
                        <li>If for whatever reason you cannot keep the adopted animal, you must notify CARA and return the animal to CARA.</li>
                        <li>The adoptive family agrees to give CARA visiting rights to ensure the terms of the adoption agreement are being followed. Failure to follow the agreement will result in the animal being reclaimed by CARA.</li>
                        <li>Dogs adopted will be picked up by the adopter and brought to their new home in a carrier approved by CARA or in a personal vehicle.</li>  
                        <li>The adoption fee is non-refundable.</li>  
                    </ol>
                </div>
            </div>
        </section>


        

        <div className="flex justify-center gap-10 my-8 p-6 ">
        <Link to="/adoption-pdf"><button className='border rounded-l border-black p-2'>Fill up our Pet Adoption Form</button></Link>
        </div>
    </div>
  )
}

export default AdoptAPet