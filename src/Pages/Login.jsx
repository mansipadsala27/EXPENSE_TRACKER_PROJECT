
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../css/Login.css'
import { FaEnvelope, FaLock } from 'react-icons/fa'

const Login = () => {
  const navigate = useNavigate()

  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target

    setFormData({
      ...formdata,
      [name]: value
    })
  }

  const { setUser } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let res = await fetch(
        `http://localhost:8000/users?email=${formdata.email}`,
        {
          headers: {
            'content-type': 'application/json'
          },
          method: 'GET'
        }
      )

      let result = await res.json()

      if (
        result.length > 0 &&
        result[0].email == formdata.email &&
        result[0].password == formdata.password
      ) {
        let storeuser = result[0]

        localStorage.setItem('loginUser', JSON.stringify(storeuser))
        setUser(storeuser)

        if (storeuser?.role == 'admin') {
          alert('Login Successfully')
          navigate('/admindash', { replace: true })
        } else {
          navigate('/userdash')
        }
      } else {
        alert('Invalid email or password')
      }
    } catch (err) {
      console.log(err)
      return false
    }
  }

  return (
    <div className="login-container">
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-form-section">
            <form className="auth-form" onSubmit={handleSubmit}>
              <h2 className="auth-heading">Welcome back!</h2>

              <p className="auth-subtitle">
                Sign in to continue to your dashboard.
              </p>

              <div className="auth-field">
                <label htmlFor="email">Email address</label>

                <div className="auth-input-wrap">
                  <span className="auth-input-icon">
                    <FaEnvelope />
                  </span>

                  <input
                    className="auth-input"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formdata.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="auth-field">
                <label htmlFor="password">Password</label>

                <div className="auth-input-wrap">
                  <span className="auth-input-icon">
                    <FaLock />
                  </span>

                  <input
                    className="auth-input"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formdata.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                  />
                </div>
              </div>

              <button className="auth-button" type="submit">
                Sign In →
              </button>

              <p className="auth-footer">
                Don't have an account?{' '}
                <Link className="auth-link" to="/reg">
                  Create account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
