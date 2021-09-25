import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn }) => {
  return (
    
      <nav id="nav">
        <Link to="/">Home</Link>
        <Link to="Posts">Posts</Link>
        <Link to="/login">Login</Link>
        <Link to="/Register">Register</Link>
        { isLoggedIn
          ? <Link to="/Profile">Profile</Link> : null}
        <Link to="/MessageForm">Message Form</Link>
      </nav>
    
  );
};

export default NavBar;
