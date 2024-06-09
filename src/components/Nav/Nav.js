import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from 'react-bootstrap'
import "./Nav.css"

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg justify-content-center py-0 main-nav">
        <Col lg={2} className="text-center nav-btn py-2" id="home-btn">
          <Link className="nav-link" to={"/"}>Home</Link>
        </Col>
        <Col lg={2} className="text-center nav-btn py-2">
          <Link className="nav-link" to={"/Lessons"}>Lessons</Link>        
        </Col>
        <Col lg={2} className="text-center nav-btn py-2">
          <Link className="nav-link" to={"/Assignments"}>Assignments</Link>
        </Col>
        <Col lg={2} className="text-center nav-btn py-2">
          <Link className="nav-link" to={"/Resources"}>Resources</Link>        
        </Col>
      </nav>
    );
  }
}

export default Nav;