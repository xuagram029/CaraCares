import {useState, useContext, useEffect} from 'react'
import axios from '../api/axios'
import { useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import useRedirectUser from '../custom hooks/useRedirectUser'

const UserLogin = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    pass: undefined
})
const {user, loading, error, dispatch } = useContext(AuthContext)
useRedirectUser(user)
const navigate = useNavigate()

const handleChange = (e) => {
    setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
}

const handleClick = async (e) => {
    e.preventDefault()
    dispatch({type: "LOGIN_START"})
    try {
        const res = await axios.post("http://localhost:8000/user/login", credentials)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        navigate('/')
    } catch (err) {
        dispatch({type: "LOGIN_FAILURE", payload: err.response.data})
    }
}
  return (
  <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">Welcome Back User!</h1>
  
        <p class="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
          eaque error neque ipsa culpa autem, at itaque nostrum!
        </p>
      </div>
  
      <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label for="username" class="sr-only">Username</label>
  
          <div class="relative">
            <input
              type="text"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter username"
              id="username"
              onChange={handleChange}
            />
          </div>
        </div>
  
        <div>
          <label for="password" class="sr-only">Password</label>
  
          <div class="relative">
            <input
              type="password"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
              id='pass'
              onChange={handleChange}
            />
          </div>
          {error && <span className="text-red-500">{error}</span>}

        </div>
  
        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            No account?
            <Link class="underline" to='/user-signup'>Sign up</Link>
          </p>
  
          <button
            disabled={loading}
            onClick={handleClick}
            class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>

        </div>
      </form>
    </div>
  
    <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Welcome"
        src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </section>
  )
}

export default UserLogin