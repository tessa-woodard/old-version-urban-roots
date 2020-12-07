import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './login.css'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Failed to log in')
    }

    setLoading(false)
  }

  return (
    <>
      <div className="login-container">
        <section className="login">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 mx-auto">
              <h2 className="login-title">
                Welcome Back!
                <br />
                <span className="flowers"> We're glad to see you, again! </span>
              </h2>
              <form onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}
                <form className="login-form-group" id="email">
                  <form>Email</form>
                  <input
                    type="email"
                    className="form-control"
                    ref={emailRef}
                    required
                  />
                </form>
                <form className="login-form-group">
                  <form>Password</form>
                  <input
                    type="password"
                    className="form-control"
                    ref={passwordRef}
                    required
                  />
                </form>
                <div className="w-100 text-center mt-2">
                  Don't have an account?{' '}
                  <Link to="/register" class="text-success">
                    Sign Up
                  </Link>
                </div>
                <br />
                <div className="w-100 text-center mt-2">
                  Forgot password?{' '}
                  <Link to="/forgot-password" class="text-success">
                    We can help!
                  </Link>
                </div>
                <br />
                <button
                  disabled={loading}
                  class="btn btn-outline-dark"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="login-img" />
      </div>
    </>
  )
}
