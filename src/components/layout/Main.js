import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Single from '../pages/PostSingle'

class Main extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/posts' component={Posts} />
        <Route path='/posts/:post' component={Single} />
      </Switch>
    )
  }
}

export default Main
