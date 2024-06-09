import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/Home/Home.js";
import Lessons from "./pages/Lessons/Lessons.js";
import Assignments from "./pages/Assignments/Assignments.js";
import Resources from "./pages/Resources/Resources.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/lessons" element={<Lessons/>} />
          <Route exact path="/assignments" element={<Assignments/>} />
          <Route exact path="/resources" element={<Resources/>} />

          <Route path='/orientation' component={() => {
            window.location.href = 'https://github.com/rgao/python_course/blob/master/src/assets/instructions/orientation.ipynb';
            return null
          }} />

          <Route path='/syllabus' element={() => {
            window.location.href = 'https://github.com/rgao/python_course/blob/master/src/assets/instructions/python_syllabus.pdf';
            return null
          }} />

          <Route path='/python' element={() => {
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

          <Route path='/main_page' component={() => {
            window.location.href = 'https://rgao.github.io';
            return null
          }} />

          <Route path="*" component={Home} />
          {/* <Route component={NoMatch} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
