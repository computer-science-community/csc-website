import { Container, Row, Col } from 'react-bootstrap';
import './ContactUsPage.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

// this function populates the readonly text field with the corresponding email
// address from the dropdown list in the form
function emailSelect() {
  const emailDic = {
    'General CSC Email': 'csambassador@cs.rit.edu',
    'GCCIS CS Department': 'csdept@cs.rit.edu',
    'Research Pillar': 'csambassador@cs.rit.edu',
    'Competitive Coding Pillar': 'csambassador@cs.rit.edu',
    'Coaching Pillar': 'csambassador@cs.rit.edu',
    'Career Prep Pillar': 'csambassador@cs.rit.edu',
    'Exam Review Pillar': 'csambassador@cs.rit.edu',
    'Social Events Pillar': 'csambassador@cs.rit.edu',
  };
  const e = document.getElementById('selected');
  let displayText = '';
  if (e) {
    displayText = emailDic[e.options[e.selectedIndex].text];
    document.getElementById('dis_email').value = displayText;
  }
}

function ContactUsPage() {
  // hands the validity for the form, to make sure that all imputs are filled
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  // ^^^^^^^^^^^^^^

  return (
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
                  <Form.Control
                    required
                    type="email"
                    placeholder="name@example.com"
                  />
                </Form.Group>
                <Form.Group id="emailto">
                  <Form.Label>Send To</Form.Label>
                  <Form.Control
                    as="select"
                    id="selected"
                    onChange={emailSelect}
                  >
                    <option>General CSC Email</option>
                    <option>GCCIS CS Department</option>
                    <option>Research Pillar</option>
                    <option>Competitive Coding Pillar</option>
                    <option>Coaching Pillar</option>
                    <option>Career Prep Pillar</option>
                    <option>Exam Review Pillar</option>
                    <option>Social Events Pillar</option>
                  </Form.Control>
                  <Form.Control
                    type="text"
                    value="csambassador@cs.rit.edu"
                    id="dis_email"
                    readOnly
                  />
                </Form.Group>
                <Form.Group id="emailsubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Topic of Discussion"
                  />
                </Form.Group>
                <Form.Group id="emailbody">
                  <Form.Label>Body</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={6}
                    placeholder="Please enter a message here..."
                  />
                </Form.Group>
                <Button
                  className="float-right"
                  variant="danger"
                  type="submit"
                  size="lg"
                >
                  Submit
                </Button>
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
