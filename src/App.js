import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './000-Index/Home'
import logo from './logo.svg'

import Clicking from './001-clicking'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/001/" component={Clicking} />
    </div>
  </Router>
)

export default App
