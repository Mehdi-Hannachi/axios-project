import React from "react";
import { Link } from "react-router-dom";

export const Usercard = ({ user,getpost }) => {
  return (
    <div className="our-team">
      <div className="picture">
        <Link to={`/getPosts/${user.id}`}>
          <img
            className="img-fluid"
            alt="ident"
            src="https://picsum.photos/130/130?image=1027"
            onClick={()=>getpost(user.id)}
          />
        </Link>
      </div>
      <div className="team-content">
        <h3 className="name">{user.name}</h3>
        <h4 className="title">{user.email}</h4>
      </div>
      <ul className="social">
        <li>
          <a href="foo" className="fa fa-facebook" />
        </li>
        <li>
          <a href="foo" className="fa fa-twitter" />
        </li>
        <li>
          <a href="foo" className="fa fa-google-plus" />
        </li>
        <li>
          <a href="foo" className="fa fa-linkedin" />
        </li>
      </ul>
    </div>
  );
};
