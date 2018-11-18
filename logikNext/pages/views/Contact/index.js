import React from 'react';
import ContactForm from "../../components/ContactForm";
import Head from "../../components/head";
import { Container, Col, Row } from "../../components/Grid";


const styles = {
    card: {
        margin: 70,
        background: "#e8eaf6"
    }
}

const Contact = () => {
    return(
        <div>
            <Head />
            <Container>
            <h1>Contact Us</h1>
         <div style={styles.card}>
         <Container>
             <Row>
             <Col size="md-7">
                <ContactForm />
                </Col>
             </Row>
            </Container>
         </div>
            </Container>
           
        </div>
    )
}

  export default Contact;