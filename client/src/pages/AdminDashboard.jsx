import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'

const AdminDashboard = () => {
    const [open, setOpen] = useState(true)
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