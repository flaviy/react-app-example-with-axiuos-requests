import React, { Component } from 'react'
import axios from 'axios'

import './FullPost.css'

class FullPost extends Component {
  state = {
    loadedPost : null,
    selectedPostId : null
  }

  componentDidMount () {
    if(this.props.match.params['postId']) {
      this.setState({selectedPostId :this.props.match.params['postId'] })
      axios.get('/posts/' + this.props.match.params['postId']).then(
        response => {
          this.setState({
            loadedPost: response.data
          })
        }
      )
    }
  }

  render () {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>
    if (this.state.selectedPostId) {
      post = <p style={{ textAlign: 'center' }}>Loading....</p>;
    }
    if(this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>

      )
    }
    return post
  }
}

export default FullPost