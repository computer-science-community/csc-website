import React from 'react';
import { Container } from 'react-bootstrap';
import './PillarsPage.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PillarsHome from './PillarsHome';
import CompetitiveCoding from './CompetitiveCoding';
import Coaching from './Coaching';
import SocialEvents from './SocialEvents';

function PillarsPage() {
  return (
    <Container>
      <br />
      <Tabs
        transition={false} // Transition causes a deprecation warning
        defaultActiveKey="home"
        id="pillars-tabs"
      >
        <Tab eventKey="home" title="Home">
          <PillarsHome />
        </Tab>
        <Tab eventKey="code" title="Competitive Coding">
          <CompetitiveCoding />
        </Tab>
        <Tab eventKey="coaching" title="Coaching">
          <Coaching />
        </Tab>
        <Tab eventKey="social" title="Social Events">
          <SocialEvents />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default PillarsPage;
