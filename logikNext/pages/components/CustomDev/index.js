import React from "react";
import {Container, Row, Col } from "reactstrap";
import "./CustomDev.css";

const CustomDev = () => {
    return (
        <div>
            <h1>Custom Software Development</h1>
            <Container>
                <Row>
                <Col>
                <img alt="Python" className="python" src={require("../../img/python.png")} />
                </Col>
                <Col>
                <img alt="Java" className="java" src={require("../../img/java.png")} />
                </Col>
                <Col>
                <img alt="Node" className="nodejs" src={require("../../img/nodejs.png")} />
                </Col>
                </Row>
                <Row>
                    <Col>
                    <img alt="Go Lang" className="golang" src={require("../../img/golang.png")} />
                    </Col>
                    <Col>
                    <img alt="Swift" className="swift" src={require("../../img/swift.png")} />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default CustomDev;