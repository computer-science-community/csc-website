import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HomePage.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import EventCalendar from '../common/EventCalendar';
import Robin from '../assets/ambassadors/robin.jpg';
import ProfileCard from '../common/ProfileCard';

function HomePage() {
  const dummyEvents = [
    {
      id: 1,
      name: 'CodeSignal Workshop',
      date: new Date(2021, 0, 30, 15, 0, 0),
      link: 'https://campusgroups.rit.edu/',
    },
    {
      id: 2,
      name: 'Newbie Tournament',
      date: new Date(2021, 1, 6, 20, 0, 0),
      link: 'https://cs.rit.edu/',
    },
    {
      id: 3,
      name: 'Preping for HackerRank Skill Certification Tests',
      date: new Date(2021, 1, 13, 20, 0, 0),
      link: 'https://rit.edu/',
    },
    {
      id: 4,
      name: 'February Tournament',
      date: new Date(2021, 1, 27, 20, 0, 0),
      link: 'https://codesignal.com/',
    },
  ];
  return (
    <div className="home">
      <Container>
        <Row className="banner">
          <Col id="title-container">
            <h1 id="title">Computer Science Community</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Card Deck holds the three homepage articles of news, below the title banner */}
            <CardDeck>
              {/* Card for the Compettitve Coding Pillar's News */}
              <Card>
                <Card.Body>
                  <Card.Title>Upcoming Events</Card.Title>
                  <EventCalendar events={dummyEvents} />
                </Card.Body>
              </Card>
              {/* Card for the Social Upcoming Events (Social Pillar) */}
              <Card>
                <Card.Body>
                  <Card.Title>Featured Member</Card.Title>
                  <ProfileCard name="Robin Avenoso" pronouns="She/Her/Hers" image={Robin} />
                </Card.Body>
              </Card>
              {/* Card for the Golisano Wide News (Ambassadors) */}
              <Card>
                <Card.Body>
                  <Card.Title>Featured Project</Card.Title>
                  <p className="large-p">
                    <strong>Critical Reminders: </strong>
                    A Chrome Extension that finds all your
                    assignments and quizzes on my courses and compiles it into
                    a calendar file that can be imported into any standard
                    calendar app.
                  </p>
                  <a className="large-p" href="https://github.com/SI-Squad/Zoom-a-loom">Github repo</a>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
