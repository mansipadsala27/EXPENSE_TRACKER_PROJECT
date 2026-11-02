
import React, { useEffect, useState } from 'react'
import Adminsidebar from '../component/Admin/Adminsidebar'
import '../css/Alluser.css'
import DashboardCard from '../component/Admin/DashboardCard'

const AllUsers = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:8000/users")
        const result = await res.json()

        setUsers(result)
      }
      catch (err) {
        console.log(err)
      }
    }

    fetchUsers()

  }, [])

 
return (
  <div className="d-flex">

    <Adminsidebar />

    <div className="flex-grow-1 p-4">
        <h2 className="mb-4">Admin Dashboard</h2>
         
         <DashboardCard></DashboardCard>
         <div className="flex-grow-1 p-4 all-users-page">

      <h2 className="mb-4 page-title">All Users</h2>

      <div className="users-container">

        {/* Header */}
        <div className="users-header">
          <div>
            <h3>All Registered Users</h3>
            <p>Manage all registered users in your system</p>
          </div>

          <div className="total-users">
            <h5>Total Users</h5>
            <h3>{users.length}</h3>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">

          <table className="table users-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email Address</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>

              {users.map((item, index) => (
                <tr key={item.id}>

                  <td>{index + 1}</td>

                  <td>
                    <div className="user-name">
                      <div className="user-avatar">
                        {item.name?.charAt(0).toUpperCase()}
                      </div>
                      <span>{item.name}</span>
                    </div>
                  </td>

                  <td>{item.email}</td>

                  <td>
                    <span className={
                      item.role === "admin"
                        ? "role admin"
                        : "role user"
                    }>
                      {item.role}
                    </span>
                  </td>

                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center">
                    No users found!
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
      </div>

  </div>
);

}


export default AllUsers
