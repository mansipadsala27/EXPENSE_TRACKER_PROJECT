import React from 'react'
import { setusers } from '../features/userslice'
import { useNavigate } from 'react-router-dom'
import Adminsidebar from '../component/Admin/Adminsidebar'
import '../css/AdminDashboard.css'

const AdminDashboard = () => {
  return (
    <div>
      
     <Adminsidebar></Adminsidebar>
   
    </div>
  )
}

export default AdminDashboard
