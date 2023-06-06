import React, { useEffect, useState } from 'react'
import Max from '../assets/ui/CARA_PICTURES/dogs/MAX.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext"
import {useContext} from 'react'

function AdminVisitationDogs() {
  const [selectedOption, setSelectedOption] = useState('')
  const [petType, setPetType] = useState(null)

  const {user, loading, error, dispatch } = useContext(AuthContext)
  useEffect(() => {
    if(!user){
      navigate('/admin-login')
    }else if(user?.resp[0]?.role === 'user'){
      navigate('/')
   }
  }, [user])
  
  const navigate = useNavigate()

const handleOptionChange = async (e) => {
    setSelectedOption(e.target.value);
    const res = await axios.get(`http://localhost:8000/typeofpet/${e.target.value}`)
    setPetType(res.data)
    console.log(res.data)
  }
  
  useEffect(() =>{
    const getDog = async() => {
      const res = await axios.get(`http://localhost:8000/typeofpet/adopted-dogs`)
      setPetType(res.data)
      console.log(res.data)
    }
    getDog()
  }, [])


  return (
    <div className="flex w-full">
    <Sidebar />
      <div className=' w-screen'>
      <div className='m-10 p-5 max-w-screen-2xl mx-auto'>
      <h1 className='text-center text-3xl font-semibold'>DOGS VISITATION</h1>
        <div className='flex flex-row flex-wrap py-5'>
        {petType && petType.map(pet => (
          <div className='border border-black ml-4 p-6 w-[25%] h-[50%]  ' key={pet.id}>
          <img src={`http://localhost:8000/uploads/${pet.photo}`} alt="Dogs" className='h-72 mx-auto' />
            <div className=''>
              <h1 className='font-bold text-center p-4 text-xl'>{pet.name}</h1>
              <p className='font-semibold pb-2'>Breed: {pet.breed}</p>
              <p className='font-semibold pb-2'>Gender: {pet.gender}</p>
              <p className='font-semibold pb-2'>Color: {pet.color}</p>
            </div>
          <div className="flex justify-center">
            <Link to ={`/admin-visitation-report/${pet.id}`}>
              <button className=" bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-2 px-8 mt-4 rounded-lg mx-auto">View Profile</button>
            </Link>
          </div>
        </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  )
}

export default AdminVisitationDogs