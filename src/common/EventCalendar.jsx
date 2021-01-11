import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, ListGroup, Row, Col,
} from 'react-bootstrap';

function EventCalendar({ events }) {
  const dateOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };

  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  return (
    <ListGroup>
      {events.map((item) => (
        <ListGroup.Item action href={item.link} key={item.id} target="_blank">
          <Container>
            <Row>
              <Col><strong>{item.name}</strong></Col>
              <Col><strong>{`${`${item.date.toLocaleString('en-US', dateOptions)} - ${item.date.toLocaleString('en-US', timeOptions)}`}`}</strong></Col>
            </Row>
            <Row>
              <Col>{item.description}</Col>
            </Row>
          </Container>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

EventCalendar.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    pillar: PropTypes.string,
  })).isRequired,
};

export default EventCalendar;
