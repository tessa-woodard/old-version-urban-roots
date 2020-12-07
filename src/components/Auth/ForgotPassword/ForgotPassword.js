import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import './forgotpassword.css'

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instructions')
    } catch {
      setError('Failed to reset password')
    }

    setLoading(false)
  }

  return (
    <>
      <div className="forgot-container">
        <div className="forgot">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 mx-auto">
              <h2 className="forgot-title">
                Password Reset
                <br />
                <span className="flowers"> We've got you covered! </span>
              </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <form onSubmit={handleSubmit}>
                <form className="form-group" id="email">
                  <form>Email</form>
                  <input
                    type="email"
                    className="form-control"
                    ref={emailRef}
                    required
                  />
                </form>
                <div className="w-100 text-center mt-2">
                  Need an account?{' '}
                  <Link to="/register" class="text-success">
                    Sign Up
                  </Link>
                </div>
                <br />
                <button
                  disabled={loading}
                  className="btn btn-outline-dark"
                  type="submit"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="forgot-img" />
      </div>
    </>
  )
}
