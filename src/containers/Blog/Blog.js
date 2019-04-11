import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'

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
        <Switch>
          <Route path="/new-post" component={NewPost}/>
          <Redirect from="/" to="/posts" />
          <Route path="/" component={Posts}/>
        </Switch>
      </div>
    )
  }
}
export default Blog;