import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle } from 'reactstrap';
import "./ContactForm.css";

export default class ContactForm extends React.Component {
    render() {
        return (
            <Card className="contactForm">
                <CardTitle className="cardtitle">
<Col sm={5}>
Connect with us</Col>
                </CardTitle>
                <CardBody>
                    <Form>
                        <FormGroup row>
                            <Label for="fullName" sm={2}>Full Name</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="fullName" placeholder="John Smith" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="email" placeholder="johnsmith@yourcompany.com" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="phone" sm={2}>Phone</Label>
                            <Col sm={10}>
                                <Input type="number" name="phone" id="phone" placeholder="(555)-555-555" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSelect" sm={2}>Select</Label>
                            <Col sm={10}>
                                <Input type="select" name="select" id="exampleSelect" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleText" sm={2}>Message</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="text" id="message" placeholder="Tell us about your future project.." />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleFile" sm={2}>File</Label>
                            <Col sm={10}>
                                <Input type="file" name="file" id="exampleFile" />
                                <FormText color="muted">
                                    Please upload relevent files for request. (ie. RFP Proposal Documents, Wireframes)
            </FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 10 }}>
                                <Button>Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}
