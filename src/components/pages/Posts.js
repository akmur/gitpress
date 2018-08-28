import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PostSingle from './PostSingle'
import PostsList from './PostsList'

class Posts extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/posts' component={PostsList} />
        <Route path='/posts/:slug' component={PostSingle} />
      </Switch>
    )
  }
}

export default Posts
