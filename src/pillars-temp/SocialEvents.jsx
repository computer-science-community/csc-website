import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../common/ProfileCard';
import './PillarsPage.css';
import Placeholder from '../assets/ambassadors/placeholder.png';

function SocialEvents() {
  return (
    <Container className="pillars">
      <h1 className="pillar-h1">Social Events</h1>
      <p className="large-p">
        Social events things
      </p>
      <Row>
        <Col><ProfileCard name="Susan Rocks" image={Placeholder} /></Col>
      </Row>
    </Container>
  );
}

export default SocialEvents;
