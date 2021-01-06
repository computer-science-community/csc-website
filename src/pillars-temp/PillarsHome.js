
import { Container} from 'react-bootstrap';
import './PillarsPage.css';

function PillarsHome() {
    return(
        <Container className="pillars">
            <h1 className="pillar-h1">What is a Pillar?</h1>
            <p className="large-p">A Pillar is a commitee of officers in charge of organizing events for the community.
                The Computer Science Community stands over three pillars: Competitive Coding, Mentoring, and Social Events. 
                Regardless of their focus, every pillar exists to lift up members of the community in different ways by
                providing ways to grow together.    
            </p>
            <p className="large-p">Every Pillar is lead by one or more Computer Science Ambassador, but they're supported
                by every member of the community. Check out the rest of this page to learn more about every Pillar.

            </p>
        </Container>
    );
}

export default PillarsHome;