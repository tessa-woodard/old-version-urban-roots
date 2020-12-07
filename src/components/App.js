import React from 'react'

import './App.css'

import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from './Homepage/Homepage'

import Header from './Globals/Header/Header'
import Footer from './Globals/Footer/Footer'

import Register from './Auth/Register/Register'
import Login from './Auth/Login/Login'

import PrivateRoute from './Auth/PrivateRoute'

import ForgotPassword from './Auth/ForgotPassword/ForgotPassword'
import Profile from './Auth/Profile/Profile'

import Shop from './AllProducts/Shop/Shop'

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

          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/profile" component={Profile} />

          <Route path="/shop" component={Shop} />

          <Route path="/about" component={About} />
          <Route path="/contact-us" component={Contact} />
        </Switch>
      </AuthProvider>
      <Footer />
    </Router>
  )
}

export default App
