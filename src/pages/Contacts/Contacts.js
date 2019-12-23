import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import './Contacts.css'
import pylogo from '../../assets/images/python-logo.png'

class Contacts extends Component {

    render() {
        return (
            <Router>
                <div className="main">
                    <Switch>
                        <Route path='/main_page' component={() => {
                            window.location.href = 'https://rgao.github.io';
                            return null
                        }} />
                    </Switch>

                    <Row className="justify-content-center my-5">
                        <Col></Col>
                        <Col md={10} xl={8} className="justify-content-center align-self-center text-center">
                            <img className="img-responsive" id='python-logo' src={pylogo} />
                            <h1 className="ml-3">Contact Me</h1>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row className="justify-content-center mt-5">
                        <Col xs={10} md={8} lg={7} xl={6} className="code-editor">
                            <p className="mx-1 my-4 contact-text">
                                # For questions and comments, e-mail at ryanxingao@gmail.com.
                        <br />
                                <br />
                                <br />
                                # For parents, professionals, or anyone who would like more information, visit my main page at
                            <Link id="contact-link" to={"/main_page"}> rgao.github.io</Link>. I am always exploring opportunities and expanding my network.
                        </p>
                        </Col>
                    </Row>
                </div>
            </Router>
        )
    }
}

export default Contacts