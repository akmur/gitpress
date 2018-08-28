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
      const itemLink = `/posts/${item.slug}`
      const itemTitle = item.title
      const itemDate = item.date
      return <li key={index}><Link to={itemLink}>{itemTitle} / {itemDate}</Link></li>
    })

    return (
      <div>
        {posts}
      </div>
    )
  }
}

export default PostsList
