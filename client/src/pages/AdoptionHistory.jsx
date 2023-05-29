import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import  DataTable  from 'react-data-table-component'
import { RiUserSearchLine } from 'react-icons/ri';
import Sidebar from '../components/Sidebar';
import { SidebarContext } from '../context/SbContext';

const AdoptionHistory = () => {
  const { open } = useContext(SidebarContext)
  const [adoptedPets, setAdoptedPets] = useState([]) 
  const [filteredAdoptedPets, setFilteredAdoptedPets] = useState([]) 

  useEffect(() => {
    const getAdopted = async() => {
      try {
        const res = await axios.get('http://localhost:8000/admin-encode/adopted')
        setAdoptedPets(res.data)
        setFilteredAdoptedPets(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getAdopted()
  }, [])

  const columns = [
    {
      name: 'Pet Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'type',
      selector: row => row.type,
      sortable: true
    },
    {
      name: 'Gender',
      selector: row => row.gender,
      sortable: true
    },
    {
      name: 'Age',
      selector: row => row.age,
      sortable: true
    },
    {
      name: 'Breed',
      selector: row => row.breed,
      sortable: true
    },
    {
      name: 'Date Adopted',
      selector: row => new Date(row.adopted_date).toLocaleString(),
      sortable: true
    },
  ]

  const handleFilter = (e) => {
    const newData = filteredAdoptedPets.filter(row =>
      row.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      row.type.toLowerCase().includes(e.target.value.toLowerCase())
    );    
    setAdoptedPets(newData)
  }

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex flex-col w-full md:w-3/4 lg:w-screen">
        <div className="flex ml-8 mt-5 justify-between items-center space-x-6 font-bold font-pop text-base">
          <h1 className="text-4xl">ADOPTION HISTORY</h1>
        </div>
          <div className={` mt-8 ml-8 max-w-full border border-black ${open ? "w-[75vw] transition-width duration-500" : "w-[85vw] transition-width duration-500 ease-linear"}`}>
            <div className='p-[50px 10%] mt-2 ml-5 flex'>
              <RiUserSearchLine className='text-2xl mt-1'/>
              <input onChange={handleFilter} type="text" placeholder='search user' className='text-center border border-black rounded-md'/>
            </div>
            <DataTable
              columns={columns}
              data={adoptedPets}
              pagination
            />
          </div>
        </div>  
    </div>
  )
}

export default AdoptionHistory