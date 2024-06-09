import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './Assignments.css'
import { Row, Col } from 'react-bootstrap'
import pylogo from '../../assets/images/python-logo.png'

class Assignments extends Component {

    render() {
        return (
            <div className="main">
                <Row className="justify-content-center my-5">
                    <Col></Col>
                    <Col md={10} xl={8} className="justify-content-center align-self-center text-center">
                        <img className="img-responsive" id='python-logo' src={pylogo} />
                        <h1 className="ml-3">Assignments</h1>
                    </Col>
                    <Col></Col>
                </Row>

                {/* <Row className="justify-content-center resource-bar">
                    <Link className="col-xs-6 col-md-3 col-xl-2 resource-btn resource-link" target="_blank" to={"/syllabus"}>
                        Schedule/Syllabus
                        </Link>
                    <Col xs={6} md={5} xl={4} className="resource-text">
                        Tentative schedule. Course material details TBA
                    </Col>
                </Row> */}
            </div>
        )
    }
}

export default Assignments