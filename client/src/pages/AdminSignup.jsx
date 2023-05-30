import React, { useContext, useState } from "react"
import axios from "../api/axios"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
// import useRedirectAdmin from "../custom hooks/useRedirectAdmin"

const ShelterSignup = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    // useRedirectAdmin(user)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/admin ', {firstname, lastname, email, address, birthdate, username, pass:password})
        .then(res => {
            console.log(res.data.message)
            navigate('/admin-login')
        })
        .catch(err => {
            setErr(err.response.data.message)
        })
    }

    return (
        <div className="relative flex flex-row justify-center min-h-screen overflow-hidden mx-auto w-3/5 shadow-xl">
            
            
            <div
      className="bg-green-600 bg-cover bg-center w-9/12 mx-auto m-4 rounded-l-2xl relative flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1612260836955-1140700c5bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')`,
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-l-2xl"
        style={{ backdropFilter: 'blur(8px)' }}
      ></div>

      <div className="relative ">
        <p className="text-white text-center text-3xl font-semibold">Welcome!</p>
        <p className="text-white text-center text-sm p-6 leading-6">
            We're delighted that you're interested in joining our team as an administrator.
        </p>

        <div className="border-2 w-12 border-white m-2 mx-auto"></div>

        <div className="flex justify-center items-center m-10">
          <p className="text-white mx-auto">Already have an account?</p>
          <button className="inline-block bg-green-600 px-8 py-2 text-sm font-medium rounded-xl mx-auto border-4 border-white hover:bg-white hover:text-green-600 text-white">
            <Link to="/admin-login">Sign in</Link>
          </button>
        </div>
      </div>
    </div>


            <div className="w-9/5 p-6 mt-4 mb-4 bg-white rounded-r-2xl shadow-xl shadow-rose-600/40  border border-green-500 ">
                <h1 className="text-3xl font-semibold text-center text-green-600 uppercase ">
                   Admin Sign UP
                </h1>
                <form className="mt-6">
                    <div className="flex flex-row mt-6 mb-6 space-x-6 ">
                        <div >
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Firstname
                        </label>
                        <input
                            onChange={(e) => {setFirstname(e.target.value)}}
                            name="firstname"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        </div>
                        <div className="">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Lastname
                        </label>
                        <input
                            onChange={(e) => {setLastname(e.target.value)}}
                            name="lastname"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => {setEmail(e.target.value)}}
                            name="email"
                            type="email"
                            className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="address"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Address
                        </label>
                        <input
                            onChange={(e) => {setAddress(e.target.value)}}
                            name="address"
                            type="text"
                            className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="birthday"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Birthday
                        </label>
                        <input
                            onChange={(e) => {setBirthdate(e.target.value)}}
                            name="birthdate"
                            type="date"
                            className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="address"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            onChange={(e) => {setUsername(e.target.value)}}
                            name="username"
                            type="text"
                            className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            onChange={(e) => {setPassword(e.target.value)}}
                            name="password"
                            type="password"
                            className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    {err && <div className="text-red-600">{err}</div>}
                    <div className="flex justify-center m-6">
                        <button onClick={handleSubmit} className=" bg-green-600 px-8 py-2 text-sm font-medium rounded-xl mx-auto border-4 border-white hover:bg-green-300 hover:text-black text-white">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ShelterSignup