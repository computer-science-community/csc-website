import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about">
      <Container>
        <Row>
          <h1 className="about-h1 first">About us</h1>
          <p className="about-p">
            The purpose of the CSC is to foster a community for RIT&apos;s
            computing students and provide them with the space,
            resources, and skills necessary to thrive socially, academically, and professionally.
            The CSC is open to all RIT students interested in computer science,
            regardless of their major.
          </p>
          <p className="about-p">
            The CSC stands over three Pillars: Competitive Coding, Coaching, and Social Events.
            Every pillar is overseen by one or more officers.
            While the specific focus of every pillar may change over time,
            their goal will always be to achieve the organization’s purpose.
            For more informations on pillars and their heads, visit the pillars page.
          </p>
          <p className="about-p last">
            General meetings will be held weekly.
            All community members are invited to general meetings.
            Officer meetings will also be held weekly at a different time.
            Other meetings and events will be scheduled
            on an ad hoc basis to maximize member participation.
            Currently, all of our events will occur virtually.
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;
