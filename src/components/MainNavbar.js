import '../index.css';
import React from 'react';
import { Redirect } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Resume from './files/Haider Zaidi - Resume (Schulich).pdf';


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
                <a class="nav-link" href={Resume}>Resume</a>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </div>
  );
}

export default MainNavbar;
