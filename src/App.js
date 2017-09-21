import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Home from './000-Index/Home'

import Clicking from './001-clicking'
import TicTocToe from './002-tic-toc-toe'

const App = () => (
  <Router>
    <div id="router-root">
      <Route exact path="/" component={Home} />
      <Route path="/001/" component={Clicking} />
      <Route path="/002/" component={TicTocToe} />
    </div>
  </Router>
)

export default App
