import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav id="nav">
        <Link to="/">Home</Link>
        <Link to="Posts">Posts</Link>
        <Link to="/login">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/MessageForm">Message Form</Link>
      </nav>
    </div>
  );
};

export default NavBar;
