import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../common/ProfileCard';
import Placeholder from '../assets/ambassadors/placeholder.png';

import './PillarsPage.css';

function Mentoring() {
  return (
    <Container className="pillars">
      <h1 className="pillar-h1">Mentoring</h1>
      <p className="large-p">
        Mentoring Pillar things
      </p>
      <Row>
        <Col><ProfileCard name="Giovana Puccini" image={Placeholder} /></Col>
      </Row>
    </Container>
  );
}

export default Mentoring;