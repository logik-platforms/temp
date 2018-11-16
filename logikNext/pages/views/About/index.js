import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./About.css";

class About extends Component {
render() {
    return (
      <div className="aboutContainer">
        <div className="about">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <code>
              <h1 className="aboutTitle">Logik Platforms</h1>
    <p className="aboutBody">{`
    Logik Platforms provides industry-leading natural 
language processing, machine learning, text analytics,
and AI-powered search capabilities at scale that aims 
to help clients with cloud-based big data processing.
While we pride ourselves in dynamic logic and processing,
we top our work off with a beautiful and interactive 
application and web design. 
`}</p><p className="slogan">
{`Logik delivers on automating your companies wildest goals!`}</p></code>
            </Col>
          </Row>
          </Grid>
        </div>
        </div>
        )
}}


export default About;