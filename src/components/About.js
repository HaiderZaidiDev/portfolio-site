import '../index.css';
import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Images
import code from './files/about-code.png'


const About = () => {
  return (
    <React.Fragment>
      <a id="about"></a>
      <Row className="about-wrapper">
        <Col xs={6}>
          <div className="about-image">
            <img src={code} alt=""></img>
          </div>
        </Col>
        <Col md={6} xs={12}>
          <div className="about-content">
            <p id="subheader"> About</p>
            <h2> Bridging the gap between business and computer science. </h2>
            <p className="about-text" id="dark"> As a developer who loves creating things; my background deviates from one of a traditional business student, empowering me to attack problems through multiple perspectives, sync well with cross-functional teams and hold a deep understanding in what makes an exemplary product.</p>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default About;
