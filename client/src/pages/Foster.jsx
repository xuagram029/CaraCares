import { Link } from "react-router-dom";


const Foster = () => {
  return (

        <div className='flex flex-col sm:flex-col lg:flex-row bg-slate-400 items-center sm:items-center lg:items-start'>
        <section className="p-5 m-10 bg-primary flex flex-col justify-between w-4/5 sm:w-4/5 lg:w-2/3">
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
        </section>

        <section className="p-5 m-10 bg-primary flex flex-col w-4/5 sm:w-4/5 lg:w-2/3">
            <form className="outline-dashed p-4 relative">
                <label className="font-normal text-2xl ">Foster Contract</label>
                <label className="block font-medium">Name of pet/s you are interested in fostering: *</label>
                <textarea name="pet_name" id="" class="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500" rows="2"></textarea>
                <label className="text-sm block font-normal">If more than one, please separate by a comma.</label>

                <label className="block font-medium mt-3">Your Name *</label>
                <input class="px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:bg-white focus:border-gray-100" type="text" placeholder="First Name"/>
                <input class="px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:bg-white focus:border-gray-100" type="text" placeholder="Last Name"/>

                <label className="block font-medium mt-3">Age *</label>
                <input class="px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:bg-white focus:border-gray-100" type="number"/>

                <label className="block font-medium mt-3">Nationality *</label>
                <input class="px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:bg-white focus:border-gray-100" type="text" />

                <label className="block font-medium mt-3">Occupation *</label>
                <input class="px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:bg-white focus:border-gray-100" type="text" />

                <label className="block font-medium mt-3">Email *</label>
                <input class="px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:bg-white focus:border-gray-100" type="text" />

                <label className="block font-medium mt-3">Phone Number *</label>
                <input class="px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:bg-white focus:border-gray-100" type="text" />

                <label className="block font-medium mt-3">Address *</label>
                <textarea name="pet_name" id="" class="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500" rows="2"></textarea>

                <label className="block font-medium mt-3">What type of home do you live in? *</label>
                <select id="home_type" name="home_type" class=" px-4 py-2 pr-8 leading-tight text-gray-700  border border-gray-300 rounded-md focus:outline-none">
                    <option value="">I own my house</option>
                    <option value="">I'm renting my house</option>
                    <option value="">I own my condo</option>
                    <option value="">I'm renting my house</option>
                </select>

                <label className="block font-medium mt-3">If not a home owner, do you have permission to keep pets? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No


                <label className="block font-medium mt-3">How long have you lived here? *</label>
                <input class="px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:bg-white focus:border-gray-100" type="text" />

                <label className="block font-medium mt-3">Household Members *</label>
                <textarea name="pet_name" id="" class="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500" rows="2" placeholder="Sample format: Ana / Mother / 35, Tony / Father / 37, "></textarea>


                <label className="text-sm block font-normal">List all members (excluding pets) of the household including children in order of Name / Relationship / Age.</label>

                <label className="block font-medium mt-3">Does any member of your household have any known allergies to animals? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">Do all members of the family support your decision to foster a pet? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">If you have children, have they been taught how to behave with animals? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">Do we have permission to visit your home? (Alternative arrangements can be made.) *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">Do you have experience in caring for the type of animal you will be fostering *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">Do you currently have any pets? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">If yes, please give us some details about your pets (in the format shown below): *</label>
                <textarea name="pet_name" id="" class="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500" rows="2" placeholder="Cat / Puspin / Rescue / 7yrs / Male / Neutered "></textarea>
                <label className="text-sm block font-normal">Type / Breed / Rescue / Age / Male / Female / Spayed or Neutered (Separate each entry with a comma.)</label>

                <label className="block font-medium mt-3">Name of your veterinarian and contact number: *</label>
                <textarea name="pet_name" id="" class="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500" rows="2"></textarea>

                <label className="block font-medium mt-3">Do you anticipate any problems of adjustment with the new pet? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">If yes, please give us some details about your pets (in the format shown below): *</label>
                <textarea name="pet_name" id="" class="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500" rows="2"></textarea>

                <label className="block font-medium mt-3">Please list down the pets you've had before (in the lat 10 years, aside from your current pets). *</label>
                <textarea name="pet_name" id="" class="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500" rows="2" placeholder="Cat / Puspin / Rescue / 7yrs / Male / Neutered "></textarea>
                <label className="text-sm block font-normal">Type / Breed / Rescue / Age / Male / Female / Spayed or Neutered (Separate each entry with a comma.)</label>

                <label className="block font-medium mt-3">Have you ever had a pet euthanized? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">Have you ever surrendered a pet to a shelter or clinic? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">Have you ever lost a pet? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">Do you anticipate moving soon? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">If you were to ever move, would you take your pets with you? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">Please state your reason/s for wanting to foster a pet. *</label>
                <textarea name="pet_name" id="" class="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500" rows="2"></textarea>

                <label className="block font-medium mt-3">Who will have primarily responsibility for the pet's care? *</label>
                <input class="px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:bg-white focus:border-gray-100" type="text" />

                <label className="block font-medium mt-3">Who will have financial responsibility of the pet/s? *</label>
                <input class="px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:bg-white focus:border-gray-100" type="text" />

                <label className="block font-medium mt-3">Do you have the financial means and desire to cover your foster animal's medical expense? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">If yes, would you like to provide for: *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-3" type="radio"/>Basic (check-ups, vaccinations, de-worming)
                <br />
                <input class="form-radio h-4 w-4 text-blue-600 m-3" type="radio" /> All (Basic + extensive medical procedures such as surgery, chemo, etc.)

                <label className="block font-medium mt-3">If you have any preferences for size, gender, color, etc., please tells us below: *</label>
                <textarea name="pet_name" id="" class="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500" rows="2" placeholder="Cat / Puspin / Rescue / 7yrs / Male / Neutered "></textarea>

                <label className="block font-medium mt-3">Do you have any particular behavior or characteristic that you prefer your pet/s to have? *</label>
                <textarea name="pet_name" id="" class="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500" rows="2" placeholder="Cat / Puspin / Rescue / 7yrs / Male / Neutered "></textarea>

                <label className="block font-medium mt-3">What kind of energy level do you prefer your pet to have? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">Please describe your household. *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">Can you ensure that your home is sufficiently secure to keep pets indoors? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">How much time per day would be available to interact with your pet/s? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">Will your foster pet/s be alone at home? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">If yes, for how long? *</label>
                <input class="px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:bg-white focus:border-gray-100" type="text" />
                
                <label className="block font-medium mt-3">Who will care for your pet when you go out of town, or in case of an emergency? *</label>
                <input class="px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:bg-white focus:border-gray-100" type="text" />

                <label className="block font-medium mt-3">What kind of diet/food will you provide for your pet. (Please indicate brand.) *</label>
                <input class="px-4 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:bg-white focus:border-gray-100" type="text" />

                <label className="block font-medium mt-3">May we contact you for future CARA events, news, etc.? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <label className="block font-medium mt-3">How did you learn about CARA? *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-2" type="radio" /> Facebook
                <input class="form-radio h-4 w-4 text-blue-600 m-2" type="radio" /> Instagram
                <input class="form-radio h-4 w-4 text-blue-600 m-2" type="radio" /> Twitter
                <input class="form-radio h-4 w-4 text-blue-600 m-2" type="radio" /> Event
                <input class="form-radio h-4 w-4 text-blue-600 m-2" type="radio" /> Online search (e.g., Google)
                <input class="form-radio h-4 w-4 text-blue-600 m-2" type="radio" /> Magazine
                <input class="form-radio h-4 w-4 text-blue-600 m-2" type="radio" /> Friend
                <input class="form-radio h-4 w-4 text-blue-600 m-2" type="radio" /> Other


                <label className="block font-medium mt-3">I have read the Foster Policies and agree to the terms and conditions. *</label>
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> Yes
                <input class="form-radio h-4 w-4 text-blue-600 m-4" type="radio" /> No

                <div class="flex justify-center m-10">
                    <Link to="/foster-pdf">
                    <button class=" bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-2 px-8 rounded-lg mx-auto">Submit</button>
                    </Link> 
                </div>
            </form>
        </section>
        </div>
  )
}

export default Foster;