import React from 'react'
import Max from '../assets/ui/CARA_PICTURES/dogs/MAX.jpg'


const AdminVisitationReport = () => {
  return (
    <div className='m-10 p-5 h-max sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto'>

      <div className="space-x-6 font-bold font-pop text-base cursor-pointer flex justify-between items-center">
        <h1 className="text-4xl">PET VISITATION</h1>
        <div className="space-x-6 ">
        <button class=" bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-1 px-4 rounded-lg mx-auto shadow-gray-400 shadow-lg">Edit</button>
        <button class=" bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-1 px-4 rounded-lg mx-auto shadow-gray-400 shadow-lg">Delete</button>
        </div>
      </div> 
      
        <div className=' p-6 flex items-center  mt-12'>
            <div className="w-[55%]">
                <img src={Max} alt="Dogs" className='rounded-lg' />
            </div>
            <div className=' w-1/2 leading-10 mx-auto pl-12'>
                <h1 className='font-bold text-3xl text-center pb-12'>Pet Name</h1>
                <p className='font-semibold pb-2 text-left'>Breed: Unknown</p>
                <p className='font-semibold pb-2 text-left'>Gender: Male</p>
                <p className='font-semibold pb-2 text-left'>Color: Brown</p>
            </div>
        </div>


      <div className="flex flex-col mt-12">
        <div className='overflow-x-auto'>
          <div className='p-1.5 w-full inline-block align-middle'>
            <div className="overflow-hidden border rounded-lg">

              <table className="min-w-full divide-y divide-gray-200">
                <thead className='bg-grey-500'>
                  <tr>
                    <th scope='col' className='px-6 py-3 text-sm font-bold text-grey-500 uppercase text-center'>No.</th>
                    <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Name of Visitor</th>
                    <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Visitation Confirmation</th>
                    <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Date of Visitation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                <tr>
                    <th></th>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Marky</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>asdasdas</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>6/4/2012</td>
                </tr>
                <tr>
                    <th></th>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Marky</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>asdasdas</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>6/4/2012</td>
                </tr>
                <tr>
                    <th></th>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Marky</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>asdasdas</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>6/4/2012</td>
                </tr>
                <tr>
                    <th></th>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Marky</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>asdasdas</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>6/4/2012</td>
                </tr>
                </tbody>
              </table>


            </div>
          </div>
        </div>
      </div>




</div>
  )
}

export default AdminVisitationReport