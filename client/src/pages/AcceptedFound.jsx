import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import  DataTable  from 'react-data-table-component'
import { RiUserSearchLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import Sidebar from '../components/Sidebar';
import { SidebarContext } from '../context/SbContext';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext"


const AcceptedFound = () => {
    const { open } = useContext(SidebarContext)
    const [availablePets, setAvailablePets] = useState([]) 
    const [filteredAvailablePets, setFilteredAvailablePets] = useState([]) 
    const [ imgModal, setImgModal] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState('');

    const {user, loading, error, dispatch } = useContext(AuthContext)
    useEffect(() => {
      if(!user){
        navigate('/admin-login')
      }else if(user?.resp[0]?.role === 'user'){
        navigate('/')
     }
    }, [user])
    
    const navigate = useNavigate()

    useEffect(() => {
      const getPending = async() => {
        try {
          const res = await axios.get('http://localhost:8000/foundpet/accepted')
          setAvailablePets(res.data)
          setFilteredAvailablePets(res.data)
          console.log(res.data)
        } catch (error) {
          console.log(error);
        }
      }
      getPending()
    }, [])
    // console.log(availablePets[0]);
    const updateStatus = async(id) => {
        try {
          await axios.put(`http://localhost:8000/foundpet/pending/${id}`)
          window.location.reload()
        } catch (error) {
          console.log(error);
        }
    }

    const deleteReport = async(id) => {
      try {
        await axios.delete(`http://localhost:8000/foundpet/pending/${id}`)
        window.location.reload()
      } catch (error) {
        console.log(error);
      }
    }

    const columns = [
      {
        name: 'Name',
        selector: row => row.foundername,
        sortable: true
      },
      {
        name: 'type',
        selector: row => row.typeofpet,
        sortable: true
      },
      {
        name: 'Gender',
        selector: row => row.gender,
        sortable: true
      },
      {
        name: 'Color',
        selector: row => row.color,
        sortable: true
      },
      {
        name: 'Found Date',
        selector: row => row.found,
        sortable: true
      },
      {
        name: 'Photo',
        cell: (row) => (
          <button 
          className="bg-[#00DFA2] hover:bg-[#36AE7C] text-white font-bold py-2 px-4 rounded"
          onClick={() => {
              setSelectedPhoto(row.photo)
              setImgModal(true)
            }}>
            View Photo
          </button>
        ),
      },
      {
        name: "Delete",
        cell: row => (
          <button onClick={() => deleteReport(row.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            X
          </button>
        ),
        button: true
      },
    ]
  
    const handleFilter = (e) => {
      const newData = filteredAvailablePets.filter(row =>
        row.foundername.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.typeofpet.toLowerCase().includes(e.target.value.toLowerCase())
      );    
      setAvailablePets(newData)
    }
    

  return (
    <div className="flex flex-col md:flex-row">
        <Sidebar /> 
        <div className={`flex flex-col w-full md:w-3/4 lg:w-screen ${imgModal && "opacity-50"}`}>
            <div className="flex ml-8 mt-5 justify-between items-center space-x-6 font-bold font-pop text-base">
            <h1 className="text-4xl">PENDING FOUND REPORTS</h1>
            </div>
            <div className={` mt-8 ml-8 max-w-full border border-black ${open ? "w-[75vw] transition-width duration-500" : "w-[85vw] transition-width duration-500 ease-linear"}`}>
            <div className='p-[50px 10%] mt-2 ml-5 flex'>
                <RiUserSearchLine className='text-2xl mt-1'/>
                <input onChange={handleFilter} type="text" placeholder='search user' className='text-center border border-black rounded-md'/>
            </div>
            <img src={`http://localhost:8000/uploads/${availablePets.photo}`} alt="" />
            <DataTable
                columns={columns}
                data={availablePets}
                pagination
            />
            </div>
        </div>  
        {imgModal &&   
        <div className='inset-0 w-full h-screen bg-[rgba(49,49,49,0.8)] z-50 fixed flex justify-center items-center'>
          <img 
            className='w-[30rem] h-[30rem] absolute'
            src={`http://localhost:8000/uploads/${selectedPhoto}`} alt="Full Photo" />   
            <button className='bg-rose-400 text-2xl text-white rounded-sm absolute top-0 right-0 mt-8 mr-8' onClick={() => {setImgModal(!imgModal)}}>
              <AiOutlineClose />
            </button>
          </div>
        }
    </div>
  )
}

export default AcceptedFound