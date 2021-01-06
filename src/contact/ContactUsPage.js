import { Container, Row, Col } from "react-bootstrap";
import './ContactUsPage.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function emailSelect() {
    var d = document.getElementById("selected");
    var displayText = "";
    if (d) {
        displayText = d.options[d.selectedIndex].text;
        document.getElementById("dis_email").value = displayText;
    }
}

function ContactUsPage() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    return(
        <Container>
            <Row>
                <Col>
                    <br />
                    {/* Card is to create a nice container for the form */}
                    <Card className="about-card" border="danger">
                        <Card.Body>
                            <Card.Title>Contact Us</Card.Title>
                                {/* Contact form starts here */}
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Form.Group id="emailfrom">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control required type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group id="emailto">
                                        <Form.Label>Send To</Form.Label>
                                        <Form.Control as="select" id="selected" onChange={emailSelect}>
                                        <option>General CSC Email</option>
                                        <option>GCCIS CS Department</option>
                                        <option>Research Pillar</option>
                                        <option>Competitive Coding Pillar</option>
                                        <option>Mentoring Pillar</option>
                                        <option>Career Prep Pillar</option>
                                        <option>Exam Review Pillar</option>
                                        <option>Social Events Pillar</option>
                                        </Form.Control>
                                        <Form.Control type="text" value="General CSC Email" id="dis_email" readOnly />
                                    </Form.Group>
                                    <Form.Group id="emailsubject">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control required type="text" />
                                    </Form.Group>
                                    <Form.Group id="emailbody">
                                        <Form.Label>Body</Form.Label>
                                        <Form.Control required as="textarea" rows={6} />
                                    </Form.Group>
                                    <Button className="float-right" variant="danger" type="submit" size="lg">Submit</Button>
                                </Form>
                                {/* Contact form ends here */}
                        </Card.Body>
                    </Card>
                    <br />
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUsPage;