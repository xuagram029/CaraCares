import React from 'react'

const Sponsor = () => {
  return (
    <div className='bg-slate-400 m-10 p-5 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto'>
        <p className='mx-20 my-6 font-medium text-lg'>CAN’T ADOPT BUT WANT TO HELP?</p>
        <p className='mx-20 my-4'>We know the feeling – you want to take them all home but most of us who love animals already have pets. BUT you can still help, join our sponsor a pet program.</p>
        <ul className='list-disc mx-32 my-4'>
            <li>Sponsoring a cat costs about $15 per month or $170 per year</li>
            <li>Sponsoring a dog costs about $25 per month or $285 per year</li>
        </ul>
        <p className='mx-20'>Don’t forget to leave a note at the payment gateway to let us know who the donation is intended for! Or send us an email with the donation info and the name of the pet at donate@caraphil.org.</p>

        <h1 className='mx-20 my-6 text-3xl font-semibold'>How Sponsorship Helps Pets</h1>
        <p className='mx-20 my-4'>Your sponsorship helps towards food, vaccinations, medical care, spaying/neutering and toys for your sponsored friend and allows us to help even more animals.</p>
        <p className='mx-20 my-4'>A lot of the animals in our sponsorship program are long term residents who will probably never be adopted – often due to medical issues, problems socializing with people, or they just simply haven’t found that special owner yet. Older animals have such a hard time finding homes.</p>
        <p className='mx-20 my-4'>In exchange for sponsoring one of our furry friends, we will:</p>
        <ul className='list-disc mx-32 my-4'>
            <li>Organize a visit to your sponsored pet; dependent on both of your locations.</li>
            <li>Email you regular updates on your sponsor pet’s progress.</li>
            <li>Publish your name on the sponsorship list that we regularly release on our blog and social media channels. (Do let us know if you wish to remain anonymous.)</li>
        </ul>
        <p className='mx-20'>Don’t forget to leave a note at the payment gateway to let us know who the donation is intended for! Or send us an email with the donation info and the name of the pet at donate@caraphil.org.</p>
        <p className='mx-20 my-6 text-3xl font-semibold text-center'>Sponsor a pet by donating to any of these channels</p>

        <div className='bg-slate-200 p-10 flex flex-col justify-center items-center gap-5'>
            <button className='border border-black p-3 max-w-lg'>View the pets you can help as a sponsor</button>
            <div className='flex gap-5 lg:flex-row md:flex-row sm:flex-wrap sm:justify-center'>
                <button className='border border-black p-3 w-60 h-12'>Donate via PayPal</button>
                <button className='border border-black p-3 w-60 h-12'>Donate via Simply Giving</button>
                <button className='border border-black p-3 w-60 h-12'>Donate via Pet Warehouse</button>
            </div>
        </div>
    </div>
  )
}

export default Sponsor