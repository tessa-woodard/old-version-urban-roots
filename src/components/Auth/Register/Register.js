import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './register.css'

export default function Register() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { register } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await register(emailRef.current.value, passwordRef.current.value)
      history.push('/profile')
    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
    <>
      <div className="register-container">
        <div className="register-img" />
        <section className="register">
          <div className="row">
            <div className="col-18 col-sm-14 col-md-14 mx-auto">
              <h2 className="register-title">
                Sign Up.
                <br />
                <span className="flowers"> It's quick & easy! </span>
              </h2>
              <form onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}
                <form className="form-group" id="email">
                  <form>Email</form>
                  <input
                    type="email"
                    className="form-control"
                    ref={emailRef}
                    required
                  />
                </form>
                <form className="form-group" id="password">
                  <form>Password</form>
                  <input
                    type="password"
                    className="form-control"
                    ref={passwordRef}
                    required
                  />
                </form>
                <form className="form-group" id="password-confirm">
                  <form>Password Confirmation</form>
                  <input
                    type="password"
                    className="form-control"
                    ref={passwordConfirmRef}
                    required
                  />
                </form>
                <div className="w-100 text-center mt-2">
                  Already have an account?{' '}
                  <Link to="/login" class="text-success">
                    Log In
                  </Link>
                </div>
                <br />
                <button
                  disabled={loading}
                  class="btn btn-outline-dark"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
