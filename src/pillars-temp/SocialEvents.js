
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../common/ProfileCard.js';
import './PillarsPage.css';

function SocialEvents() {
    return(
        <Container className="pillars">
            <h1 className="pillar-h1">Social Events</h1>
            <p className="large-p">Social events things
            </p>
            <Row>
                <Col><ProfileCard name="Susan Rocks"/></Col>
            </Row>
        </Container>
    );
}

export default SocialEvents;