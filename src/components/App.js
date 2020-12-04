import React from 'react'

import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from './Homepage/Homepage'

import Header from './Globals/Header/Header'
import Footer from './Globals/Footer/Footer'

import Register from './Auth/Register/Register'
import Login from './Auth/Login/Login'

import PrivateRoute from './Auth/PrivateRoute'

import Profile from './Auth/Profile'
import ForgotPassword from './Auth/ForgotPassword'
import UpdateProfile from './Auth/UpdateProfile'

import About from './About/About'
import Contact from './Contact/Contact'

function App() {
  return (
    <Router>
      <Header />
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />

          <Route path="/profile" component={Profile} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          <Route path="/about" component={About} />
          <Route path="/contact-us" component={Contact} />
        </Switch>
      </AuthProvider>
      <Footer />
    </Router>
  )
}

export default App
