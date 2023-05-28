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
    useRedirectAdmin(user)

  return (
    <div className='flex'>
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