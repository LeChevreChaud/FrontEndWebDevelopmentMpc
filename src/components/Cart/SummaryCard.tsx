import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './index.scss'

interface ISubTotalProps {
  subTotal: number
  shipping: number
  tax: number
  validate: () => void
}


class SummaryCard extends React.Component<ISubTotalProps> {

  render() {
    const {subTotal, shipping, tax} = this.props;
    const taxVal : number = ((subTotal*tax)/100);
    const total = taxVal + subTotal + shipping;

    return (
      <Card>
        <Card.Header>Cart Summary</Card.Header>
        <Card.Body>
          <Row>
            <Col lg={{offset:1,span:6}}>
              {"Subtotal : "}
            </Col>
            <Col lg={3}>
              {subTotal}
            </Col>
          </Row>
          <Row>
            <Col lg={{offset:1,span:6}}>
              {"Shipping : "}
            </Col>
            <Col lg={3}>
              {shipping}
            </Col>
          </Row>
          <Row>
            <Col lg={{offset:1,span:6}}>
              {"Tax ("+tax+" %) : "}
            </Col>
            <Col lg={3}>
              {taxVal}
            </Col>
          </Row>
          <Row>
            <Col lg={{offset:1,span:6}}>
              {"Total : "}
            </Col>
            <Col lg={3}>
              {total.toFixed(2)}
            </Col>
          </Row>
          {subTotal > 0 &&
          <Row>
              <Col lg={12} className="validate-btn">
                 { /* *rubic50* 
                 Check out button */}
                <Button variant="secondary" onClick={this.props.validate}>VALIDATE</Button>
              </Col>
          </Row>
          }
        </Card.Body>
      </Card>
    );
  }
}


export default SummaryCard;
