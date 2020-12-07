import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './profile.css'

export default function Dashboard() {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError('')

    try {
      await logout()
      history.push('/')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <>
      <div className="profile-container">
        <div className="profile">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 mx-auto">
              <h2 className="profile-title">Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong> {currentUser.email}
              <br />
              <div className="w-100 text-center mt-2">
                <a
                  variant="link"
                  href="/update-profile"
                  class="btn btn-outline-dark"
                >
                  Update Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
