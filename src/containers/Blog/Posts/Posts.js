import React, { Component } from 'react'
import Post from '../../../components/Post/Post'
import FullPost from '../../Blog/FullPost/FullPost'
import axiosinstance from '../../../axios'
import './Posts.css';
import { Link, Route } from 'react-router-dom'


class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null
  }
  postClickedHandler = (postId) => {
    this.props.history.push({pathname:'/'+postId});
  /*  this.setState({
      selectedPostId: postId,
    })*/
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
      return (
        <div key={post.id}>
          <Link to={'/'+post.id}>
            <Post
              title={post.title}
              author={post.author}
              //clicked={() => this.postClickedHandler(post.id)}
            />
        </Link>
        </div>
      )
    })
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path="/:postId" component={FullPost}/>
      </div>
    )
  }
}

export default Posts