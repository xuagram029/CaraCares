import React, { useState, useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { AuthContext } from "../context/AuthContext"
import axios from "axios"
import { useNavigate } from "react-router"

const AdminDashboard = () => {
    const [open, setOpen] = useState(true)

    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.resp[0]?.firstname)

    useEffect(() => {
      if(!user){
          navigate("/admin-login")
      }else if(user?.resp[0]?.role !== 'admin'){
        navigate('/')
      }
  }, [user, navigate])

  console.log(user?.resp[0]?.role)
  console.log(user?.resp[0]?.name)
  

  return (
    <div className='flex h-screen'>
        <Sidebar/>
        <div className='p-8'>
            <h1>HOME</h1>
            {/* <h1>{name}</h1>
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/> */}
        </div>
    </div>
  )
}

export default AdminDashboard