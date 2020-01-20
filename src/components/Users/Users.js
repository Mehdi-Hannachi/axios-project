import React from "react";
import "./user.css";
// import axios from "axios";
import { Usercard } from "../UserCard/Usercard";

class Users extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.getUsers.map(user => (
          <Usercard getpost={this.props.getpostapp} user={user} />
        ))}
        ;
      </div>
    );
  }
}
export default Users;
