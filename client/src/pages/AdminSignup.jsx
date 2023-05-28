import React, { useContext, useState } from "react"
import axios from "../api/axios"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import useRedirectAdmin from "../custom hooks/useRedirectAdmin"

const UserSignup = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    useRedirectAdmin(user)
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
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-500 underline uppercase decoration-wavy">
                    Sign UP
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
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
                            className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
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
                            className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
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
                    <div className="mb-2">
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
                    <div className="mb-2">
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
                    <div className="mb-2">
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
                    <div className="mb-2">
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
                    <div className="mt-6">
                        <button onClick={handleSubmit} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Submit
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link 
                        to='/admin-login'
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default UserSignup