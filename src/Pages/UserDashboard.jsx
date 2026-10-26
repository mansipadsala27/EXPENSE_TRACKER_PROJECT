import React from 'react'
import { setusers } from '../features/userslice'
import { useNavigate } from 'react-router-dom'
import Adminsidebar from '../component/User/Usersidebar'
import '../css/AdminDashboard.css'
import DashboardCard from '../component/User/DashboardCard'

const UserDashboard = () => {
  const navigate=useNavigate()

  const handleLogout=()=>{
   localStorage.removeItem('loginUser')
   setusers(null)
  navigate('/')
  }
  
  return (
   <div className="d-flex">
      
     <Adminsidebar></Adminsidebar>    
      
      <div className="flex-grow-1 p-4">
        <h2 className="mb-4">User Dashboard</h2>
         
         <DashboardCard></DashboardCard>
      </div>
   
    </div>
  )
}

export default UserDashboard
