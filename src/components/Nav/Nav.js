import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg">
        <Link to={"/"}>Home</Link>
        <Link to={"/Coursework"}>Coursework</Link>
        <Link to={"/Resources"}>Resources</Link>
        <Link to={"/Contacts"}>Contacts</Link>
      </nav>
    );
  }
}

export default Nav;