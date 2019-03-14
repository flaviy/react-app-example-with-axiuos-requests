import React, { Component } from 'react'
import Post from '../../../components/Post/Post'
import axiosinstance from '../../../axios'
import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  }
  postClickedHandler = (postId) => {
    this.setState({
      selectedPostId: postId,
    })
  }

  componentDidMount () {
    axiosinstance.get('/posts').then(response => {
      const posts = response.data.slice(0, 5)
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Alex',
        }
      })
      this.setState({
        posts: updatedPosts,
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render () {
    let posts = this.state.posts.map(post => {
      return <Post
        title={post.title}
        key={post.id}
        author={post.author}
        clicked={() => this.postClickedHandler(post.id)}
      />
    })
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
      </div>
    )
  }
}

export default Posts