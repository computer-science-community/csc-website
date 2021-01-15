import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../common/ProfileCard';
import Giovana from '../assets/ambassadors/giovana.jpg';
import Art from '../assets/ambassadors/art.jpg';

import './PillarsPage.css';

function Mentoring() {
  return (
    <Container className="pillars">
      <h1 className="pillar-h1">Mentoring</h1>
      <p className="large-p">
        Mentoring Pillar things
      </p>
      <Row>
        <Col><ProfileCard name="Giovana (Gih) Puccini" pronouns="She/Her/Hers" image={Giovana} /></Col>
        <Col><ProfileCard name="Artem (Art) Pugachev" pronouns="He/Him/His" image={Art} /></Col>
      </Row>
    </Container>
  );
}

export default Mentoring;
