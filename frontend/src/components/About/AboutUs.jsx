import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-us">
      <Container>
        <Row className="intro-section mb-2 mt-5">
          <Col>
            <h1 id='heading-about-us' className="text-center text-danger">About Me</h1>
            <p className="lead text-center">
              Hello! I'm Subhadip Kundu, a final year B.Tech student at Mallabhum Institute of Technology
              with a passion for web development and technology. Currently, I'm immersed in an exciting
              project using the MERN stack—building a full-stack ToDo list application.
            </p>
          </Col>
        </Row>

        <Row className="project-section">
          <Col>
            <h2 className="section-header">My Project: MERN Stack ToDo List</h2>
            <p>
              As part of my academic journey, I've embarked on the development of a full-stack ToDo list
              application using the MERN stack. This project showcases my proficiency in the following
              technologies:
            </p>
            <ul className="list-unstyled">
              <li>MongoDB: A NoSQL database for storing task data.</li>
              <li>Express.js: A Node.js framework for building the backend server.</li>
              <li>React: A JavaScript library for building the user interface.</li>
              <li>Node.js: A JavaScript runtime for server-side development.</li>
            </ul>
            <p>
              Through this project, I aim to demonstrate my skills in both frontend and backend development,
              as well as my ability to create a cohesive and functional full-stack application.
            </p>
          </Col>
        </Row>

        <Row className="contact-section ">
          <Col>
            <h2 className="section-header">Get in Touch</h2>
            <p>
              Feel free to connect with me via the following channels:
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone /> <span className="contact-label">Phone:</span> <a href="tel:+9134244136">+91 9134244136</a>
              </div>
              <div className="contact-item">
                <FaEnvelope /> <span className="contact-label">Email:</span> <a href="mailto:Subhadipkundu106@gmail.com">Subhadipkundu106@gmail.com</a>
              </div>
              <div className="contact-item">
                <FaGithub /> <span className="contact-label">GitHub:</span> <a href="https://github.com/subhadip-kundu" target="_blank" rel="noopener noreferrer">github.com/subhadip-kundu</a>
              </div>
              <div className="contact-item">
                <FaLinkedin /> <span className="contact-label">LinkedIn:</span> <a href="https://www.linkedin.com/in/subhadip-kundu/" target="_blank" rel="noopener noreferrer">linkedin.com/in/subhadip-kundu</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
