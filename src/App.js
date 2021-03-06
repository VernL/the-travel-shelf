import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomePage from './scenes/HomePage/HomePage'
import StoreIndex from './scenes/StoreIndex/StoreIndex'
import Store from './scenes/Store/Store'
import Navbar from './components/Navbar/Navbar'
import About from './scenes/About/About'
import NotFoundPage from './scenes/NotFoundPage/NotFoundPage'

import * as actionCreators from './store/actions/index'

import Map from './scenes/Map/Map'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.fetchStores()
  }

  render () {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={About} />
            <Route path='/stores' exact component={StoreIndex} />
            <Route path='/stores/:name' component={Store} />
            <Route path='/map' component={Map} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStores: () => dispatch(actionCreators.fetchStores())
  }
}

export default connect(null, mapDispatchToProps)(App)
