import React from 'react'
// import { setexpense } from '../features/expenseslice'
import { useNavigate } from 'react-router-dom'

import '../css/Dashboardsidebar.css'
import DashboardCard from '../component/User/DashboardCard'
import Usersidebar from '../component/User/Usersidebar'

const UserDashboard = () => {
  const navigate=useNavigate()

  const handleLogout=()=>{
   localStorage.removeItem('loginUser')
   setusers(null)
  navigate('/')
  }
  
  return (
   <div className="d-flex">
      
     <Usersidebar>
      </Usersidebar>  
      
      <div className="flex-grow-1 p-4">
        <h2 className="mb-4">User Dashboard</h2>
         
         <DashboardCard></DashboardCard>
      </div>
   
    </div>
  )
}

export default UserDashboard
