
import { Container, Row, Col} from 'react-bootstrap';
import ProfileCard from '../common/ProfileCard.js';
import Yan from '../assets/ambassadors/diaz-picture.jpg'
import './PillarsPage.css';

function CompetitiveCoding() {
    return(
        <Container className="pillars">
            <h1 className="pillar-h1">Competitive Coding</h1>
            <p className="large-p">Problem solving is an essential skill in Computer Science. 
            This Pillar aims to provide the community with opportunities to hone their problem solving skills.
            The Competitive Coding Pillar, as its name implies, also brings a competitive edge to the table
            with coding competitions that'll test your ability to think on your feet and to think outside the box.
            </p>
            
            <h4>Pillar Heads:</h4>
            <Row sm={2} xs={1}>
                <Col><ProfileCard name="Yancarlos Diaz" pronouns="He/Him/His" image={Yan}/></Col>
                <Col><ProfileCard name="Dade Wood"/></Col>
            </Row>
        </Container>
    );
}

export default CompetitiveCoding;