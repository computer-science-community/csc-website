import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../common/ProfileCard';
import Placeholder from '../assets/ambassadors/placeholder.png';
import './PillarsPage.css';

function PillarsHome() {
  return (
    <Container className="pillars">
      <h1 className="pillar-h1">What is a pillar?</h1>
      <p className="large-p">
        A pillar is a commitee of officers in charge of organizing events for the community.
        The Computer Science Community stands over three pillars:
        Competitive Coding, Mentoring, and Social Events.
        Every pillar has a unique focus and leadership,
        an they all host events for both new and experienced members.
        Regardless of their focus, every pillar exists to lift up members
        of the community in different ways by providing ways to grow together.
      </p>
      <p className="large-p">
        Every pillar is led by one or more Computer Science Ambassador,
        but they&apos;re supported
        by every member of the community. As a member of the community,
        you can attend events hosted by any of the pillars,
        but we encourage you to try all of them!
        Check out the rest of this page to learn more about every Pillar.
      </p>
      <br />
      <h4>Getting in Contact</h4>
      <p className="large-p">
        If you want to learn even more about a pillar or would like to help organize events,
        please contact the apropriate person using our contact us page.
        For information about financials or marketing contact Ayush or Mayo, respectively.
      </p>
      <Row sm={2} xs={1}>
        <Col><ProfileCard name="Ayush Goel" pronouns="He/Him/His" image={Placeholder} /></Col>
        <Col><ProfileCard name="Oluwamayowa Olojo" pronouns="She/Her/Hers" image={Placeholder} /></Col>
      </Row>
    </Container>
  );
}

export default PillarsHome;
