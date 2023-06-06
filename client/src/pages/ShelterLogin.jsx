import {useState, useContext, useEffect} from 'react'
import axios from '../api/axios'
import { useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
import caralogo from '../assets/ui/CARA_PICTURES/logos/cara_logo.png'
// import useRedirectUser from '../custom hooks/useRedirectUser'

const ShelterLogin = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    pass: undefined
})
const {user, loading, error, dispatch } = useContext(AuthContext)
// useRedirectUser(user)
const navigate = useNavigate()
useEffect(() => {
  if (user) {
    navigate('/');
  }
}, [user, navigate]);



const handleChange = (e) => {
    setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
}

const handleClick = async (e) => {
    e.preventDefault()
    dispatch({type: "LOGIN_START"})
    try {
        const res = await axios.post("http://localhost:8000/shelter/login", credentials)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        navigate('/')
    } catch (err) {
        dispatch({type: "LOGIN_FAILURE", payload: err.response.data})
    }
}
  return (
  <section class="flex flex-col md:flex-col lg:flex-row w-3/4 h-[500px] mx-auto my-24 justify-center ">
    <div class=" bg-white rounded-l-2xl p-12 shadow-3xl">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl text-green-500">Welcome Back Shelter User!</h1>
        <p class="mt-4 text-gray-900">
        Get ready to make a difference in the lives of our furry friends. 
        Sign in using your username and password to access a range of features tailored to animal lovers like you.
        </p>
      </div>

      <div className='border-2 w-20 border-green-500 m-6 mx-auto'></div>

      <form action="" class="mx-auto mt-8 max-w-md space-y-8">
        <div className=''>
          <label for="username" class="sr-only text-white">Username</label>
  
          <div class=" w-5/6 flex flex-row bg-gray-200 items-center rounded-lg px-4 mx-auto">
            <BiUserCircle className='text-3xl text-gray-500 '/>
            <input
              type="text"
              class="w-full bg-gray-200 border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none rounded-lg"
              placeholder="Enter username"
              id="username"
              onChange={handleChange}
            />
          </div>
        </div>
  
        <div className=''>
          <label for="password" class="sr-only">Password</label>
  
          <div class="w-5/6 flex flex-row bg-gray-200 items-center rounded-lg px-4 mx-auto">
            <RiLockPasswordFill className='text-3xl text-gray-500 '/>
            <input
              type="password"
              class="w-full bg-gray-200 border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none rounded-lg"
              placeholder="Enter password"
              id='pass'
              onChange={handleChange}
            />
          </div>
          {error && <span className="text-red-500">{error}</span>}
        </div>

        <div class="flex justify-center m-10">
          <button 
            disabled={loading}
            onClick={handleClick}
            class="inline-block bg-white px-8 py-3 text-sm font-medium rounded-xl mx-auto border-4 border-green-500 hover:bg-green-300 ">Sign in</button>
        </div>

      </form>
    </div>
  
    <div class=" bg-green-600 w-1/4 rounded-r-lg shadow-xl flex items-center justify-center">
        <div class="">
          <img src={caralogo} alt="CARA Logo"
            className='w-4/6 mx-auto '
          />
          <p class="text-white text-center text-3xl font-semibold">Hello, Friend!</p>
          <p className='text-white text-center text-sm p-6'>Fill up personal information and start your journey with us.</p>

          <div className='border-2 w-12 border-white m-2 mx-auto'></div>

          
          <div class="flex justify-center m-10">
          <button 
            class="inline-block bg-green-600 px-8 py-2 text-sm font-medium rounded-xl mx-auto border-4 border-white hover:bg-white hover:text-green-600 text-white"><Link to='/shelter-signup'>Sign up</Link></button>
        </div>
        </div>
    </div>

  </section>
  )
}

export default ShelterLogin