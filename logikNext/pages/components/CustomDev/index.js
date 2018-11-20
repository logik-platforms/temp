import React from "react";
import {Container, Row, Col } from "reactstrap";
import "./CustomDev.css";

const CustomDev = () => {
    return (
        <div>
           <Row>
           <h1 className="customSD">Custom Software Development</h1>
           </Row>

            <Container>
                <Row>
                <Col>
                <img alt="Python" className="pythoncsd" src={require("../../img/python.png")} />
                </Col>
                <Col>
                <img alt="Java" className="javacsd" src={require("../../img/java.png")} />
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
                    <img alt="Swift" className="swifticon" src={require("../../img/swift.png")} />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default CustomDev;