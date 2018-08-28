import React, { Component } from 'react'
import { getPostJson } from '../../helpers/getPostJson'
import { markdown } from 'markdown'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
const matter = require('gray-matter')

class PostSingle extends Component {
  state = {
    title: '',
    date: '',
    content: ''
  }

  componentDidMount () {
    const slug = this.props.match.params.slug
    getPostJson(slug).then(response => {
      const meta = matter(response);
      const markdownToHTML = markdown.toHTML(response)
      this.setState({
        title: meta.data.title,
        date: meta.data.date,
        content: markdownToHTML
      })
    })
  }

  render () {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div className="date">{this.state.date}</div>
        { ReactHtmlParser(this.state.content) }
      </div>
    )
  }
}

export default PostSingle
