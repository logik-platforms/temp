import React from "react";
import { Container, Col, Row } from "reactstrap";
import ContactForm from "../../components/ContactForm";
import FooterPage from "../../components/FooterPage";
import "./Contact.css"


const Contact = () => {
    return (
        <div idName="contact">
            <Row>
                <Col>
                    <div>
                        <h1 className="contactTitle"> Connect with us!</h1>
                        <br></br><br></br>
                        <h3 className="contactBody">We would love to hear about your company vision and we are here to create it!</h3>
                        <h3 className="contactBody">From creating enterprise software to adding more functionalilty to your existing website we are here deliver on your companies wildest goals.</h3>
                    </div>
                </Col>
                <Col sm="7">
                    <div className="contactFormDiv">
                        <ContactForm />
                    </div>
                </Col>
            </Row>
            <FooterPage />
        </div>
    )
}

export default Contact;