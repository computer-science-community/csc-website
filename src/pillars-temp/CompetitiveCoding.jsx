import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../common/ProfileCard';
import EventCalendar from '../common/EventCalendar';
// import Yan from '../assets/ambassadors/yan.jpg';
import Placeholder from '../assets/ambassadors/placeholder.png';
import './PillarsPage.css';

function CompetitiveCoding() {
  const dummyEvents = [
    {
      id: 1,
      name: 'CodeSignal Workshop',
      date: new Date(2021, 0, 30, 15, 0, 0),
      description: 'Learn how to make your own tasks with well-designed tests',
      link: 'https://campusgroups.rit.edu/',
    },
    {
      id: 2,
      name: 'Newbie Tournament',
      date: new Date(2021, 1, 6, 20, 0, 0),
      description: 'Tired of upperclasmates taking your spotlight? Come compete against other first years in a CodeSignal tournament!',
      link: 'https://cs.rit.edu/',
    },
    {
      id: 3,
      name: 'Preping for HackerRank Skill Certification Tests',
      date: new Date(2021, 1, 13, 20, 0, 0),
      description: 'Learn how to prepare for HackerRank\' Skill Certification Tests to show off your skill to potential employers',
      link: 'https://rit.edu/',
    },
    {
      id: 4,
      name: 'February Tournament',
      date: new Date(2021, 1, 27, 20, 0, 0),
      description: 'Join us for this month\'s tournament and show us what you got. Maybe this time you\'ll make the leaderboard!',
      link: 'https://codesignal.com/',
    },
  ];
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
        <Col><ProfileCard name="Yancarlos Diaz" pronouns="He/Him/His" image={Placeholder} /></Col>
        <Col><ProfileCard name="Dade Wood" image={Placeholder} /></Col>
      </Row>
      <br />
      <h4>Upcoming Events:</h4>
      <EventCalendar events={dummyEvents} />
    </Container>
  );
}

export default CompetitiveCoding;
