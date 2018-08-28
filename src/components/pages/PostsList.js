import React, { Component } from 'react'
import { getPostsListJson } from '../../helpers/getPostsListJson'
import { Link } from 'react-router-dom'

class PostsList extends Component {
  state = {
    posts: [],
  }

  componentDidMount () {
    getPostsListJson().then(response => {
      this.setState({
        posts: response
      })
    })
  }

  render () {
    const posts = this.state.posts.map((item, index) => {
      const itemLink = `/posts/${item.path}`.replace('.md', '')
      const itemPath = `${item.path}`.replace('.md', '')
      return <li><Link to={itemLink}>{itemPath}</Link></li>
    })
    return (
      <div>
        {posts}
      </div>
    )
  }
}

export default PostsList
