import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './Resources.css'
import { Row, Col } from 'react-bootstrap'
import pylogo from '../../assets/images/python-logo.png'

class Resources extends Component {

    render() {
        return (
            <Router>
                <div className="main">
                    <Switch>
                        <Route path='/python' component={() => {
                            window.location.href = 'https://python.org';
                            return null
                        }} />
                        <Route path='/unix' component={() => {
                            window.location.href = 'http://mally.stanford.edu/~sr/computing/basic-unix.html';
                            return null
                        }} />
                        <Route path='/codecademy' component={() => {
                            window.location.href = 'https://www.codecademy.com/learn/learn-python';
                            return null
                        }} />
                        <Route path='/khanacademy' component={() => {
                            window.location.href = 'https://www.khanacademy.org/computing';
                            return null
                        }} />
                    </Switch>

                    <Row className="justify-content-center my-5">
                    <Col></Col>
                    <Col md={10} xl={8} className="justify-content-center align-self-center text-center">
                        <img className="img-responsive" id='python-logo' src={pylogo} />
                        <h1 className="ml-3">External Links and Resources</h1>
                    </Col>
                    <Col></Col>
                </Row>

                <Row className="justify-content-center resource-bar">
                    <Link className="col-xs-6 col-md-3 col-xl-2 resource-btn resource-link" to={"/python"}>
                        Python Documentation
                    </Link>
                    <Col xs={6} md={5} xl={4} className="resource-text">
                        Information for all things Python. Always check documentation when running into a problem or unknown.
                        Python's main website also has various links to other resources.
                    </Col>
                </Row>

                <Row className="justify-content-center resource-bar">
                    <Link className="col-xs-6 col-md-3 col-xl-2 resource-btn resource-link" to={"/unix"}>
                        Unix Commands
                    </Link>
                    <Col xs={6} md={5} xl={4} className="resource-text">
                        Basic Unix commands: fundamental for working in a terminal environment. An eventual second-nature skill.
                    </Col>
                </Row>

                <Row className="justify-content-center resource-bar">
                    <Link className="col-xs-6 col-md-3 col-xl-2 resource-btn resource-link" to={"/codeacademy"}>
                        Codecademy
                    </Link>
                    <Col xs={6} md={5} xl={4} className="resource-text">
                        Useful practice tool for Python and other languages. Recommended to as supplemental material and to improve self-learning.
                        <p className="warning-text">Note: The free version may be using Python 2. Most of the syntax is the same, but do not be concerned if you run into inconsistencies.</p>
                    </Col>
                </Row>

                <Row className="justify-content-center resource-bar">
                    <Link className="col-xs-6 col-md-3 col-xl-2 resource-btn resource-link" to={"/khanacademy"}>
                        Khan Academy
                    </Link>
                    <Col xs={6} md={5} xl={4} className="resource-text">
                        Khanacademy doesn't have Python lessons, but is an expansive platform covering both programming and non-coding related topics. Useful for learning about the broader tech world.
                    </Col>
                </Row>
                </div>
            </Router>
        )
    }
}

export default Resources