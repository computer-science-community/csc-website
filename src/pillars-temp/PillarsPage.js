import { Container } from "react-bootstrap";
import './PillarsPage.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PillarsHome from './PillarsHome.js';
import CompetitiveCoding from './CompetitiveCoding.js';
import Mentoring from './Mentoring.js';
import SocialEvents from './SocialEvents.js';

function PillarsPage() {
    return(
        <Container>
            <br />
            <Tabs
                transition={false} // Transition causes a deprecation warning
                defaultActiveKey="home"
                id="pillars-tabs"
                >
                <Tab eventKey="home" title="Home">
                    <PillarsHome />
                </Tab>
                <Tab eventKey="code" title="Competitive Coding">
                    <CompetitiveCoding />
                </Tab>
                <Tab eventKey="mentoring" title="Mentoring">
                    <Mentoring />
                </Tab>
                <Tab eventKey="social" title="Social Events">
                    <SocialEvents />
                </Tab>
            </Tabs>
        </Container>
    );
}

export default PillarsPage;