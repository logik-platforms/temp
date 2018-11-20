import React from "react";
import { Col, Row, Container } from "reactstrap";
import "./MobileAppDev.css";

const MobileAppDev = () => {
    return (
        <div>
            <h1>Mobile Applicaiton Development</h1>
        <Container>
            <Row>
            <h4>We Develop native apps for iPhone, iPad</h4>
            </Row>
      
            <Row>
                <Col>
                <img alt="IOS Apple" className="ios" src={require("../../img/ios.png")} />
                </Col>
            <Col>
                    <img alt="Swift" className="swift" src={require("../../img/swift.png")} />
                    </Col>
                  <Col>
                    <img alt="React Native" className="reactnative" src={require("../../img/reactnative.png")} />
                    </Col>
                    </Row>
<Row>

            <h4>We develop native apps for Android phone &amp; tablets</h4>
</Row>
            <Row>
                <Col>
                <img alt="Android" className="android" src={require("../../img/android.png")} />
                </Col>
                <Col>
                <img alt="Java" className="java" src={require("../../img/java.png")} />
                </Col>
                 <Col>
                 <img alt="React Native" className="reactnative" src={require("../../img/reactnative.png")} />
                 </Col>
                   </Row>
            </Container>
        </div>
    )
}

export default MobileAppDev;