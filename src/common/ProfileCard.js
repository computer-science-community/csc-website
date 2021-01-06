
import { Card } from 'react-bootstrap';

function ProfileCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={"" + props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.pronouns}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProfileCard;