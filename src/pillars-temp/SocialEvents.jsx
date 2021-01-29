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
        Coding isn&apos;t everything.
        We all need to take time to have fun and spend time with friends.
        The Social Pillar&apos;s goal is to ensure that all community members
        have a place and time to do just that!
      </p>

      <h4>Pillar Heads:</h4>

      <p className="large-p">
        This pillar doesn&apos;t have a head yet. Maybe you should step up!
      </p>
      <Row>
        <Col><ProfileCard name="Your Name Here" image={Placeholder} /></Col>
      </Row>
    </Container>
  );
}

export default SocialEvents;
