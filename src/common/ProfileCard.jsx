import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function ProfileCard({ name, pronouns, image }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${image}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{pronouns}</Card.Text>
      </Card.Body>
    </Card>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  pronouns: PropTypes.string,
};

ProfileCard.defaultProps = {
  pronouns: ' ',
};

export default ProfileCard;
