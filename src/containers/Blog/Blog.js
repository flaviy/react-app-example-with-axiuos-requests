import React, { Component } from 'react';
import axiosinstance from '../../axios';


import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts : [],
    selectedPostId : null
  }
  postClickedHandler = (postId) => {
    this.setState({
      selectedPostId : postId
    })
  }

  componentDidMount () {
    axiosinstance.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 5);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author : 'Alex'
          }
        })
        this.setState({
          posts : updatedPosts
        })
    }).catch(error => {
      console.log(error)
    })
  }

  render () {
    const posts = this.state.posts.map(post => {
      return <Post
        title = {post.title}
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
                <section>
                    <FullPost selectedPostId={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;