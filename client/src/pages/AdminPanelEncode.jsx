import {useContext} from 'react'
import Max from '../assets/ui/CARA_PICTURES/dogs/MAX.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext"
import Sidebar from '../components/Sidebar'


const AdminPanelEncode = () => {
  const [data,setData] = useState([])
  const {user, loading, error, dispatch } = useContext(AuthContext)
  useEffect(() => {
    if(!user){
      navigate('/admin-login')
    }else if(user?.resp[0]?.role === 'user'){
      navigate('/')
   }
  }, [user])
  
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
  const [photo, setPhoto] = useState('')
  const [vax, setVax] = useState('')

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('gender', gender)
      formData.append('color', color)
      formData.append('age', age)
      formData.append('type', type)
      formData.append('shelternumber', shelternumber)
      formData.append('sheltername', sheltername)
      formData.append('shelteremail', shelteremail)
      formData.append('shelteraddress', shelteraddress)
      formData.append('vax', vax)
      formData.append('image', photo)
      const res = await axios.post('http://localhost:8000/admin-encode', formData)
      console.log(res.data.message);
      // window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }
  // const res = await axios.get('http://localhost:8000/admin-encode')

  const handleFile = (e) => {
    setPhoto(e.target.files[0])
  }

  useEffect(() =>{
    const getData = async () =>{
        try {
            const res = await axios.get('http://localhost:8000/admin-encode')
            setData(res.data)
            // console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    getData()
}, [])


  return (
    <div className="flex relative">
      <Sidebar />
      <div className=' m-10 p-5 h-screen w-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
        <div className="mb-4 font-bold font-pop text-base cursor-pointer flex justify-between items-center">
          <h1 className="text-4xl">ADD PET INFO</h1>
        </div>
      
          {/* <div className='p-3 flex items-center mt-4'>
              <div className="w-[30%]">
                  <img src={Max} alt="Dogs" className='rounded-lg ' />
              </div>
              <div className=' p-12'>
              <FontAwesomeIcon icon={faImage} className='hover:animate-bounce' size='2xl' />
              </div>
          </div> */}
        <div className="flex flex-col sm:flex-row justify-center mr-6">
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-4 sm:mb-0 sm:mr-4 sm:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left">Pet Details</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="name">Animal Name:</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"
              value={name} onChange={(e) => {setName (e.target.value)}}/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" for="email">Gender:</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" type="text"
              value={gender} onChange={(e) => {setGender (e.target.value)}}/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" for="email">Color:</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="color" type="text"
              value={color} onChange={(e) => {setColor (e.target.value)}}/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" for="email">Age:</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text"
              value={age} onChange={(e) => {setAge (e.target.value)}}/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" for="email">Type:</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" type="text"
              value={type} onChange={(e) => {setType (e.target.value)}}/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" for="email">Vaccinated:</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" type="text"
              value={vax} onChange={(e) => {setVax (e.target.value)}}/>
            </div>
          </form>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 sm:w-1/2 h-fit">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left">Location Details</h2>
        <form>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" for="email">Shelter Number:</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shelternum" type="text"
              value={shelternumber} onChange={(e) => {setShelterNumber (e.target.value)}}/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="name">Shelter Name:</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"
              value={sheltername} onChange={(e) => {setShelterName (e.target.value)}}/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" for="email">Shelter Email:</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" type="text"
              value={shelteremail} onChange={(e) => {setShelterEmail (e.target.value)}}/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" for="email">Shelter Address:</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="color" type="text"
              value={shelteraddress} onChange={(e) => {setShelterAddress (e.target.value)}}/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" for="email">Photo of pet</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="color" type="file" onChange={handleFile}/>
            <div className="flex justify-center">
              <button className=" bg-rose-500 hover:bg-neutral-900 hover: text-white font-bold py-[13px] px-8 mt-4 w-full rounded-lg mx-auto" onClick={handleSubmit}>Submit</button>
            </div>
            </div>
        </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanelEncode