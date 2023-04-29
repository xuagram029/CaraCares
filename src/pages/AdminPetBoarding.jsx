import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const AdminPetBoarding = () => {
  return (
    <div className='m-10 p-5 h-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto'>

      <div className="space-x-6 font-bold font-pop text-base cursor-pointer flex justify-between items-center">
        <h1 className="text-4xl">PET BOARDING</h1>
        <div className="space-x-6 ">
        <button class=" bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-1 px-4 rounded-lg mx-auto shadow-gray-400 shadow-lg">Edit</button>
        <button class=" bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-1 px-4 rounded-lg mx-auto shadow-gray-400 shadow-lg">Delete</button>
        </div>
      </div> 

      <form className=' mt-12 w-1/3 flex '>
        <input name="SearchBar" class="block p-4 text-gray-700 bg-gray-100 rounded-l-lg border-gray-300 focus:outline-none focus:bg-white focus:border-gray-500 shadow-md shadow-slate-900" placeholder='Search...'></input>
        <button type="submit" class="p-2 w-12 text-black bg-gray-100 rounded-r-lg  hover:text-white hover:bg-neutral-900 focus:outline-none shadow-md shadow-slate-900"> <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
      </form>

      <div className="flex flex-col mt-12">
        <div className='overflow-x-auto'>
          <div className='p-1.5 w-full inline-block align-middle'>
            <div className="overflow-hidden border rounded-lg">

              <table className="min-w-full divide-y divide-gray-200">
                <thead className='bg-grey-500'>
                  <tr>
                    <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Last Name</th>
                    <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Pet Name</th>
                    <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Type of Pet</th>
                    <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Phone #</th>
                    <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Email</th>
                    <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Boarding Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Ydnar</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>whity</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Dog</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>092222tutunogtunog</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>asd@gmail.com	</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>04/06/2023 - 04/12/2023</td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Pallesco</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>whity</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Dog</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>092222tutunogtunog</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>asd@gmail.com	</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>04/06/2023 - 04/12/2023</td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Pallesco</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>whity</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Dog</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>092222tutunogtunog</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>asd@gmail.com	</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>04/06/2023 - 04/12/2023</td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Pallesco</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>whity</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Dog</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>092222tutunogtunog</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>asd@gmail.com	</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>04/06/2023 - 04/12/2023</td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Pallesco</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>whity</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Dog</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>092222tutunogtunog</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>asd@gmail.com	</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>04/06/2023 - 04/12/2023</td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Pallesco</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>whity</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Dog</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>092222tutunogtunog</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>asd@gmail.com	</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>04/06/2023 - 04/12/2023</td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Pallesco</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>whity</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>Dog</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>092222tutunogtunog</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>asd@gmail.com	</td>
                    <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>04/06/2023 - 04/12/2023</td>
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

export default AdminPetBoarding