import { Container, Row, Col } from "react-bootstrap";
import './ContactUsPage.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactUsPage() {
    return(
        <Container className="contact">
            <Row>
                <Col>
                    <br />
                    {/* Card is to create a nice container for the form */}
                    <Card className="about-card" border="danger">
                        <Card.Body>
                            <Card.Title>Contact Us</Card.Title>
<<<<<<< HEAD
                            <Card.Text>
                                {/* Contact form starts here */}
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Form.Group controlId="emailfrom">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control required type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group controlId="emailto">
                                        <Form.Label>Send To</Form.Label>
                                        <Form.Control as="select">
                                        <option>General CSC Email</option>
                                        <option>GCCIS CS Department</option>
                                        <option>Research Pillar</option>
                                        <option>Competitive Coding Pillar</option>
                                        <option>Mentoring Pillar</option>
                                        <option>Career Prep Pillar</option>
                                        <option>Exam Review Pillar</option>
                                        <option>Social Events Pillar</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="emailsubject">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control required type="text" />
                                    </Form.Group>
                                    <Form.Group controlId="emailbody">
                                        <Form.Label>Body</Form.Label>
                                        <Form.Control required as="textarea" rows={6} />
                                    </Form.Group>
                                    <Button className="float-right" variant="danger" type="submit" size="lg">Submit</Button>
                                </Form>
                                {/* Contact form ends here */}
                            </Card.Text>
=======
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Example select</Form.Label>
                                    <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label>Example multiple select</Form.Label>
                                    <Form.Control as="select" multiple>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button className="float-right" variant="danger" type="submit" size="lg">Submit</Button>
                            </Form>
                            {/* Contact form ends here */}
>>>>>>> origin/main
                        </Card.Body>
                    </Card>
                    <br />
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUsPage;