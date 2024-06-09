import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import './Home.css'
import pylogo from '../../assets/images/python-logo.png'

class Home extends Component {

    render() {
        return (
            <div className="main">
                <Row className="justify-content-center my-5">
                    <Col></Col>
                    <Col md={10} xl={8} className="justify-content-center align-self-center text-center">
                        <img className="img-responsive" id='python-logo' src={pylogo} />
                        <h1 className="ml-3">Introduction to Programming with Python</h1>
                    </Col>
                    <Col></Col>
                </Row>

                <Row className="intro justify-content-center mt-5">
                    <Col xs={10} md={8} lg={7} xl={6} className="code-editor">
                        <p className="mx-1 my-4 intro-text">
                            # Python is an intuitive, high-level language that serves as an excellent gateway into the world of programming.
                        </p>
                        <p className="mx-1 my-4 intro-text">
                            # It is widely used across many industries for purposes including data analysis, scientific computing, and web design.
                        </p>
                        <p className="mx-1 my-4 intro-text">
                            # Its large open-source community contributes to its vast-reaching documentation.
                        </p>

                        <div className="pycode">
                            <p>
                                <span className="function-dec">def</span> <span className="keyword">hello_world</span>(<span className="argument">notpluto</span>):
                            </p>
                            <p className="pystring">
                                """
                                <br />
                                Says Hi
                                <br />
                                <br />
                                """
                            </p>
                            <p className="indent-code">
                                <span className="keyword">print</span>(<span ClassName="pystring">"Welcome to the world of programming!"</span>)
                                <br />
                                <br />
                                <span className="keyword">print</span>(<span ClassName="pystring">"There are "</span>
                                + <span className="argument">notpluto</span> +
                                    <span ClassName="pystring">" planets in the Solar System."</span>)
                            </p>
                            <p className="ide-text mt-4"> hello_world(8)</p>
                            <p>
                                Welcome to the world of programming!
                                <br />
                                <br />
                                There are 8 planets in the Solar System.
                            </p>
                        </div>
                    </Col>
                </Row>

                <nav className="navbar navbar-expand-lg justify-content-center fixed-bottom mt-5 py-0" id="start-bar">
                    <Link className="col-lg-2 text-center nav-btn py-2 start-btn" id="start-link" to={"/orientation"} target="_blank">
                        Get Started
                    </Link>
                </nav>
            </div>
        )
    }
}

export default Home