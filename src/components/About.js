import '../index.css';
import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Images
import code from './files/about-code-updated.svg'


const About = () => {
  return (
    <React.Fragment>
      <a id="about"></a>
      <Row className="about-wrapper">
        <Col xs={6} className="d-none d-md-block">
          <div className="about-image">
            <img src={code} alt=""></img>
          </div>
        </Col>
        <Col md={6} xs={12}>
          <div className="about-content">
            <h2> Bridging the gap. </h2>
            <p className="about-text" id="dark"> As a business student with a passion for technology and software engineering, I love creating things - placing me in a unique position to attack problems through multiple perspectives, sync-well in cross functional teams, and hold a deep understanding in what makes an exemplary product.</p>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default About;
