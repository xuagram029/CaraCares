import { Link } from "react-router-dom";


const Foster = () => {
  return (

        <div className='flex flex-col sm:flex-col bg-slate-400 items-center sm:items-center lg:items-start '>
        <section className="p-5 m-10 bg-primary flex flex-col justify-between w-4/5 sm:w-4/5 lg:w-2/3 mx-auto">
            <div className="outline-dashed p-4 mb-10">
                <p className="font-semibold">Thank you for considering becoming a foster parent to a CARA rescue!</p>
                    <p className="mt-6">Because CARA is not an animal shelter, rescued animals need to be placed in a good home with fosters that are interested in investing energy and time as well as possibly financial resources in rehabilitating the animal and preparing it for its forever home.</p>
                    <p className="my-6 ">It is important to understand the commitments that a foster makes, as most of the rescued animals have endured traumatic experiences and need people who are experienced in caring for animals to prepare them for adoption or even nurse them back to health. The information below is designed to assist you during your time as a foster, give some basic information of what is expected of a foster and who to contact should you have further questions.</p>
            </div>

            <div className="outline-dashed p-4 mb-10">
                <button className="outline-double w-[100%] p-3 mb-8">View our gallery of Pets for Fostering</button>
                <p className="capitalize font-semibold text-center text-lg my-6">I WANT TO MAKE A DONATION INSTEAD</p>
                <button className="outline-double w-[100%] p-3 mb-8">Donate via PayPal</button>
                <button className="outline-double w-[100%] p-3 mb-8">Donate via Simply Giving</button>
                <button className="outline-double w-[100%] p-3 mb-8">Donate via Pet Warehouse</button>
            </div>

            <div className="outline-dashed p-4 mb-10">
                <p className="font-semibold text-5xl">Commitment to Fostering</p>
                    <p className="my-6">As a foster parent, your commitment usually lasts 3 months to 1 year during which CARA will add the animal to the adoption list and bring it to adoption events or meet ups with possible adoption families. During this time the foster family covers basic needs such as food, toys, vitamins.</p>
                    <p className="my-6">Depending on the financial situation of the foster, either CARA or the foster cover medical expenses. We have some fosters who are of simple means, but still have a lot of love and a good home to offer, and other fosters who have better financial situations and may have the means to pay for medical bills.</p>
                    <p className="my-6">It really is a case per case basis that should be discussed before the animal goes to the foster. Honesty between the foster and CARA is of great importance not only before but also throughout the fostering period – caring for the animal should be a team effort.</p>
                    <p className="my-6">If you end up falling in love with your foster animal and decide to adopt permanently – great! Please let CARA know and we will happily take the foster animal off our adoption list after going through the adoption formalities with you.</p>
            </div>

            <div className="outline-dashed p-4 mb-10">
                <p className="font-semibold text-4xl text-center">CARA Fostering Policy</p>
                    <p className="my-6 text-start">Please read our fostering policies carefully, we want to ensure our rescued animals go to a loving and safe environment.</p>
                    <ol className='list-decimal ml-10'>
                        <li className='text-justify break-words'>CATS: INDOOR ONLY – fostered cats must be kept indoors with a litter tray. Houses/condos must be fitted with fly screens to prevent the cat going outside or falling out the window. In specific cases, cats may be approved to go to an Indoor/outdoor home, please consult with CARA beforehand.</li>
                        <li className='text-justify break-words'>The animal must be provided with fresh water at all times and good quality food 2x daily. Please try to stick to one type of cat / dog food to keep your foster pet healthy.</li>
                        <li className='text-justify break-words'>Fosters will be financially responsible for providing basic necessities such as food, toys, grooming, litter etc.</li>
                        <li className='text-justify break-words'>Veterinary treatment and medicine must be provided when necessary for the continual health and well-being of the animal. If the foster is not able to shoulder the medical expenses CARA will raise money from donations. All major medical treatment must be discussed with your CARA contact person beforehand.</li>
                        <li className='text-justify break-words'>Dogs must NOT be tied up on tight leashes and must NOT be kept in cages. Dogs can live outdoors within a fenced secure area providing there is adequate shelter.</li>
                        <li className='text-justify break-words'>Dogs must not roam the street; they should be walked 2x daily in a responsible manner.</li>
                        <li className='text-justify break-words'>Cats must not be de – clawed for any reason, dogs must not be debarked.</li>
                        <li className='text-justify break-words'>Our animals may or may not be vaccinated before going to foster homes, depending on their health condition. Before receiving your foster, please make sure you are briefed by CARA on the animal’s medical record, and whether he or she will need to be vaccinated, de-wormed or spay/neutered, then decide on a schedule.</li>
                        <li className='text-justify break-words'>If for whatever reason you cannot keep the fostered animal, you must notify CARA and return the animal to CARA with as much advance notice as possible.</li>
                        <li className='text-justify break-words'>The fostering family agrees to give CARA visiting rights to ensure the terms of the fostering agreement are being followed. Failure to follow the agreement will result in the animal being reclaimed by CARA.</li>
                        <li className='text-justify break-words'>A dog has to be socialized and trained by its foster to prepare it sufficiently for adoption – better trained dogs will find it easier to find a forever home. If the foster is not able to train an alternative solution should be discussed with CARA.</li>
                        <li className='text-justify break-words'>The foster must not adopt out the cat or dog without final approval by CARA. If a foster family thinks they have found a qualified candidate to adopt their foster cat or dog, they must allow CARA to interview and review their adoption application before handing the pet over.</li>
                        <li className='text-justify break-words'>In case the foster needs to go out of town he / she shall ensure the animal is being cared for in their own home or boarded at a specialized, CARA approved, establishment. Cats may be boarded at the CARA clinic for a limited period of time subject to prior arrangements.</li>
                    </ol>
            </div>

            <div className="outline-dashed p-4 mb-10">
                <p className="font-semibold text-5xl">Ready to Commit to Fostering?</p>
                    <p className="my-6">Fill-out the required information and submit. We will get back to you shortly.</p>
                    <p className="my-6">If you have questions, concerns or your foster animal needs medical attention please contact us immediately at secretary@caraphil.org. Or drop us a line at (Tel) +632 5323340, or (Mobile) 0919 579 0047.</p>
            </div>

            <div className="outline-dashed p-4 mb-10">
                <p className="font-semibold text-5xl">Notes on the Foster Application Form</p>
                    <p className="my-6">Please answer the questions carefully; some of them are designed to help you reflect on your decision to foster a pet.</p>
                    <p className="my-6">We try to ensure the best possible match between the foster animal and its foster home.</p>
                    <p className="my-6">Fostering is usually a three months to one year commitment, depending on how fast an adopter can be found.</p>
                    <p className="my-6">We DO NOT allow children to foster. An adult must sign the foster contract. Please do not have your children call or email.</p>
                    <p className="my-6">Applicants under 18 years of age must have a parent or legal guardian apply and take responsibility on their behalf.</p>
            </div>

            <div className="outline-dashed p-4 mb-10">
                <p className="font-semibold text-5xl">Ready to Foster?</p>
                <p className="text-lg mt-6">If you're ready to foster, click on the botton below to apply on our foster application form </p>
                <div class="flex justify-center m-10">
                    <Link to="/foster-pdf">
                    <button class=" bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-2 px-8 rounded-lg mx-auto">Foster a Pet</button>
                    </Link> 
                </div>

            </div>

        </section>

        </div>
  )
}

export default Foster;