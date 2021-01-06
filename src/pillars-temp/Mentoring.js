
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../common/ProfileCard';
import './PillarsPage.css';

function Mentoring() {
    return(
        <Container className="pillars">
            <h1 className="pillar-h1">Mentoring</h1>
            <p className="large-p">Mentoring Pillar thingies    
            </p>
            <Row>
                <Col><ProfileCard name="Giovana Puccini"/></Col>
            </Row>            
        </Container>
    );
}

export default Mentoring;