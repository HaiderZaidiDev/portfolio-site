import '../index.css';
import React from 'react';

/* Bootstrap Components */
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/* External Libraries */
import Fade from 'react-reveal/Fade';

/* Project Thumbnails */
import Placeholder from './files/placeholder.jpeg'
import SteeringWheel from './files/steering-wheel.png'
import Webume from './files/webume.png'
import FinancialData from './files/financial-data.png'
import TwitterClone from './files/twitter-clone.png'
import AssignmentTracker from './files/assignment-tracker.png'
import Keywords from './files/keywords.png'
import DonateMask from './files/donatemask.png'
import GetTranscript from './files/gettranscript.png'


// Icons
import { GithubFill, LinkedInV1Fill } from 'akar-icons';

const Projects = () => {
  const projects = [
    {
      name: "Donate Mask",
      description: "to donate and request face masks using React, Node.js, MongoDB, and Stripe. Donated 100k+ Masks.",
      image: DonateMask,
      link: "https://donatemask.ca",
    },
    {
      name: "YouTube Accessibility - Transcribe, Translate, Summarize",
      description: "Tackles accessibility issues on YouTube by transcribing, translating, and summarizing videos, made with Python (Flask) and React.js",
      image: GetTranscript,
      link: "https://gettranscript.ca",
    },
    {
      name: "Virtual (AR) Steering Wheel",
      description: "Created an augemented reality steering wheel with Python (OpenCV) and machine learning models from Mediapipe",
      image: SteeringWheel,
      link: "https://github.com/HaiderZaidiDev/virtual-ml-steering-wheel",
    },
    {
      name: "Job Listing Keyword Scanner",
      description: "Helps job-seekers optimize their resume by using artiifcal intelligence (NLP) to scan keywords in a job listing.",
      image: Keywords,
      link: "https://haiderzaidi.ca/keywords",
    },
    {
      name: "Webumé",
      description: "Helping students get internships, by automating the creation of web-based resumés with Python (Django).",
      image: Webume,
      link: "https://webume.ca",
    },
    {
      name: "Financial Data",
      description: "Calculates over 25 financial ratios using data scraped from Market Watch and the Alpha Vantage API with Python (Django)",
      image: FinancialData,
      link: "https://haiderzaidi.ca/financial-ratios",
    },
    {
      name: "Twitter Clone",
      description: "Built a Twitter clone featuring OAuth2, tweets, likes, retweets, link recognition and spam filters with React.",
      image: TwitterClone,
      link: "https://haiderzaidi.ca/twitter-react"
    },
    {
      name: "Schulich Assignment Tracker",
      description: "Automating the creation of calendar-spreadsheets for students to keep track of assignments using Python (Django).",
      image: AssignmentTracker,
      link: "https://haiderzaidi.ca/assignment-tracker"
    },
  ]
  return (
    <React.Fragment>
      <a id="projects"></a>
      <Row className="projects-wrapper">
        <Col xs={10}>
          <Fade cascade>
            <div className="projects-header">
              <h2> Projects </h2>
              <p> “For the things we have to learn before we can do them, we learn by doing them.” (Aristotle) </p>
            </div>
          </Fade>
          <Fade cascade>
            <Row className="projects ">
              {projects.map((project, index) => (
                <Project
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  />

              ))}
            </Row>
          </Fade>
        </Col>
      </Row>
    </React.Fragment>
  );
}

const Project = (props) => {
  return (
    <React.Fragment>
      <Col xs={12} md={4}>
          <a href={props.link} target="_blank">
            <div className="project" style={{background: `url(${props.image})`, backgroundSize: 'cover'}}>
            <div className="project-desc">
              <a href={props.link} target="_blank"><h3>{props.name}</h3></a>
              <p>{props.description}</p>
            </div>
          </div>
          </a>
      </Col>
    </React.Fragment>
  );
}

export default Projects;
