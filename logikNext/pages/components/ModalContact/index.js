import React, { Component } from "react";
import { Modal, ButtonToolbar, Button } from "react-bootstrap";


class ModalContact extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }
    handleShow() {
        this.setState({ show: true});
    }

    handleHide() {
        this.setState({ show: false});
    }

    render () {
        return (
       <div className="contact">
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.handleShow}>
                Contact Us
                </Button>
                <Modal
                {...this.props}
                show={this.state.show}
                onHide={this.handleHide}
                dialogClassName="custom-modal"
                >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">
                Contact Us!
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Just to make sure this works!
                    </p>
                </Modal.Body>
                <Modal.Footer>
<Button onClick={this.handleHide}>Close</Button>
<Button bsStyle="primary">Submit</Button>
                </Modal.Footer>
                </Modal>
            </ButtonToolbar>
       </div>

        )
    }
}

export default ModalContact;