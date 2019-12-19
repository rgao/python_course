import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark">
        <Link to={"/"} className="navbar-header text-center">
          Introduction to Programming with Python
        </Link>
        <Link to={"/Coursework"}>Coursework</Link>
        <Link to={"/Resources"}>Resources</Link>
      </nav>
    );
  }
}

export default Nav;