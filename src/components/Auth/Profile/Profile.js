import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './profile.css'

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    const promises = []
    setLoading(true)
    setError('')

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push('/')
      })
      .catch(() => {
        setError('Failed to update account')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div className="profile-container">
        <div className="profile-img" />
        <div className="profile">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 mx-auto">
              <h2 className="profile-title">Personal Details</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {/* <strong>Email:</strong> {currentUser.email} */}
              <form onSubmit={handleSubmit}>
                <form className="form-group" id="email">
                  <form>Email</form>
                  <input
                    type="email"
                    className="form-control"
                    ref={emailRef}
                    required
                    defaultValue={currentUser.email}
                  />
                </form>
                <form className="form-group" id="password">
                  <form>Password</form>
                  <input
                    type="password"
                    className="form-control"
                    ref={passwordRef}
                    // placeholder="Leave blank to keep the same"
                  />
                </form>
                <form className="form-group" id="password-confirm">
                  <form>Password Confirmation</form>
                  <input
                    type="password"
                    className="form-control"
                    ref={passwordConfirmRef}
                    // placeholder="Leave blank to keep the same"
                  />
                </form>
                <button
                  disabled={loading}
                  className="btn btn-outline-dark"
                  type="submit"
                >
                  Update
                </button>
                <a class="btn btn-outline-dark" variant="link" href="/">
                  Cancel
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
