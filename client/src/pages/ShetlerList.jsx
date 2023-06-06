import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { RiUserSearchLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import Sidebar from '../components/Sidebar';
import { SidebarContext } from '../context/SbContext';
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'


const ShelterList = () => {
  const { open } = useContext(SidebarContext)
  const [shelter, setShelter] = useState([])
  const [filteredShelter, setFilteredShelter] = useState([])
  const [imgModal, setImgModal] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState('');
  const { user, loading, error, dispatch } = useContext(AuthContext)
  const role = user?.resp[0]?.role


  useEffect(() => {
    if (!user) {
      navigate('/admin-login')
    } else if (user?.resp[0]?.role === 'user') {
      navigate('/')
    }
  }, [user])

  const navigate = useNavigate()

  useEffect(() => {
    const getAvailable = async () => {
      try {
        const res = await axios.get('http://localhost:8000/shelter')
        setShelter(res.data)
        setFilteredShelter(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getAvailable()
  }, [])

  const deleteShelter = async(id) => {
    try {
        const res = await axios.delete(`http://localhost:8000/shelter/${id}`)
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
  }

  const columns = [
    {
      name: 'Pet ID',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Shelter Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Shelter Email',
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'Shelter Number',
      selector: row => row.number,
      sortable: true
    },
    {
      name: 'Address',
      selector: row => row.address,
      sortable: true
    },
    role === 'admin' && {
    name: "Delete",
    cell: row => (
        <button onClick={() => deleteShelter(row.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        X
        </button>
    ),
    button: true
    },
  ]

  const handleFilter = (e) => {
    const newData = filteredShelter.filter(row =>
      row.name.toLowerCase().includes(e.target.value.toLowerCase()) 
    );
    setShelter(newData)
  }

  useEffect(() => {
    if (imgModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [imgModal]);

  return (
    <div className="flex flex-col md:flex-row relative">
      <Sidebar />
      <div className={`flex flex-col w-full ${imgModal && "opacity-50"}`}>
        <div className="flex ml-8 mt-5 justify-between items-center space-x-6 font-bold font-pop text-base">
          <h1 className="text-4xl">SHELTER LIST</h1>
        </div>
        <div className={` mt-8 ml-8 max-w-full border border-black ${open ? "w-[75vw] transition-width duration-500" : "w-[85vw] transition-width duration-500 ease-linear"}`}>
          <div className='p-[50px 10%] mt-2 ml-5 flex'>
            <RiUserSearchLine className='text-2xl mt-1' />
            <input onChange={handleFilter} type="text" placeholder='search user' className='text-center border border-black rounded-md' />
          </div>
          <img src={`http://localhost:8000/uploads/${shelter.photo}`} alt="" />
          <DataTable
            columns={columns}
            data={shelter}
            pagination
          />
        </div>
      </div>
      {imgModal &&
        <div className='inset-0 w-full h-screen bg-[rgba(49,49,49,0.8)] z-50 fixed flex justify-center items-center'>
          <div className='relative'>
            <img
              className='w-96 h-96'
              src={`http://localhost:8000/uploads/${selectedPhoto}`} alt="Full Photo" />
          </div>
            <button className='bg-rose-400 text-2xl text-white rounded-sm absolute top-0 right-0 mt-8 mr-8' onClick={() => { setImgModal(!imgModal) }}>
              <AiOutlineClose />
            </button>
        </div>
      }
    </div>
  )
}

export default ShelterList
