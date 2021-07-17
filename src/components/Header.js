import '../index.css';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Icons
import { GithubFill, LinkedInV1Fill } from 'akar-icons';

const Header = (props) => {
  return (
    <Row className="header-wrapper">
      <Col md={5} xs={12}>
        <div className="header">
          <h1> {props.title} </h1>
          <p> {props.body} </p>
          {props.showIcons &&
            <div className="icons">
              <a href="https://github.com/HaiderZaidiDev" target="_blank"><GithubFill size={24} /></a>
              <a href="https://www.linkedin.com/in/haider-zaidi/" target="_blank"><LinkedInV1Fill size={24} /></a>
            </div>
          }
        </div>
      </Col>
    </Row>
  );
}

export default Header;
