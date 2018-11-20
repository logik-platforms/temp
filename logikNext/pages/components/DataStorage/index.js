import React from "react";
import { Container, Col, Row } from "reactstrap";
import "./DataStorage.css";

const DataStorage = () => {
    return (
        <div>
            <h1>Secure Data Storage</h1>
            <Container>
                <Row>
                <Col> <img alt="Oracle" className="oracle" src={require("../../img/oracle.png")} />     
              </Col>          
                <Col>
                 <img alt="MySql" className="mysql" src={require("../../img/mysql.png")} />
                 </Col>
                  <Col> 
                  <img alt="PostgreSql" className="postgresql" src={require("../../img/postgres.png")} />        
                 </Col>
                </Row>
                <Row>
                    <Col>
                    <img alt="MongoDB" className="mongodb" src={require("../../img/mongodb.png")} />
                    </Col>
                    <Col>
                    <img alt="Firebase" className="firebase" src={require("../../img/firebase.png")} />
                    </Col>

                </Row>
            </Container>
    
            </div>
    )
}

export default DataStorage;