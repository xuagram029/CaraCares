import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { AuthContext } from '../context/AuthContext'
import axios from '../api/axios'
import { SidebarContext } from '../context/SbContext'

const AdminProfile = () => {
    const { user } = useContext(AuthContext)
    const { open } = useContext(SidebarContext)
    const [email, setEmail] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [address, setAddress] = useState('')
    const [birthdate, setBirthdate] = useState('')

    const userId = user?.resp[0]?.id
    useEffect(() => {
        const getInfo = async () => {
            const res = await axios.get(`http://localhost:8000/admin/${userId}`)
            setEmail(res.data[0].email)
            setFirstname(res.data[0].firstname)
            setLastname(res.data[0].lastname)
            setAddress(res.data[0].address)
            setBirthdate(res.data[0].birthdate)
        }
        getInfo()
    }, [user])

    const handleSubmit = (id) => {
        axios.put(`http://localhost:8000/admin/${id}`, {firstname, lastname, email, address, birthdate})
        .then(res => {
            window.location.reload()
            console.log(res)
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='flex relative w-full'>
        <Sidebar />
        <div className={`bg-white rounded-lg shadow-lg border border-black p-10 h-[500px] mt-10 mx-10 ${open ? "w-[75%] duration-500" : "w-[90%] duration-500"}`}>
            <h2 className="text-xl font-bold mb-4">Update Information</h2>
            <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="firstname">
                First Name:
                </label>
                <input
                className="w-full border border-gray-400 p-2 rounded"
                type="text"
                value={firstname}
                onChange={(e) => {
                    setFirstname(e.target.value);
                }}
                id="firstname"
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="lastname">
                Last Name:
                </label>
                <input
                className="w-full border border-gray-400 p-2 rounded"
                type="text"
                value={lastname}
                onChange={(e) => {
                    setLastname(e.target.value);
                }}
                id="lastname"
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="email">
                Email:
                </label>
                <input
                className="w-full border border-gray-400 p-2 rounded"
                type="text"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                id="email"
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="address">
                Address:
                </label>
                <input
                className="w-full border border-gray-400 p-2 rounded"
                type="text"
                value={address}
                onChange={(e) => {
                    setAddress(e.target.value);
                }}
                id="address"
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="birthdate">
                Birthday:
                </label>
                <input
                className="w-full border border-gray-400 p-2 rounded"
                type="date"
                value={birthdate}
                onChange={(e) => {
                    setBirthdate(e.target.value);
                }}
                id="birthdate"
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="color">
                {/* Verified: {verified} */}
                </label>

            </div>
            </div>
            <button
            className="w-full bg-rose-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
            onClick={() => {handleSubmit(userId)}}
            >
            Submit
            </button>
        </div>
    </div>
  )
}

export default AdminProfile