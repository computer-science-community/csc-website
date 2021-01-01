import { Container, Row, Col } from "react-bootstrap";
import './HomePage.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function HomePage() {
    return (
        <div className="home">
            <Container>
                <Row className="banner">
                    <Col>
                        <h1>Computer Science Community</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardDeck>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Monthly Challenge</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer. This is a wider 
                                        card with supporting text below as a natural lead-in to additional content. 
                                        This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Upcoming Events</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer. This is a wider 
                                        card with supporting text below as a natural lead-in to additional content. 
                                        This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>News</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer. This is a wider 
                                        card with supporting text below as a natural lead-in to additional content. 
                                        This content is a little bit longer.
                                    </Card.Text>
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