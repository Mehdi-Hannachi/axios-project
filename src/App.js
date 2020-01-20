import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Comments from "./components/Comments/Comments";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

export default class App extends Component {
  state = {
    users: [],
    posts: [],
    comments: []
  };
  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const users = res.data;
      this.setState({ users });
    });
  };

  getUserPosts = id => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      });
  };

  getPostComments = id => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      });
  };

  render() {
    return (
      <Router>
        <div>
          <div className="nav">
            <div className="head">
              <Link to="/getUsers">
                <h1>Users</h1>
              </Link>
            </div>
          </div>

          <hr />
          <Switch>
            <Route exact path="/">
              <h1>welcom</h1>
            </Route>
            <Route
              exact
              path="/getUsers"
              render={() => (
                <Users
                  getUsers={this.state.users}
                  getpostapp={this.getUserPosts}
                />
              )}
            />
            <Route
              exact
              path="/getPosts/:id"
              render={() => (
                <Posts
                  getUserPosts={this.state.posts}
                  getcommentpost={this.getPostComments}
                  getUsers={this.state.users}
                />
              )}
            />

            <Route
              exact
              path="/postComments/:id"
              render={() => (
                <Comments
                  getcommentpost={this.state.comments}
                  getUserPosts={this.state.posts}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
