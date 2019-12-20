import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { Button, Row, Col } from 'react-bootstrap'
import './Home.css'

class Home extends Component {

    render() {
        return (
            <div className="main">
                <Row>
                    <Col size="3">
                        <img src="../../assets/images/python_logo.jpg"></img>
                    </Col>
                </Row>
                <h3>Welcome to Introduction to Programming with Python!</h3>

                <p>This course will introduce to students the basics of programming, including working with Unix commands and working within a development environment.</p>
            </div>
        )
    }
}

export default Home