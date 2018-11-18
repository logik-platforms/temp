import React, { Component } from 'react';
import { Form, Col, Checkbox, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import "./ContactForm.css";

// if (typeof window !== 'undefined') { require('mbdreact'); }

class ContactForm extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: ''
      };
    }
  
    getValidationState() {
      const length = this.state.value.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    render() {
      return (
        <div className="contactForm">
        <div className="card">
        <div className="card-body">
        <Form horizontal>
           <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={2}>
            Full Name
          </Col>
          <Col sm={10}>
            <FormControl type="name" placeholder="John Smith" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={4}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>
      
        <FormGroup controlId="formHorizontalNumber">
          <Col componentClass={ControlLabel} sm={5}>
            Contact Number
          </Col>
          <Col sm={10}>
            <FormControl type="number" placeholder="(555)-555-5555" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>Select (multiple)</ControlLabel>
      <FormControl componentClass="select" multiple>
        <option value="select">select (multiple)</option>
        <option value="software">Custom Software Development</option>
        <option value="mobile">Mobile App Development</option>
        <option value="web">Web Development/Design</option>
        <option value="other">Misc</option>
      </FormControl>
    </FormGroup>

     <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Message</ControlLabel>
      <FormControl componentClass="textarea" placeholder="Tell us a little about your companies vision here!" />
    </FormGroup>
      
    <FormGroup>
      <ControlLabel>Contact us at</ControlLabel>
      <FormControl.Static>contact@logikplatforms.com</FormControl.Static>
    </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
          <Button type="submit">Submit</Button>
          </Col>
        </FormGroup>
      </Form>

      </div>
      </div>
        </div>
      );
    }
  }
  export default ContactForm;