import React from "react";
import "./CustomDevelopment.css"
import { Col, Row } from "reactstrap";

const CustomDevelopment = () => {
    return (
        <div className="customDevelopment">
   <Row>
   <h1 className="customTitle">  Develop a Custom Software Solution </h1>
   </Row>
<Col>
<p className="customBody">{`
    Logik Platforms has the ability to develop custom solutions
    for a range of applications, including large databases, payment systems,
    and more.
      `}{`
    Our team uses microservices - based architecture, RESTful API,
    and other cutting edge technologies to deliver superior results
    for our clients.This approach creates a finished product that is built to last.
 `}</p></Col>

        </div>
    )
}
export default CustomDevelopment;