import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../common/ProfileCard';
import Giovana from '../assets/ambassadors/giovana.jpg';
import Art from '../assets/ambassadors/art.jpg';
import './PillarsPage.css';

function Coaching() {
  return (
    <Container className="pillars">
      <h1 className="pillar-h1">Coaching</h1>
      <p className="large-p">
        Getting started in the computer science industry is not an easy task,
        but we are here to help. The purpose of this pillar is to provide
        students with the opportunity to be coached by upper classmates students
        who can help them succeed within the department and eventually in
        industry. Coaches should also benefit from this program, as they will
        have a chance to develop their leadership skills and create new
        connections, all while helping newcomers navigate the same challanges
        they have gone through.
      </p>
      <h4>Signing Up</h4>
      <p className="large-p">
        If you wish to sign-up to be a coach or a newcomer please fill
        <a href="https://forms.gle/F81XoxTXU2McLXUt8"> this form</a>
      </p>
      <h4>Pillar Heads:</h4>
      <Row>
        <Col>
          <ProfileCard
            name="Giovana (Gih) Puccini"
            pronouns="She/Her/Hers"
            image={Giovana}
          />
        </Col>
        <Col>
          <ProfileCard
            name="Artem (Art) Pugachev"
            pronouns="He/Him/His"
            image={Art}
          />
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default Coaching;
