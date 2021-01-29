import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HomePage.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function HomePage() {
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
                </Card.Body>
              </Card>
              {/* Card for the Social Upcoming Events (Social Pillar) */}
              <Card>
                <Card.Body>
                  <Card.Title>Featured Member</Card.Title>
                </Card.Body>
              </Card>
              {/* Card for the Golisano Wide News (Ambassadors) */}
              <Card>
                <Card.Body>
                  <Card.Title>Featured Project</Card.Title>
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
