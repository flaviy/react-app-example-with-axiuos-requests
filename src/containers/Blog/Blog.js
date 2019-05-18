import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
/*
import NewPost from './NewPost/NewPost';
*/
import AsyncComponent from '../../hoc/asyncComponent';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'

const AsyncNewPost = AsyncComponent(() => {
  return import('./NewPost/NewPost');
});

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
        <Switch>
          <Route path="/new-post" component={AsyncNewPost}/>
          <Redirect from="/test" to="/posts" />
          <Route path="/" exact component={Posts}/>
          <Route  render={() => <h1>404 Page Not Found</h1>}/>
        </Switch>
      </div>
    )
  }
}
export default Blog;