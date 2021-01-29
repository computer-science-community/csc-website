import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../common/ProfileCard';
import Ayush from '../assets/ambassadors/ayush.jpg';
import Mayo from '../assets/ambassadors/mayo.JPG';
import './PillarsPage.css';

function PillarsHome() {
  return (
    <Container className="pillars">
      <h1 className="pillar-h1">What is a pillar?</h1>
      <p className="large-p">
        A pillar is a commitee of officers in charge of organizing events for
        the community. The Computer Science Community stands over three pillars:
        Competitive Coding, Coaching, and Social Events. Every pillar has a
        unique focus and leadership, an they all host events for both new and
        experienced members. Regardless of their focus, every pillar exists to
        lift up members of the community in different ways by providing ways to
        grow together.
      </p>
      <p className="large-p">
        Every pillar is led by one or more Computer Science Ambassador, but
        they&apos;re supported by every member of the community. As a member of
        the community, you can attend events hosted by any of the pillars, but
        we encourage you to try all of them! Check out the rest of this page to
        learn more about every Pillar.
      </p>
      <br />
      <h4>Getting in Contact</h4>
      <p className="large-p">
        If you want to learn even more about a pillar or would like to help
        organize events, please contact the apropriate person using our contact
        us page. For information on how to become an officer contact Mayo Olojo.
        If you have questions about financials, contact Ayush Goel.
      </p>
      <Row sm={2} xs={1}>
        <Col>
          <ProfileCard
            name="Oluwamayowa (Mayo) Olojo - President"
            pronouns="She/Her/Hers"
            image={Mayo}
          />
        </Col>
        <Col>
          <ProfileCard
            name="Ayush Goel - Treasurer"
            pronouns="He/Him/His"
            image={Ayush}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default PillarsHome;
