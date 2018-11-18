import React from "react";
import "./WebDevelopment.css";
import { Container, Col, Row } from "reactstrap";

const WebDevelopment = () => {
    return (
        <div>
             <br></br><br></br>
            <h1 className="webTitle">Web Development</h1>
            <br></br><br></br> <br></br><br></br>
            <h4 className="webSub">Front-End</h4>
            <br></br><br></br>
            <Container>
                <Row>
                    <img alt="React" className="react" src={require("../../img/React_logo_wordmark.png")} />
                    </Row>
            </Container>
            <br></br><br></br> <br></br><br></br>
            <h4 className="webSub">Back-end</h4>

<Container>
    <Row>
        <Col>
        <img alt="Node.js Node" className="node" src={require("../../img/node.png")} />
        </Col>
        <Col>
        <img alt="PHP" className="php" src={require("../../img/php.png")} />
        </Col>
        <Col>
        <img alt="Python" className="node" src={require("../../img/python.png")} />
        </Col>
    </Row>
</Container>
             



        </div>
    )
}

export default WebDevelopment;