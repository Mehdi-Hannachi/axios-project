import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export const PostCard = ({ post, getcomments }) => {
  return (
    <div className="card1">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to={`/postComments/${post.id}`}>
        <button onClick={() => getcomments(post.id)}>Comments</button>
      </Link>
    </div>
  );
};
