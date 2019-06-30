import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './index.scss'
import ContactInfoCard from './contactInfoCard';
import Banner from '../Banner';
import ConfirmationModalMsg from './confirmationModalMsg';


interface IContactState{
  show:boolean
}


class Contact extends React.Component<any, IContactState> {

  constructor(props:any) {
    super(props);

    this.state = {
      show: false
    }
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({
      show: true
    });
  }

  sendMessage=() =>{
    this.handleShow();
  }

  render() {
    return (
      <Container fluid={true}>
      <ConfirmationModalMsg handleClose={this.handleClose} show={this.state.show}/>
        <Row>
          <Col lg={12} className="img-contact-container">
            <Banner title={"CONTACT US"} subtitle={"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} />
          </Col>
        </Row>
        <Row className="contact-form-container">
          <Col lg={{ offset: 1, span: 5 }}>
            <Row>
              <Col lg={12}>
                <Form>
                { /* *rubic57* 
                 Contact Form */}
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" required/>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="phone" placeholder="0123 45 67 89" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" required/>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="contact-send-button">
             {/* *rubic59* 
              Send button */}
                <Button variant="secondary" onClick={this.sendMessage}>Send</Button>
              </Col>
            </Row>
          </Col>
          <Col lg={{ offset: 1, span: 4 }}>
            <ContactInfoCard />
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Contact;
