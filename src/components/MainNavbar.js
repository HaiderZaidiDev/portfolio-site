import '../index.css';
import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


// Note, "Navbar" is already reserved by bootstrap, so we must prefix it.
const MainNavbar = () => {
  return (
    <div className="navbar-wrapper">
      <Row>
        <Navbar bg="transparent" expand="lg" variant="light">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">Projects </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/blog">Blog </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/resume">Resume</a>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </div>
  );
}

export default MainNavbar;
