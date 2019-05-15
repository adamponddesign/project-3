import React from 'react'
import ReactDOM from 'react-dom'
import Favicon from 'react-favicon'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import SecureRoute from './components/common/SecureRoute'
import FlashMessages from './components/common/FlashMessages'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

import Login from './components/auth/Login'
import Register from './components/auth/Register'

import VenuesNew from './components/venues/New'
import VenuesIndex from './components/venues/Index'

import VenuesShow from './components/venues/Show'

import 'bulma'
import './style.scss'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Favicon url="./assets/blueOwl1svg.png" />
          <Navbar />
          <FlashMessages />
          <Switch>
            <SecureRoute path="/venues/new" component={VenuesNew} />
            <Route path="/venues/:id" component={VenuesShow} />
            <Route path="/venues" component={VenuesIndex} />

            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
