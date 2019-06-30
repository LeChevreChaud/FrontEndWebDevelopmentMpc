import React from 'react';
import {Card, Row, Col } from 'react-bootstrap';

class ContactInfoCard extends React.Component {
  render() {
    return (
      /* *rubic58* 
      Description with email and phone number for contacting business */
      <Card className="contact-info-card">
        <Card.Header>Contact Information</Card.Header>
        <Card.Body>
          <Row>
            <Col lg={12} className="contact-info-col">
              {"Unnamed Road 999"}
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="contact-info-col">
              {"9643 Heerlen"}
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="contact-info-col">
              {"Belgium"}
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="contact-info-col">
              {"+12 3 456 78 99"}
            </Col>
          </Row>
        </Card.Body>
      </Card>

    );
  }
}


export default ContactInfoCard;
