import React from 'react'
import Register from './Auth/Register'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './Auth/Profile'
import Login from './Auth/Login'
import PrivateRoute from './Auth/PrivateRoute'
import ForgotPassword from './Auth/ForgotPassword'
import UpdateProfile from './Auth/UpdateProfile'

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/profile" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
