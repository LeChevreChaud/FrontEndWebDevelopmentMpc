import React from 'react';
import {Card, Row, Col } from 'react-bootstrap';

interface ISubTotalProps {
  subTotal?: number,
}


class SubTotalCard extends React.Component<ISubTotalProps> {
  render() {
    const { subTotal } = this.props;
    return (
      <Card className="subtotal-card">
        <Card.Body>
          <Row>
            <Col lg={6}>
              {"Subtotal : "}
            </Col>
            <Col lg={3}>
              {subTotal ? subTotal+" " : 0+" "} <i className="fas fa-euro-sign"></i>
            </Col>
          </Row>
        </Card.Body>
      </Card>

    );
  }
}


export default SubTotalCard;
