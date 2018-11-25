import React from "react";
import "./About.css";
import BounceScroll from "../../components/BounceScroll";
import { Container, Row, Col } from "reactstrap";

const About = () => {
    return (
        <div id="aboutPage" className="about">
            <Row>
                <h1 className="aboutTitle">What We Do</h1>
            </Row>
            <Col>
                <p className="aboutBody">{`
    Logik Platforms provides industry-leading natural 
language processing, machine learning, text analytics,
and AI-powered search capabilities at scale that aims 
to help clients with cloud-based big data processing.
While we pride ourselves in dynamic logic and processing,
we top our work off with a beautiful and interactive 
application and web design. 
`}</p><p className="slogan">
                    {`Logik delivers on automating your company's wildest goals!`}</p>
            </Col>
        </div>
    )
}


export default About;