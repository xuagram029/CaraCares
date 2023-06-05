import React, { useState, useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { AuthContext } from "../context/AuthContext"
import axios from "axios"
import { useNavigate } from "react-router"
import { MdOutlineScheduleSend } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { MdHistory } from 'react-icons/md';
import { MdPendingActions } from 'react-icons/md';
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
    const [open, setOpen] = useState(true)

    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.resp[0]?.firstname)
    const [total, setTotal] = useState(0)

    useEffect(() => {
      if(!user){
          navigate("/admin-login")
      }else if(user?.resp[0]?.role !== 'admin'){
        navigate('/')
      }
    }, [user, navigate])

    useEffect(() => {
      const getCount = async() => {
        const res = await axios.get('http://localhost:8000/admin-encode/total')
        console.log(res.data)
        setTotal(res.data)
      }
      getCount()
    }, [])


  console.log(user?.resp[0]?.role)
  console.log(user?.resp[0]?.name)
  

  return (
    <div className='flex h-screen'>
        <Sidebar/>
        <div className='p-8 flex flex-row flex-wrap justify-evenly items-center mx-auto space-x-12'>
          <div className="space-y-16">
            <div className="w-[400px] h-64 bg-[#E5707E] shadow-xl border-8 border-grey rounded-3xl hover:text-white cursor-pointer">
              <Link to='/scheduled-appointments'>
                  <p className='text-3xl font-medium text-center text-white relative right-16 top-[78px]'>Scheduled <br /> Appointments</p> 
                  <MdOutlineScheduleSend className='text-9xl hover:animate-pulse delay-400 opacity-50 relative left-60 bottom-5'/>
              </Link>
            </div>

            <div className="w-[400px] h-64 bg-[#E5707E] shadow-xl border-8 border-grey rounded-3xl hover:text-white">
              <Link >
                <p className='text-3xl font-medium text-center text-white relative top-[30px] '>Adopted Animals</p> 
                <p className='text-6xl font-semibold text-center text-white relative right-16 top-[88px]'>{total}</p> 
                <AiOutlineHome className='text-8xl hover:animate-pulse delay-400 opacity-50 relative left-52 bottom-1'/>
              </Link>
            </div>
          </div>

          <div className="space-y-16">
            <div className="w-[400px] h-64 bg-[#E5707E] shadow-xl border-8 border-grey rounded-3xl hover:text-white">
              <Link to='/adoption-history'>
                <p className='text-3xl font-medium text-center text-white relative right-16 top-[78px] spac'>Adoption <br /> History</p> 
                <MdHistory className='text-9xl hover:animate-pulse delay-400 opacity-50 relative left-56 bottom-5'/>
              </Link>
            </div>

            <div className="w-[400px] h-64 bg-[#E5707E] shadow-xl border-8 border-grey rounded-3xl hover:text-white">
              <Link to='/user-appointments'>
              <p className='text-3xl font-medium text-center text-white relative right-16 top-[78px] spac'>Pending <br /> Appointments</p> 
                <MdPendingActions className='text-9xl hover:animate-pulse delay-400 opacity-50 relative left-[230px] bottom-4'/>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdminDashboard 