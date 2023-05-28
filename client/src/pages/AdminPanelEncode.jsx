import {useContext} from 'react'
import Max from '../assets/ui/CARA_PICTURES/dogs/MAX.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext"
import useRedirectAdmin from '../custom hooks/useRedirectAdmin'


const AdminPanelEncode = () => {
  const [data,setData] = useState([])
  const {user, loading, error, dispatch } = useContext(AuthContext)
  useRedirectAdmin(user)
  
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [color, setColor] = useState('')
  const [age, setAge] = useState('')
  const [type, setType] = useState([])
  const [shelternumber, setShelterNumber] = useState('')
  const [sheltername, setShelterName] = useState('')
  const [shelteremail, setShelterEmail] = useState('')
  const [shelteraddress, setShelterAddress] = useState('')


  const handleSubmit = async(e) =>{
    await axios.post('http://localhost:8000/admin-encode', {name, gender, color, age, type, shelternumber, sheltername, shelteremail, shelteraddress})
    window.location.reload()
    navigate('/admin-panel-encode')
}

  useEffect(() =>{
    const getData = async () =>{
        try {
            const res = await axios.get('http://localhost:8000/admin-encode')
            setData(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    getData()
}, [])


  return (
    <div className='m-10 p-5 h-max sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto'>
      <div className="space-x-6 font-bold font-pop text-base cursor-pointer flex justify-between items-center">
        <h1 className="text-4xl">ADD PET INFO</h1>
      </div> 
      
        <div className=' p-6 flex items-center mt-12'>
            <div className="w-[30%]">
                <img src={Max} alt="Dogs" className='rounded-lg ' />
            </div>
            <div className=' p-12'>
            <FontAwesomeIcon icon={faImage} className='hover:animate-bounce' size='2xl' />
            </div>
        </div>

      <div class="flex flex-col sm:flex-row justify-center m-6">
        <div class="bg-gray-100 rounded-lg shadow-lg p-6 mb-4 sm:mb-0 sm:mr-4 sm:w-1/2">
          <h2 class="text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left">Pet Details</h2>
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">Animal Name:</label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"
            value={name} onChange={(e) => {setName (e.target.value)}}/>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="email">Gender:</label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" type="text"
            value={gender} onChange={(e) => {setGender (e.target.value)}}/>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="email">Color:</label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="color" type="text"
            value={color} onChange={(e) => {setColor (e.target.value)}}/>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="email">Age:</label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text"
            value={age} onChange={(e) => {setAge (e.target.value)}}/>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="email">Type:</label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" type="text"
            value={type} onChange={(e) => {setType (e.target.value)}}/>
          </div>

        </form>
      </div>

      <div class="bg-gray-100 rounded-lg shadow-lg p-6 sm:w-1/2 h-fit">
        <h2 class="text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left">Location Details</h2>
      <form>
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="email">Shelter Number:</label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shelternum" type="text"
            value={shelternumber} onChange={(e) => {setShelterNumber (e.target.value)}}/>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">Shelter Name:</label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"
            value={sheltername} onChange={(e) => {setShelterName (e.target.value)}}/>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="email">Shelter Email:</label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" type="text"
            value={shelteremail} onChange={(e) => {setShelterEmail (e.target.value)}}/>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="email">Shelter Address:</label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="color" type="text"
            value={shelteraddress} onChange={(e) => {setShelterAddress (e.target.value)}}/>
          </div>
      </form>
      </div>
      </div>
      <div class="flex justify-center">
        <button class=" bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-[13px] px-8 mt-4 rounded-lg mx-auto" onClick={handleSubmit}>Submit</button>
      </div>

    </div>
  )
}

export default AdminPanelEncode