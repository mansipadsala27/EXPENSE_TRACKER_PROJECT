import React from 'react'
import Usersidebar from '../component/User/Usersidebar'
import { useAuth } from '../context/AuthContext'
import { FaUserCircle, FaEnvelope, FaUserShield } from 'react-icons/fa'
import '../css/Profile.css'

const Profile = () => {
    const {user}=useAuth()

    return(
        <div className="d-flex profile-page">
            <Usersidebar />

            <div className="flex-grow-1 p-4 profile-content">
                <h2 className="mb-2">User Profile</h2>
                <p className="profile-subtitle">
                    View your personal account information
                </p>

                <div className="profile-card">

                    <div className="profile-avatar">
                        <FaUserCircle />
                    </div>

                    <h3 className="profile-name">
                        {user?.name}
                    </h3>

                    <p className="profile-label">Expense Tracker User</p>

                    <div className="profile-info">

                        <div className="profile-info-item">
                            <div className="profile-info-icon">
                                <FaUserCircle />
                            </div>
                            <div>
                                <span>Full Name</span>
                                <h3>{user?.name}</h3>
                            </div>
                        </div>

                        <div className="profile-info-item">
                            <div className="profile-info-icon email-icon">
                                <FaEnvelope />
                            </div>
                            <div>
                                <span>Email Address</span>
                                <h3>{user?.email}</h3>
                            </div>
                        </div>

                        <div className="profile-info-item">
                            <div className="profile-info-icon role-icon">
                                <FaUserShield />
                            </div>
                            <div>
                                <span>Account Type</span>
                                <h3>{user?.role || 'User'}</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile