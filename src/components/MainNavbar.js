import '../index.css';
import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { HashLink as Link } from 'react-router-hash-link';


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
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/#about">About </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/#projects">Projects </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blog">Blog </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/resume">Resume</Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </div>
  );
}

export default MainNavbar;
