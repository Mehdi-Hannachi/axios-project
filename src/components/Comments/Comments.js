import React, { Component } from "react";
import './comments.css'
export default class Comments extends Component {
  render() {
    return (
      <div>
          <h1>All Comments : </h1>
        {this.props.getcommentpost.map(el => (


          <div className="comments">



            <p>{el.body}</p>
            <h6>{el.email}</h6>
          </div>
        ))}
      </div>
    );
  }
}
