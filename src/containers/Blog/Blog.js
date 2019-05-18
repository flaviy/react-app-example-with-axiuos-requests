import React, { Component, Suspense } from 'react';
import './Blog.css';
//import Posts from './Posts/Posts';
/*
import NewPost from './NewPost/NewPost';
*/
import AsyncComponent from '../../hoc/asyncComponent';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'

const Posts = React.lazy(() => import('./Posts/Posts'));

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
              <li>
                <NavLink to={{
                  pathname: '/posts',
                  hash: 'somehash',
                  search: 'search-phrase=test',
                }}>Posts</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={AsyncNewPost}/>
          <Route path="/" exact render={() => <div>Home</div>}/>
          <Redirect from="/test" to="/posts" />
          <Route path="/posts" exact render={()=> <Suspense fallback={<div>Loading...</div>}><Posts /></Suspense>}/>
          <Route  render={() => <h1>404 Page Not Found</h1>}/>
        </Switch>
      </div>
    )
  }
}
export default Blog;