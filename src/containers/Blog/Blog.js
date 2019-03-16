import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import {Route, NavLink} from 'react-router-dom'
import FullPost from './FullPost/FullPost'

class Blog extends Component {
  render () {
    return (
            <div className="Blog">
              <header>
                <nav>
                  <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li>
                      <NavLink to={{
                        pathname: '/new-post',
                        hash: 'somehash',
                        search: 'search-phrase=test',
                      }}>New Post</NavLink>
                    </li>
                  </ul>
                </nav>
              </header>
              <Route path="/" exact render={() => <h1>home</h1>}/>
              <Route path="/" exact component={Posts}/>
              <Route path="/new-post"  component={NewPost}/>
              <Route path="/:postId" component={FullPost}/>

            </div>
        );
    }
}
export default Blog;