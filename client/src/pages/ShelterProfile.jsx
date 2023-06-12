import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { AuthContext } from '../context/AuthContext'
import axios from '../api/axios'
import { SidebarContext } from '../context/SbContext'
import { useNavigate } from 'react-router'

const ShelterProfile = () => {
    const { user } = useContext(AuthContext)
    const { open } = useContext(SidebarContext)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const navigate = useNavigate()
    const userId = user?.resp[0]?.id

    useEffect(() => {
        if(!user){
          navigate('/admin-login')
        }else if(user?.resp[0]?.role === 'user'){
          navigate('/')
       }
      }, [user])
      

    useEffect(() => {
        const getInfo = async () => {
            const res = await axios.get(`http://localhost:8000/shelter/${userId}`)
            setEmail(res.data[0].email)
            setName(res.data[0].name)
            setAddress(res.data[0].address)
            setNumber(res.data[0].number)
        }
        getInfo()
    }, [user])

    const handleSubmit = (id) => {
        axios.put(`http://localhost:8000/shelter/${id}`, {name, email, address, number})
        .then(res => {
            window.location.reload()
            console.log(res)
        })
        .catch(err => console.log(err.response.data.message))
    }

  return (
    <div className='flex relative w-full'>
        <Sidebar />
        <div className={`bg-white rounded-lg shadow-lg border border-black p-10 h-[500px] mt-10 mx-10 ${open ? "w-[75%] duration-500" : "w-[90%] duration-500"}`}>
            <h2 className="text-xl font-bold mb-4">Update Information</h2>
            <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="firstname">
                Shelter Name:
                </label>
                <input
                className="w-full border border-gray-400 p-2 rounded"
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                id="name"
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
                Shelter Number:
                </label>
                <input
                className="w-full border border-gray-400 p-2 rounded"
                type="number"
                value={number}
                onChange={(e) => {
                    setNumber(e.target.value);
                }}
                id="number"
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

export default ShelterProfile

