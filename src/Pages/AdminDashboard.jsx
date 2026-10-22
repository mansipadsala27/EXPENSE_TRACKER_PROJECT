import React from 'react'
import { setusers } from '../features/userslice'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate=useNavigate()

  const handleLogout=()=>{
   localStorage.removeItem('loginUser')
   setusers(null)
  navigate('/')
  }
  
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default AdminDashboard
