import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { Button, Row, Col } from 'react-bootstrap'
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
                    <Col xs={10} md={8} lg={7} xl={6} id="code-editor">
                        <p className="mx-1 my-4 intro-text"># Python is an intuitive, high-level language that serves as an excellent gateway into the world of programming.</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home