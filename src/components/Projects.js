import '../index.css';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Icons
import { GithubFill, LinkedInV1Fill } from 'akar-icons';

const Projects = () => {
  const projects = [
    {
      name: "Webumé",
      description: "Helping students get internships, by automating the creation of web-based resumés with Python (Django).",
      link: "https://webume.ca",
    },
    {
      name: "Equity Flow",
      description: "Developing a SaaS product for private equity funds to streamline deal flow by automating capital call notices with React.",
      link: "",
    },
    {
      name: "Financial Data",
      description: "Calculates over 25 financial ratios for technical analysis using data scraped from Market Watch and the Alpha Vantage API with Python (Django)",
      link: "https://haiderzaidi.ca/financial-ratios",
    },
    {
      name: "Twitter Clone",
      description: "Built a Twitter clone featuring OAuth2, tweets, likes, retweets, link recognition and spam filters with React.",
      link: "https://haiderzaidi.ca/assignment-tracker"
    },
    {
      name: "Schulich Assignment Tracker",
      description: "Automating the creation of calendar-spreadsheets for students to keep track of assignments using Python (Django)",
      link: "https://haiderzaidi.ca/assignment-tracker"
    },
    {
      name: "Stack Size",
      description: "Programmed an iOS app for gamers to calculate their stack size in poker with React-Native.",
      link: "https://github.com/HaiderZaidiDev/stacksize",
    },
  ]
  return (
    <React.Fragment>
      <a id="projects"></a>
      <Row className="projects-wrapper">
        <Col  md={5} xs={12}>
          <div className="projects-header">
            <h2> Projects </h2>
            <p> “For the things we have to learn before we can do them, we learn by doing them.” (Aristotle) </p>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <ProjectItem
                name={project.name}
                description={project.description}
                link={project.link}
                />

            ))}
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}

const ProjectItem = (props) => {
  return (
    <React.Fragment>
      <div className="project-item">
        {props.link
          ? <a href={props.link} target="_blank"><h3>{props.name}</h3></a>
          : <h3>{props.name}</h3>
        }
        <p>{props.description}</p>
      </div>
    </React.Fragment>
  );
}

export default Projects;
