import React, { useState, useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { AuthContext } from "../context/AuthContext"
import axios from "axios"
import { useNavigate } from "react-router"
import useRedirectAdmin from '../custom hooks/useRedirectAdmin'

const AdminDashboard = () => {
    const [open, setOpen] = useState(true)
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
<<<<<<< HEAD
    useRedirectAdmin(user)
=======

    useEffect(() => {
      if(!user){
          navigate("/admin-login")
      }else if(user?.resp[0]?.role !== 'admin'){
        navigate('/')
      }
  }, [user, navigate])

  console.log(user.resp[0].role)
>>>>>>> parent of 556bb1f (updated)

  return (
    <div className='flex h-screen'>
        <Sidebar/>
        <div className='p-8'>
            <h1>HOME</h1>
        </div>
    </div>
  )
}

export default AdminDashboard