import { Container } from "react-bootstrap";
import './PillarsPage.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PillarsHome from './PillarsHome.js';

function PillarsPage() {
    return(
        <Container>
            <br />
            <Tabs
                defaultActiveKey="home"
                id="pillars-tabs"
                >
                {/* each Tab leads to it's respective pillar page (another js script that should be imported)
                    disabled implies that page is not accesible from the front end (Pillars that are not pushed forward are disabled at the moment) */}
                <Tab eventKey="home" title="Home">
                    <PillarsHome />
                </Tab>
                <Tab eventKey="research" title="Research" disabled>
                    <PillarsHome />
                </Tab>
                <Tab eventKey="code" title="Comptetitive Coding">
                    <PillarsHome />
                </Tab>
                <Tab eventKey="mentoring" title="Mentoring">
                    <PillarsHome />
                </Tab>
                <Tab eventKey="prep" title="Career Prep" disabled>
                    <PillarsHome />
                </Tab>
                <Tab eventKey="review" title="Exam Review" disabled>
                    <PillarsHome />
                </Tab>
                <Tab eventKey="social" title="Social Events">
                    <PillarsHome />
                </Tab>
            </Tabs>
        </Container>
    );
}

export default PillarsPage;