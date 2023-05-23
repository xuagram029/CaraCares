import React, { useState, useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { AuthContext } from "../context/AuthContext"
import axios from "axios"
import { useNavigate } from "react-router"

const AdminDashboard = () => {
    const [open, setOpen] = useState(true)

    const navigate = useNavigate()
    const { user } = useContext(AuthContext);

    useEffect(() => {
      if(!user){
          navigate("/admin-login")
      }else if(user?.resp[0]?.role !== 'admin'){
        navigate('/')
      }
  }, [user, navigate])

  console.log(user.resp[0].role)

  return (
    <div className='flex'>
        <Sidebar/>
        <div className='p-8'>
            <h1>HOME</h1>
        </div>
    </div>
  )
}

export default AdminDashboard