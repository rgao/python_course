import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './Coursework.css'
import { Row, Col } from 'react-bootstrap'
import pylogo from '../../assets/images/python-logo.png'

class Coursework extends Component {

    render() {
        return (
            <Router>
                <div className="main">
                    <Switch>
                        <Route path='/syllabus' component={() => {
                            window.location.href = 'https://github.com/rgao/python_course/blob/master/src/assets/instructions/python_syllabus.pdf';
                            return null
                        }} />
                    </Switch>

                    <Row className="justify-content-center my-5">
                        <Col></Col>
                        <Col md={10} xl={8} className="justify-content-center align-self-center text-center">
                            <img className="img-responsive" id='python-logo' src={pylogo} />
                            <h1 className="ml-3">Coursework, Instructions, and Schedule</h1>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row className="justify-content-center resource-bar">
                        <Link className="col-xs-6 col-md-3 col-xl-2 resource-btn resource-link" to={"/syllabus"}>
                            Schedule/Syllabus
                        </Link>
                        <Col xs={6} md={5} xl={4} className="resource-text">
                            Tentative schedule. Course material details TBA
                    </Col>
                    </Row>
                </div>
            </Router>
        )
    }
}

export default Coursework