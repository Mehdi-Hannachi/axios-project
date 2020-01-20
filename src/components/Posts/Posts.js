import React, { Component } from "react";
// import axios from "axios";
import "./posts.css";
import { PostCard } from "../PostCard/PostCard";

// import { PostCard } from "../PostCard/PostCard";

export default class Posts extends Component {
  render() {
    return (
      <div className="posts">
        {this.props.getUserPosts.map(post => (
          <PostCard post={post} getcomments={this.props.getcommentpost}/>
        ))}
      </div>
    );
  }
}
