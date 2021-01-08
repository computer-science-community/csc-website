import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about">
      <Container>
        <Row>
          <h1 className="about-h1 first">Who We Are</h1>
          <p className="about-p">
            We are a community of students within the Computer
            Science Department. We strive to help another and build each other up. This
            shines through our pillars: Mentoring, Competitive Coding, Exam Review, Research,
            Social Events, and Career Preperation.

          </p>
        </Row>
        <Row>
          <h1 className="about-h1">Our Mission</h1>
          <p className="about-p">
            “The purpose of the CSC is to foster a community for RIT&apos;s
            computing students and provide them with the resources and skills necessary to
            succeed, both academically and professionally.”

          </p>
        </Row>
        <Row>
          <h1 className="about-h1">What We Do</h1>
          <p className="about-p last">
            We hold events related to each pillar and offer a space to
            study or meet new people. Currently, all of our meetings occur virtually. For the
            Spring of 2021, our active pillars are: Mentoring, Competitive Coding, and Social Events
            . More informations on pillars and their heads are in the pillar tab.

          </p>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;
