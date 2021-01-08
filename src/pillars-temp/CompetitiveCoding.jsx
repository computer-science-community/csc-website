import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../common/ProfileCard';
import Yan from '../assets/ambassadors/yan.jpg';
import Placeholder from '../assets/ambassadors/placeholder.png';
import './PillarsPage.css';

function CompetitiveCoding() {
  return (
    <Container className="pillars">
      <h1 className="pillar-h1">Competitive Coding</h1>
      <p className="large-p">
        Problem solving is an essential skill in Computer Science.
        This Pillar aims to provide the community with opportunities
        to hone their problem solving skills.
        The Competitive Coding Pillar, as its name implies,
        also brings a competitive edge to the table
        with coding competitions that will test your ability
        to solve new problems and to think outside the box.
      </p>
      <p className="large-p">
        If you&apos;re looking to be the very best,
        try one of our tournaments for a chance
        to win prices and a bragging spot on this website!
        For those who are not interested in coding to win,
        this pillar still provides an opportunity to practice
        for technical interviews and learn from more experienced
        members of the community.
      </p>
      <br />

      <h4>Pillar Heads:</h4>
      <Row sm={2} xs={1}>
        <Col><ProfileCard name="Yancarlos Diaz" pronouns="He/Him/His" image={Yan} /></Col>
        <Col><ProfileCard name="Dade Wood" image={Placeholder} /></Col>
      </Row>
      <br />
      <h4>Upcoming Events:</h4>
    </Container>
  );
}

export default CompetitiveCoding;
