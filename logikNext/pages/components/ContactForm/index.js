import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle } from 'reactstrap';
import PhoneInput from 'react-phone-number-input'
import "./ContactForm.css";
import 'react-phone-number-input/style.css'

export default class ContactForm extends React.Component {
    state = {
        fullName: "",
        email: "",
        validEmail: true,
        phone: "",
        select: "",
        message: ""
    }

    emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    validateEmail(email) {
        this.setState({
            email: email,
            validEmail: this.emailRegex.test(email)
        })
    }

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
                                <Input type="name" name="fullName" id="fullName" placeholder="John Smith" value={this.state.fullName} onChange={fullName => this.setState({ fullName })} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="email" placeholder="johnsmith@yourcompany.com" value={this.state.email} onChange={email => this.validateEmail(email)} invalid={!(this.state.validEmail)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="phone" sm={2}>Phone</Label>
                            <Col sm={10}>
                                {/* <Input type="number" name="phone" id="phone" placeholder="(555)-555-555" /> */}
                                <PhoneInput inputComponenet={Input} placeholder="Enter phone number" value={this.state.phone} onChange={phone => this.setState({ phone })} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSelect" sm={2}>Select</Label>
                            <Col sm={10}>
                                <Input type="select" name="select" id="exampleSelect" /> {/* TODO: Come back to this for state once the form is selectable */}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleText" sm={2}>Message</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="text" id="message" placeholder="Tell us about your future project.." value={this.state.message} onChange={message => this.stateState({ message })} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleFile" sm={2}>File</Label>
                            <Col sm={10}>
                                <Input type="file" name="file" id="exampleFile" multiple />
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
