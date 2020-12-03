import React from 'react'

import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Register from './Auth/Register'
import Login from './Auth/Login'

import PrivateRoute from './Auth/PrivateRoute'

import Profile from './Auth/Profile'
import ForgotPassword from './Auth/ForgotPassword'
import UpdateProfile from './Auth/UpdateProfile'

import Header from './Globals/Header/Header'
import Footer from './Globals/Footer/Footer'

import Homepage from './Homepage/Homepage'
import About from './About/About'

function App() {
  return (
    <Router>
      <Header />
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/profile" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/about" component={About} />
        </Switch>
      </AuthProvider>
      <Footer />
    </Router>
  )
}

export default App
