import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/Home/Home.js";
import Coursework from "./pages/Coursework/Coursework.js";
import Resources from "./pages/Resources/Resources.js";
import Footer from "./components/Footer/Footer.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/coursework" component={Coursework} />
            <Route exact path="/resources" component={Resources} />
            <Route path="*" component={Home} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
