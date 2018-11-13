import React, { Component } from 'react';
import { Form, Col, Checkbox, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


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
        <Form horizontal>
           <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={2}>
            Full Name
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="John Smith" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>
      
        <FormGroup controlId="formHorizontalNumber">
          <Col componentClass={ControlLabel} sm={2}>
            Contact Number
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="(555)-555-5555" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>Multiple select</ControlLabel>
      <FormControl componentClass="select" multiple>
        <option value="select">select (multiple)</option>
        <option value="other">Custom Software Development</option>
        <option value="other">Mobile App Development</option>
        <option value="other">Web Development/Design</option>
        <option value="other">Misc</option>
      </FormControl>
    </FormGroup>

     <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
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
      );
    }
  }
  export default ContactForm;