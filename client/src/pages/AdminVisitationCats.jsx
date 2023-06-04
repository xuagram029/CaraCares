import React, { useEffect, useState } from 'react'
import Pet1 from '../assets/ui/CARA_PICTURES/lost1.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function AdminVisitationCats() {
  const [selectedOption, setSelectedOption] = useState('')
  const [petType, setPetType] = useState(null)

const handleOptionChange = async (e) => {
    setSelectedOption(e.target.value);
    const res = await axios.get(`http://localhost:8000/typeofpet/${e.target.value}`)
    setPetType(res.data)
    // console.log(e.target.value)
    console.log(res.data)
  }
  
  // console.log(petType)
  // const [dog, setDog] = useState('')
  // const [cat, setCat] = useState('')
  
  useEffect(() =>{
    const getDog = async() => {
      const res = await axios.get(`http://localhost:8000/typeofpet/adopted-cats`)
      setPetType(res.data)
      console.log(res.data)
    }
    getDog()
  }, [])

  // useEffect(() =>{
  //   const getCat = async() => {
  //     const res = await axios.get(`http://localhost:8000/typeofpet/getcat`)
  //     console.log(res.data)
  //   }
  //   getCat()
  // }, [cat])



  return (
    <div className="flex w-full">
    <Sidebar />
    <div className='m-10 p-5 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto'>

      
      <h1 className='text-center text-3xl font-semibold'>CATS VISITATION</h1>
      <div className='flex flex-row flex-wrap  p-12'>
        
        {petType && petType.map(pet => (
          <div className='border border-black p-6 w-[25%] h-[50%]' key={pet.id}>
          <img src={Pet1} alt="Dogs" className=' mx-auto' />
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
  )
}

export default AdminVisitationCats