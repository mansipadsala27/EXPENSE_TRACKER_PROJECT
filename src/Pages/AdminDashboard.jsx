import React from 'react'
import { setusers } from '../features/userslice'
import { useNavigate } from 'react-router-dom'
import Adminsidebar from '../component/Admin/Adminsidebar'
import '../css/AdminDashboard.css'
import DashboardCard from '../component/Admin/DashboardCard'

const AdminDashboard = () => {
  return (
    <div className="d-flex">
      
     <Adminsidebar></Adminsidebar>    
      
      <div className="flex-grow-1 p-4">
        <h2 className="mb-4">Admin Dashboard</h2>
         
         <DashboardCard></DashboardCard>
      </div>
   
    </div>
  )
}

export default AdminDashboard
